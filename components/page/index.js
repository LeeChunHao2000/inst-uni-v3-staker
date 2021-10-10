import { Box, Flex } from '@chakra-ui/layout'
import Footer from './footer'
import Header from './header'
import Alerts from './alerts'
import React from 'react'
import Head from 'next/head'

import { useColorModeValue } from '@chakra-ui/color-mode'

const Layout = ({ children, title }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800')

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={bgColor}
      px={[4, 4, 12]}
    >
      <Head>
        <title>{title ? title + ` - UniV3 Staker` : `UniV3 Staker`}</title>
        <link rel="icon" href="/favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ChunHaoLee" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Instadapp (INST) staker" />
        <meta
          property="og:description"
          content="A staking UI for the INST reward program."
        />
        <meta property="og:site_name" content="Uniswap V3 staker" />
        <meta
          property="og:image"
          content="/image.png"
        />
      </Head>
      <Alerts />
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  )
}
export default Layout
