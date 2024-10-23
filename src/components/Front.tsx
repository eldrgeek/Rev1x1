import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Front: React.FC = () => {
  return (
    <Box bg="black" color="white" minHeight="100vh" p={4}>
      <Text fontFamily="stencil-std" fontSize="6xl" textAlign="center" pt={12}>
        Revolution 1x1
      </Text>
      <Text fontSize="4xl" textAlign="center" mt={4}>
        Change the world
      </Text>
      <Text fontSize="4xl" textAlign="center" mt={4}>
        With Love
      </Text>
      <Text fontSize="xl" maxWidth="700px" mx="auto" mt={8}>
        Written in 2007, six years after the unprecedented loss of life and
        horrific destruction of the Twin Towers in NYC, it may seem naive
        to have assumed that global peace and understanding could flow
        from something as commonplace as a friendly greeting to a stranger.
      </Text>
      <Text fontSize="xl" maxWidth="700px" mx="auto" mt={4}>
        We believe that the chain of events in our lives that binds us one-to-another 
        is a sacred mystery.
      </Text>
      <Text fontSize="xl" maxWidth="700px" mx="auto" mt={4}>
        We believe that making the world a better
        place for all peoples calls for an investment of personal kindness.
      </Text>
    </Box>
  )
}

export default Front
