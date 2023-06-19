import Laptop from '@/components/Laptop'
import MainCanvas from '@/components/MainCanvas'
import MyAvatar from '@/components/MyAvatar'
import Main from '@/pages/Main'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <MainCanvas>
        <MyAvatar />
        {/* <Laptop /> */}
      </MainCanvas>
      <Main />
    </>
  )
}
