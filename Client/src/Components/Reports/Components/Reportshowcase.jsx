import {
  Box,
  Container,
  Grid,
  GridItem,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Tablemain from '../../Billing/Component/Tablemain';
const billingData = [
  {
    length: 9,
    breadth: 10,
    quantity: 15,
    weight: 15,
    rate: 49,
  },
  {
    length: 9,
    breadth: 12,
    quantity: 105,
    weight: 15,
    rate: 51,
  },
  {
    length: 9,
    breadth: 36,
    quantity: 40,
    weight: 20,
    rate: 38,
  },
];
function Reportshowcase({ fetchingBillId }) {
  const { isLoading, error, data } = useQuery(
    `billsDate-${fetchingBillId}`,
    () => axios.get(`http://localhost:8000/get_singleBill${fetchingBillId}`)
  );
  console.log('data', data);
  if (isLoading)
    return (
      <Box display="flex" justifyContent={'center'} h="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          margin={'auto'}
        />
      </Box>
    );
  return (
    <>
      <Container
        maxW={'container.md'}
        border="1px"
        borderColor={'#ddd'}
        className="billing_container"
        mt={'8'}
        // minH="200vh"
      >
        <Box>
          <section className="billing_company_name">
            <Text fontSize={'6xl'}>D. P. Traders</Text>
            <Text
              position={'relative'}
              top="-6px"
              p={'2'}
              bg="blue.600"
              w={'35%'}
              margin={'auto'}
              borderRadius="lg"
              color={'gray.100'}
            >
              Dealers In All Kind OF Paper Materials
            </Text>
          </section>
          <section className="forborderbottom">
            <Text textAlign={'center'} textTransform="uppercase" pb={4}>
              386, Nishal Faliyu, NR. Meera Ambika Society, Puna Gam,Surat -
              395010
            </Text>
          </section>
          <section className="">
            <Grid
              h="50px"
              templateRows="repeat(1  , 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={8}
              color="gray.700"
              fontWeight={'bold'}
              textTransform="uppercase"
            >
              <GridItem colSpan={5} borderRadius={'lg'}>
                <VStack w="100%">
                  <Box
                    p={'2'}
                    w="100%"
                    borderBottom={'1px'}
                    borderColor="#978d8d"
                  >
                    {data.data.recipient}
                  </Box>
                  <Box
                    p={'2'}
                    w="100%"
                    borderBottom={'1px'}
                    borderColor="#978d8d"
                  >
                    {data.data.address}
                  </Box>
                </VStack>
              </GridItem>
              <GridItem colSpan={1}>
                <VStack
                  borderRadius={'lg'}
                  justifyContent={'space-between'}
                  h="80%"
                >
                  <Box
                    p={'2'}
                    w="100%"
                    borderBottom={'1px'}
                    borderColor="#978d8d"
                  >
                    {data.data.challan}
                  </Box>
                  <Box
                    p={'2'}
                    w="100%"
                    borderBottom={'1px'}
                    borderColor="#978d8d"
                  >
                    {`${new Date(data.data.billCreationDate).getDate()}-${
                      new Date(data.data.billCreationDate).getMonth() + 1
                    }-${new Date(data.data.billCreationDate).getFullYear()}`}
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </section>

          <section>
            <Tablemain
              lineLength={10}
              actionShow={false}
              billingData={data.data.billItems}
            />
          </section>
        </Box>
      </Container>
    </>
  );
}

export default Reportshowcase;
