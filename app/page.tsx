"use client"
import Laptop from '@/components/Laptop'
import MainCanvas from '@/components/MainCanvas'
import MyAvatar from '@/components/MyAvatar'
import Main from '@/pages/Main'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Box
        width={{
          base: "100vw",
          md: "100vh",
        }}
        height={{
          base: "100vw",
          md: "100vh",
        }}
        position='fixed'
        left={0}
        bottom={0}>
        <MainCanvas>
          <MyAvatar />
          {/* <Laptop /> */}
        </MainCanvas>
      </Box>
      <Main />
    </ChakraProvider >
  )
}
