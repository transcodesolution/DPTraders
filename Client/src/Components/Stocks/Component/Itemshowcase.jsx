import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import dataItem from '../../../freeData/dataItem';

function Itemshowcase({ filter }) {
  const [data, setData] = useState(dataItem);
  useEffect(() => {
    let temp = data;

    temp = temp.sort((item1, item2) => {
      switch (filter.size) {
        case '0':
          return filter.price === '0'
            ? item1.length - item2.length || item1.rate - item2.rate
            : item1.length - item2.length || item2.rate - item1.rate;
        case '1':
          return filter.price === '0'
            ? item2.length - item1.length || item1.rate - item2.rate
            : item2.length - item2.length || item2.rate - item1.rate;
        case '2':
          return filter.price === '0'
            ? item1.breadth - item2.breadth || item1.rate - item2.rate
            : item1.breadth - item2.breadth || item2.rate - item1.rate;
        case '3':
          return filter.price === '0'
            ? item2.breadth - item1.breadth || item1.rate - item2.rate
            : item2.breadth - item1.breadth || item2.rate - item1.rate;

        default:
          return true;
      }
    });

    setData([...temp]);
  }, [filter, data]);

  return (
    <>
      <Box w={'95%'} h="100%" margin="auto" mt={4} p="4">
        <Text fontSize={'2xl'} fontWeight="semibold" mb={3} color="gray.700">
          {' '}
          DUBLEX
        </Text>
        <Box>
          <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
            {data.map(data =>
              data.cat === 'dublex' ? (
                <>
                  <Card maxW="sm">
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">
                          {' '}
                          <HStack justifyContent={'space-evenly'}>
                            <Box>L: {data.length}</Box>
                            <Box>B: {data.breadth}</Box>
                            <Box>W: {data.weight}</Box>
                          </HStack>
                        </Heading>
                        <Text>{data.discription}</Text>
                        <Text>{data.cat}.</Text>
                        <Text color="blue.600" fontSize="2xl">
                          ₹{data.rate}/kg
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter></CardFooter>
                  </Card>
                </>
              ) : null
            )}
          </SimpleGrid>
        </Box>
        <Text fontSize={'2xl'} fontWeight="semibold" my={5} color="gray.700">
          {' '}
          KHAKHI
        </Text>
        <Box>
          <SimpleGrid columns={[1, 2, 2, 3]} spacing={10}>
            {data.map(data =>
              data.cat === 'khakhi' ? (
                <>
                  <Card maxW="sm">
                    <CardBody>
                      <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">
                          {' '}
                          <HStack justifyContent={'space-evenly'}>
                            <Box>L: {data.length}</Box>
                            <Box>B: {data.breadth}</Box>
                            <Box>W: {data.weight}</Box>
                          </HStack>
                        </Heading>
                        <Text>{data.discription}</Text>
                        <Text>{data.cat}.</Text>
                        <Text color="blue.600" fontSize="2xl">
                          ₹{data.rate}/kg
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter></CardFooter>
                  </Card>
                </>
              ) : null
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Itemshowcase;
