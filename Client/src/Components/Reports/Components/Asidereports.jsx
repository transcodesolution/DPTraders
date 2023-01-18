import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function Asidereports({ setCurrentBillId, changeShow }) {
  const { isLoading, error, data } = useQuery('singBillDate', () =>
    axios.get('http://localhost:8000/get_data_by_date')
  );
  if (isLoading) return <></>;
  return (
    <>
      <Box w={'90%'} margin="auto">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight={'semibold'}
                >
                  PAST BILLS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Accordion>
                {data?.data?.map(_data => (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {`${new Date(
                            _data[0].billCreationDate
                          ).getDate()}-${new Date(
                            _data[0].billCreationDate
                          ).getMonth()}-${new Date(
                            _data[0].billCreationDate
                          ).getFullYear()}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {_data?.map((__data, idx) => {
                        return (
                          <Button
                            w={'100%'}
                            m="1"
                            p="2"
                            bg={'transparent'}
                            border="1px"
                            borderColor={'blue.100'}
                            _hover={{ bg: 'blue.300', color: 'white' }}
                            onClick={() => {
                              setCurrentBillId(__data._id);
                              changeShow('bills');
                            }}
                          >
                            {__data.recipient}
                          </Button>
                        );
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight={'semibold'}
                >
                  DATA ANALYSIS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {['Daily Data', 'Monthly Data', 'Weekly Data'].map(data => {
                return (
                  <Button
                    w={'100%'}
                    m="1"
                    p="2"
                    bg={'transparent'}
                    border="1px"
                    borderColor={'blue.100'}
                    _hover={{ bg: 'blue.300', color: 'white' }}
                    onClick={() => {
                      changeShow('charts');
                    }}
                  >
                    {data}
                  </Button>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default Asidereports;
