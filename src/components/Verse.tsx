import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Verse: React.FC = () => {
  return (
    <Box color="white" maxWidth="700px" mx="auto" my={4}>
      <Text fontFamily="Allerta Stencil" fontSize="xl" textAlign="center" fontStyle="italic">
        "We're a raggle-taggle army, with no uniform or guns.<br />
        But we've been called by coincidence so maybe we're the ones...<br />
        to take this Revolution to the street.<br />
        Smile at every solitary person that we meet.<br />
        Wave at total strangers, no matter where they're from.<br />
        We're gonna start a Revolution. We're gonna win it One by One!"
      </Text>
    </Box>
  )
}

export default Verse
