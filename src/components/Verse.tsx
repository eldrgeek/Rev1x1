import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Verse: React.FC = () => {
  return (
    <Box bg="black" color="white" p={4}>
      <Text fontSize="xl" maxWidth="700px" mx="auto">
        As the song suggests, "We're a raggle-taggle army, with no uniform
        or guns. But we've been called by coincidence so maybe we're the
        ones...to take this Revolution to the street. 'Smile at every solitary
        person that we meet. 'Wave at total strangers, no matter where
        they're from. We're gonna start a Revolution. We're gonna win it
        One by One!"
      </Text>
    </Box>
  )
}

export default Verse
