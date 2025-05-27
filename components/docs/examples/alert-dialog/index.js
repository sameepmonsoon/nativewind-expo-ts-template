import { UploadCloud } from "lucide-react-native";
import React from "react";
import { Icon, TrashIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from "@/components/ui/alert-dialog";

export const examples = [
  {
    name: "AlertDialog with image",
    Code: function Example(){ const [showAlertDialog, setShowAlertDialog] = React.useState(false); const handleClose = () =>setShowAlertDialog(false); return (<><Button onPress={() =>setShowAlertDialog(true)}><ButtonText>Pay</ButtonText></Button><AlertDialog isOpen={showAlertDialog} onClose={handleClose}><AlertDialogBackdrop /><AlertDialogContent className="p-0 max-w-[590px] sm:flex-row border-primary-800 rounded-xl"><Box className="bg-primary-600 min-w-[123px] items-center justify-center native:max-h-[95px]"><Image source={{ uri: "https://gluestack.github.io/public-blog-video-assets/Image%20Container.png", }} alt="image" className="min-h-[95px] min-w-[95px] h-full w-full" size="none" /></Box><AlertDialogBody className="" contentContainerClassName="p-6 flex-row justify-between gap-6 md:gap-9 items-center" ><VStack><Heading size="md" className="text-typography-950 font-semibold leading-6">Get Additional Discount</Heading><Text className="pt-2 text-typography-950" size="sm">Upgrade your plan before your trial ends yo get 5% discount. Use code{' '}<Text className="font-bold" size="sm">#PRO005</Text></Text></VStack><Button size="sm" className="hidden sm:flex" onPress={handleClose}><ButtonText>Upgrade</ButtonText></Button></AlertDialogBody></AlertDialogContent></AlertDialog></>); }
  },
  {
    name: "AlertDialog with icon + cta",
    Code: function Example(){ const [showAlertDialog, setShowAlertDialog] = React.useState(false); const handleClose = () =>setShowAlertDialog(false); return (<><Button onPress={() =>setShowAlertDialog(true)}><ButtonText>Upload</ButtonText></Button><AlertDialog isOpen={showAlertDialog} onClose={handleClose} ><AlertDialogBackdrop /><AlertDialogContent className="p-4 gap-4 max-w-[649px] w-full md:flex-row mx-2"><AlertDialogBody className="" contentContainerClassName="flex-row gap-4" ><Box className="h-10 min-[350px]:h-14 w-12 min-[350px]:w-14 rounded-full bg-background-50 items-center justify-center"><Icon as={UploadCloud} className="stroke-background-900" size="xl" /></Box><VStack className="gap-1"><Heading size="md" className="text-typography-950 font-semibold">Cloud storage full!</Heading><Text size="sm">You have used up all the storage you have.</Text></VStack></AlertDialogBody><AlertDialogFooter><Button variant="outline" action="secondary" onPress={handleClose} size="sm" ><ButtonText>Cancel</ButtonText></Button><Button size="sm" onPress={handleClose}><ButtonText>Upgrade Storage</ButtonText></Button></AlertDialogFooter></AlertDialogContent></AlertDialog></>); }
  },
  {
    name: "AlertDialog with Delete Option",
    Code: function Example(){ const [showAlertDialog, setShowAlertDialog] = React.useState(false); const handleClose = () =>setShowAlertDialog(false); return (<><Button onPress={() =>setShowAlertDialog(true)}><ButtonText>Delete Invoice</ButtonText></Button><AlertDialog isOpen={showAlertDialog} onClose={handleClose}><AlertDialogBackdrop /><AlertDialogContent className="w-full max-w-[415px] gap-4 items-center"><Box className="rounded-full h-[52px] w-[52px] bg-background-error items-center justify-center"><Icon as={TrashIcon} size="lg" className="stroke-error-500" /></Box><AlertDialogHeader className="mb-2"><Heading size="md">Delete account?</Heading></AlertDialogHeader><AlertDialogBody><Text size="sm" className="text-center">The invoice will be deleted from the invoices section and in the documents folder. This cannot be undone.</Text></AlertDialogBody><AlertDialogFooter className="mt-5"><Button size="sm" action="negative" onPress={handleClose} className="px-[30px]" ><ButtonText>Delete</ButtonText></Button><Button variant="outline" action="secondary" onPress={handleClose} size="sm" className="px-[30px]" ><ButtonText>Cancel</ButtonText></Button></AlertDialogFooter></AlertDialogContent></AlertDialog></>); }
  }
];