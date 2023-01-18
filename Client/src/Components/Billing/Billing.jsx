import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  Select,
  SimpleGrid,
  Square,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { AddIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Tablemain from './Component/Tablemain';
import discription_model from '../../Objectmodels/Billing/discription'; // fullBillDetail,
import Logo from '../../Assets/logo_main.png';
import axios from 'axios';
function Billing() {
  const toast = useToast();
  // const [fullBill, setFullBill] = useState(fullBillDetail);
  const [billingData, setBillingData] = useState([]);
  const [discription, setDiscription] = useState(discription_model);
  const [isEdit, setIsEdit] = useState(false);
  const [editIDX, setEditIDX] = useState(-1);
  const _recipient = useRef(null);
  const _address = useRef(null);
  const _challan = useRef(null);
  const _date = useRef(null);

  const handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    setDiscription(data => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const handleAdd = () => {
    if (
      discription.length &&
      discription.breadth &&
      discription.quantity &&
      discription.weight &&
      discription.rate
    ) {
      setBillingData(data => {
        return [...data, discription];
      });
      setDiscription(discription_model);
    } else {
      toast({
        position: 'top-right',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            All Value Is Required
          </Box>
        ),
        duration: 2000,
      });
    }
  };
  const handleSingleDelet = idx => {
    setBillingData(data => {
      return data.filter((data, id) => id !== idx);
    });
  };
  const handleEdit = idx => {
    setDiscription(billingData[idx]);
    setEditIDX(idx);
  };
  const handleUpdateAfterEdit = () => {
    setBillingData(data => {
      let newArr = data;
      newArr[editIDX] = discription;
      return newArr;
    });
    disableEdit();
    setEditIDX(-1);
    setDiscription(discription_model);
  };
  const enableEdit = () => setIsEdit(true);
  const disableEdit = () => setIsEdit(false);

  const generateBill = async () => {
    try {
      await axios({
        method: 'post',
        url: 'http://localhost:8000/save_bill',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        data: {
          recipient: _recipient.current.value,
          address: _address.current.value,
          challan: _challan.current.value,
          billCreationDate: _date.current.value,
          billItems: billingData,
        },
      }).then(() => {
        setBillingData([]);
        _recipient.current.value = '';
        _address.current.value = '';
        _challan.current.value = Number(_challan.current.value) + 1;
        toast({
          position: 'top-right',
          render: () => (
            <Box color="green" p={3} bg="green.400">
              Bill Generated SuccessFully
            </Box>
          ),
          duration: 2000,
        });
      });
    } catch (error) {
      toast({
        position: 'top-right',
        render: () => (
          <Box color="white" p={3} bg="red.400">
            {error.message}
          </Box>
        ),
        duration: 1000,
      });
    }
  };

  useEffect(() => {
    _date.current.value = new Date().toJSON().slice(0, 10);
    _challan.current.value = 1;
  }, []);

  return (
    <>
      <Container
        maxW={'container.xl'}
        border="1px"
        borderColor={'#ddd'}
        className="billing_container"
        mt={'8'}
        minH="200vh"
      >
        <Box>
          <section>
            <Box fontSize={'16px'}>
              <HStack justifyContent={'space-between'}>
                <Box>
                  <Square pt={1}>
                    <Image
                      src={Logo}
                      w="100px"
                      alt="LOGO"
                      borderRadius={'lg'}
                      opacity=".8"
                      className="billing_logo"
                    />
                  </Square>
                </Box>
                <Box>
                  Shree Ganeshay Namah
                  <Text textAlign={'center'}>JAI BABARI</Text>
                </Box>
                <Box letterSpacing={'1px'}>
                  <Text>M:9824766143</Text>
                  <Text>W:9824766143</Text>
                </Box>
              </HStack>
            </Box>
          </section>
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
          <section className="recipant_info">
            <Grid
              h="140px"
              templateRows="repeat(1  , 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
              color="gray.100"
              borderBottom={'1px'}
              borderColor="#ddd"
            >
              <GridItem colSpan={5} color="black" borderRadius={'lg'}>
                <HStack>
                  <VStack w={'10%'} alignItems="flex-start">
                    <Box p={'4'} fontSize="15px">
                      TO Mr/Ms.
                    </Box>
                    <Box p={'4'} fontSize="15px">
                      ADDRESS
                    </Box>
                  </VStack>
                  <VStack w="90%">
                    <Box p={'4'} w="100%">
                      <Input
                        border={'none'}
                        borderBottom="1px"
                        fontSize={'15px'}
                        w="100%"
                        _focusVisible={{
                          border: 'none',
                          borderBottom: '1px solid #ddd',
                        }}
                        ref={_recipient}
                      />
                    </Box>
                    <Box p={'4'} w="100%">
                      <Input
                        fontSize={'15px'}
                        w="100%"
                        border={'none'}
                        borderBottom="1px"
                        _focusVisible={{
                          border: 'none',
                          borderBottom: '1px solid #ddd',
                        }}
                        ref={_address}
                      />
                    </Box>
                  </VStack>
                </HStack>
              </GridItem>
              <GridItem colSpan={1}>
                <VStack
                  // bg="blue.600"
                  color={'black'}
                  borderRadius={'lg'}
                  justifyContent={'space-between'}
                  h="80%"
                >
                  <InputGroup>
                    <Input
                      type={'number'}
                      color={'black !important'}
                      borderColor="black"
                      h={'3.5rem'}
                      fontSize="2xl"
                      ref={_challan}
                    />
                  </InputGroup>
                  <Input
                    // placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    borderColor="black"
                    h="3.5rem"
                    ref={_date}
                    onChange={event => {
                      _date.current.value = new Date(event.target.value)
                        .toJSON()
                        .slice(0, 10);
                      console.log(_date.current.value);
                    }}
                  />
                </VStack>
              </GridItem>
            </Grid>
          </section>
          <section>
            <Grid
              h="50px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
              color="gray.100"
              mt="2em"
              px={'1'}
            >
              <GridItem colSpan={5} color="black" borderRadius={'lg'}>
                <SimpleGrid columns={[2, null, 3]} spacing="40px">
                  <Box width={'100%'}>
                    <HStack>
                      <Box>
                        <Text textAlign={'center'}>Length</Text>
                        <Input
                          value={discription.length}
                          name="length"
                          onChange={handleChange}
                        />
                      </Box>
                      <span>
                        <SmallCloseIcon position={'relative'} top="8px" />
                      </span>
                      <Box>
                        <Text textAlign={'center'}>Breadth</Text>
                        <Input
                          value={discription.breadth}
                          name="breadth"
                          onChange={handleChange}
                        />
                      </Box>
                    </HStack>
                  </Box>
                  <Box width={'100%'}>
                    <HStack>
                      <Box>
                        <Text textAlign={'center'}>Quantity</Text>
                        <Input
                          value={discription.quantity}
                          name="quantity"
                          onChange={handleChange}
                        />
                      </Box>
                      <span>
                        <SmallCloseIcon position={'relative'} top="8px" />
                      </span>
                      <Box>
                        <Text textAlign={'center'}>Weight</Text>
                        <Input
                          value={discription.weight}
                          name="weight"
                          onChange={handleChange}
                        />
                      </Box>
                    </HStack>
                  </Box>
                  <Box width={'100%'}>
                    <HStack justifyContent={'center'}>
                      <Box>
                        <Text textAlign={'center'}>Cetegory</Text>
                        <Input
                          as={'select'}
                          name="category"
                          onChange={handleChange}
                        >
                          <option value="Dublex">Dublex</option>
                          <option value="Khakhi">Khakhi</option>
                        </Input>
                      </Box>
                      <Box>
                        <Text textAlign={'center'}>Rate/kg</Text>
                        <Input
                          value={discription.rate}
                          name="rate"
                          onChange={handleChange}
                        />
                      </Box>
                    </HStack>
                  </Box>
                </SimpleGrid>
              </GridItem>
              <GridItem colSpan={1} borderRadius={'lg'} margin={'auto'}>
                {!isEdit ? (
                  <Button
                    bg={'blue.500'}
                    color="white"
                    _hover={{ bg: 'blue.600' }}
                    onClick={handleAdd}
                  >
                    ADD <AddIcon ml={'3'} />{' '}
                  </Button>
                ) : (
                  <Button
                    bg={'blue.500'}
                    color="white"
                    _hover={{ bg: 'blue.600' }}
                    onClick={handleUpdateAfterEdit}
                  >
                    UPDATE
                  </Button>
                )}
              </GridItem>
            </Grid>
          </section>
          <section>
            <Tablemain
              billingData={billingData}
              handleSingleDelet={handleSingleDelet}
              handleEdit={handleEdit}
              enableEdit={enableEdit}
              disableEdit={disableEdit}
            />
          </section>
          <section>
            <Box textAlign={'right'}>
              <Button
                color={'white'}
                bg="green.400"
                p="1.5em"
                fontSize={'15px'}
                textTransform="uppercase"
                _hover={{ bg: 'green.600' }}
                onClick={generateBill}
              >
                Generate Bill
              </Button>
              <Button
                color={'white'}
                bg="red.400"
                p="1.5em"
                fontSize={'15px'}
                textTransform="uppercase"
                _hover={{ bg: 'red.600' }}
                ml="2"
              >
                Clear Bill
              </Button>
            </Box>
          </section>
        </Box>
      </Container>
    </>
  );
}

export default Billing;
