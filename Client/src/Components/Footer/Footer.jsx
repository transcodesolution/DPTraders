import { Box } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <>
      <Box
        mw="100%"
        p="4"
        bgColor={'blue.600'}
        color="gray.200"
        textAlign={'center'}
      >
        Created By @shubham And Team
      </Box>
    </>
  );
}

export default Footer;
