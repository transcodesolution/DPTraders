import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Introjpg from '../../../Assets/mission.jpg';
function Mission() {
  return (
    <Flex justifyContent={'space-between'} p="8" alignItems={'center'} h="80vh">
      <Box w={'50%'}>
        <Box w="90%" pl={'8'}>
          <Text fontSize={'5xl'} color="blue.600">
            Our Mission
          </Text>
          <Text pt="4" letterSpacing={'1px'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ut
            temporibus! Temporibus hic beatae unde nemo vel eaque nulla ut quas
            ea accusamus accusantium est, numquam porro aspernatur corrupti
            ducimus repellat fugiat, odit molestias.
          </Text>
        </Box>
      </Box>

      <Image w={'50%'} src={Introjpg} alt="naruto" objectFit="cover" />
    </Flex>
  );
}

export default Mission;
