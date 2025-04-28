import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Skeleton } from "@/components/ui/skeleton";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
export const examples = [
  {
    name: "Using isLoaded prop",
    Code: function Example() { return (<Box className="w-[290px] h-[400px] p-4 rounded-sm bg-background-100 gap-3"><Skeleton variant="rounded" className="h-44 w-64 rounded-sm" ><Image className="h-44 w-64 rounded-sm" source={{ uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', }} /></Skeleton><VStack className="gap-2"><Text className="text-primary-700 text-sm">May 15, 2023</Text><Text className="text-primary-900 font-bold">The Power of Positive Thinking</Text><Text className="text-primary-700 text-sm">Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges.</Text></VStack><HStack className="gap-2"><Avatar size="xs"><AvatarFallbackText>John Smith</AvatarFallbackText></Avatar><Text className="text-sm font-bold">John Smith</Text></HStack></Box>); }
  }
];