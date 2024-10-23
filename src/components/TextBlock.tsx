import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface TextBlockProps {
  heading?: string;
  body?: string | React.ReactNode[];
}

const TextBlock: React.FC<TextBlockProps> = ({ heading, body }) => {
  return (
    <Box color="white">
      {heading && (
        <Text fontFamily="stencil-std" mt={4} fontSize="4xl">
          {heading}
        </Text>
      )}
      <Text
        fontFamily="Allerta Stencil"
        maxWidth="700px"
        mx={10}
        textAlign="left"
        fontSize="xl"
      >
        {Array.isArray(body)
          ? body.map((seg, index) => <span key={index}>{seg}</span>)
          : body}
      </Text>
    </Box>
  );
};

export default TextBlock;
