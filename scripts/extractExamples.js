const fs = require("fs");
const path = require("path");

const components = [
  "accordion",
  "actionsheet",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "bottomsheet",
  "box",
  "button",
  "card",
  "center",
  "checkbox",
  "divider",
  "drawer",
  "fab",
  "form-control",
  "grid",
  "heading",
  "hstack",
  "icon",
  "image",
  "input",
  "link",
  "menu",
  "modal",
  "popover",
  "portal",
  "pressable",
  "progress",
  "radio",
  "select",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "table",
  "text",
  "textarea",
  "toast",
  "tooltip",
  "vstack",
];

function extractExamplesCode(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const uncommentedContent = fileContent
      .replace(/{\s*\/\*[\s\S]*?\*\/\s*}/g, "")
      .replace("{...props}", "");

    // First collect all sections
    const headings = [];
    const headingRegex = /(?:####|#####)\s+([^\n]+)/g;
    let match;

    // Collect all headings with their levels
    while ((match = headingRegex.exec(uncommentedContent)) !== null) {
      const level = match[0].startsWith("#####") ? 5 : 4;
      headings.push({
        level,
        name: match[1].trim(),
        position: match.index,
      });
    }

    // Get all code blocks and remove imports first
    const codeBlocks = [
      ...uncommentedContent.matchAll(
        /metaData\s*=\s*{[^}]*\s*code\s*:\s*`([^`]+)`/g
      ),
    ].map((match, index) => {
      // First remove imports, then clean up the code
      let code = match[1]
        .replace(/import\s+.*;(\r?\n|\r)*/g, "") // Remove imports more reliably
        .replace(/^\s*[\r\n]/gm, "") // Remove empty lines left by import removal
        .trim();

      return {
        code,
        position: match.index,
      };
    });

    const examples = [];
    let currentMainExample = null;
    let codeBlockIndex = 0;

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];

      if (heading.level === 4) {
        if (currentMainExample && currentMainExample.subExamples.length > 0) {
          examples.push(currentMainExample);
        }

        currentMainExample = {
          name: heading.name,
          subExamples: [],
        };

        let j = i + 1;
        let hasSubExamples = false;
        while (j < headings.length && headings[j].level === 5) {
          hasSubExamples = true;
          const subExample = headings[j];

          const codeBlock = codeBlocks[codeBlockIndex++];
          if (codeBlock) {
            // Clean up code formatting after imports are removed
            let code = codeBlock.code
              .replace(/\s*{"\s*"\s*}\s*/g, "")
              .replace(/\s+/g, " ")
              .replace(/>\s+/g, ">")
              .replace(/\s+</g, "<");

            currentMainExample.subExamples.push({
              subName: subExample.name,
              Code: code,
            });
          }
          j++;
        }

        if (!hasSubExamples) {
          const codeBlock = codeBlocks[codeBlockIndex++];
          if (codeBlock) {
            // Clean up code formatting after imports are removed
            let code = codeBlock.code
              .replace(/\s*{"\s*"\s*}\s*/g, "")
              .replace(/\s+/g, " ")
              .replace(/>\s+/g, ">")
              .replace(/\s+</g, "<");

            examples.push({
              name: heading.name,
              Code: code,
            });
          }
        }

        i = j - 1;
      }
    }

    return examples;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function processComponent(componentName) {
  const extractedFilePath = path.join(
    __dirname,
    "..",
    "components",
    "docs",
    "examples",
    componentName,
    "extracted_code.mdx"
  );

  if (!fs.existsSync(extractedFilePath)) {
    console.log(`No mdx file found for ${componentName}, skipping...`);
    return;
  }

  const outputFilePath = path.join(
    path.dirname(extractedFilePath),
    "examples.js"
  );

  const examples = extractExamplesCode(extractedFilePath);

  if (examples.length > 0) {
    // Create the output content with proper formatting
    let fileContent = "export const examples = [\n";

    examples.forEach((example, index) => {
      fileContent += "  {\n";
      fileContent += `    name: "${example.name}",\n`;

      if (example.subExamples) {
        fileContent += "    subExamples: [\n";
        example.subExamples.forEach((subExample, subIndex) => {
          fileContent += "      {\n";
          fileContent += `        subName: "${subExample.subName}",\n`;
          fileContent += `        Code: ${subExample.Code}\n`;
          fileContent +=
            "      }" +
            (subIndex < example.subExamples.length - 1 ? "," : "") +
            "\n";
        });
        fileContent += "    ]\n";
      } else {
        fileContent += `    Code: ${example.Code}\n`;
      }

      fileContent += "  }" + (index < examples.length - 1 ? "," : "") + "\n";
    });

    fileContent += "];";

    fs.writeFileSync(outputFilePath, fileContent, "utf-8");
    console.log(`Extracted examples saved to: ${outputFilePath}`);
  } else {
    console.log("No examples found in the file.");
  }
}

async function processAllComponents() {
  console.log("🚀 Starting component processing...\n");

  for (const component of components) {
    await processComponent(component);
  }
  // await processComponent("actionsheet");

  console.log("\n✨ All components processed!");
}

processAllComponents();
