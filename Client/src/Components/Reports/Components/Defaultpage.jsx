import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Ocean from '../../../Assets/welcome1.jpg';
function Defaultpage() {
  return (
    <>
      <Box
        display={'flex'}
        className="bg_set"
        justifyContent="center"
        h={'90vh'}
        w="100%"
        my="4"
      >
        <Box
          className="bg_font"
          h={'100%'}
          color="blue.600"
          display={'flex'}
          justifyContent="center"
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Text fontSize={'4xl'} position="relative" top={16}>
            {' '}
            WELCOME TO
          </Text>
          <Text fontSize={'9xl'}>DP &nbsp;TRADERS</Text>
        </Box>
      </Box>
    </>
  );
}

export default Defaultpage;
