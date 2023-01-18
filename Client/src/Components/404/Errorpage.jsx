import { Box, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../Assets/error.jpg';
function Errorpage() {
  return (
    <>
      <Container>
        <Box>
          <Image src={Error} />
        </Box>

        <Link to="/">
          <Text
            textAlign={'center'}
            fontSize="3xl"
            color={'blue'}
            justifyContent="center"
          >
            www.dptraders.com
          </Text>
        </Link>
      </Container>
    </>
  );
}

export default Errorpage;
