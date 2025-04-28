import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Heading } from "@/components/ui/heading";
export const examples = [
  {
    name: "Value",
    Code: function Example() { return (<VStack space="lg" className="max-w-80 w-full"><Text size="lg">Downloading 55%</Text><Progress value={55} className='w-full h-1'><ProgressFilledTrack className='h-1' /></Progress></VStack>); }
  },
  {
    name: "Color",
    Code: function Example() { return (<VStack space="3xl" className="max-w-96 w-full"><Progress value={46} className='w-full h-2' size="sm"><ProgressFilledTrack className='bg-emerald-600'/></Progress><Progress value={46} className='w-full h-2' size="sm"><ProgressFilledTrack className='bg-amber-600'/></Progress><Progress value={46} className='w-full h-2' size="sm"><ProgressFilledTrack className='bg-fuchsia-600'/></Progress><Progress value={46} className='w-full h-2' size="sm"><ProgressFilledTrack className='bg-cyan-600'/></Progress></VStack>); }
  },
  {
    name: "Custom",
    Code: function Example() { return (<VStack space="lg" className="max-w-[410px] w-full"><Heading>Internal Storage</Heading><Progress value={46} className='w-full h-2 bg-lime-100'><ProgressFilledTrack className='h-2 bg-lime-500' /></Progress><Text size="md">14GB</Text></VStack>); }
  }
];