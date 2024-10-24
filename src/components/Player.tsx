import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@chakra-ui/react';

interface PlayerProps {
  url: string;
}

const Player: React.FC<PlayerProps> = ({ url }) => {
  return (
    <Box border="2px" maxWidth="700px" bg="black" color="white">
      <ReactPlayer width="100%" url={url} playing controls={true} />
    </Box>
  );
};

export default Player;
