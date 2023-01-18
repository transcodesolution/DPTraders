import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function Asidefilter({ setFilter }) {
  const handleFilterChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    setFilter(data => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Box w={'80%'} margin="auto" mt={4}>
        <Box p={'12px'}>
          <FormControl as="fieldset" onChange={handleFilterChange} name="show">
            <FormLabel as="legend" fontSize={'2xl'}>
              FIRST SHOW
            </FormLabel>
            <RadioGroup defaultValue="0">
              <VStack spacing="18px" alignItems>
                <Radio name="show" value="0">
                  Dublex
                </Radio>
                <Radio name="show" value="1">
                  Khakhi
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box p={'12px'}>
          <FormControl as="fieldset" onChange={handleFilterChange} name="size">
            <FormLabel as="legend">BY SIZE</FormLabel>
            <RadioGroup defaultValue="0">
              <VStack spacing="18px" alignItems>
                <Radio name="size" value="0">
                  Length <ArrowUpIcon color={'green'} />{' '}
                </Radio>
                <Radio name="size" value="1">
                  Length <ArrowDownIcon color={'red'} />{' '}
                </Radio>
                <Radio name="size" value="2">
                  Breadth <ArrowUpIcon color={'green'} />
                </Radio>
                <Radio name="size" value="3">
                  Breadth <ArrowDownIcon color={'red'} />
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box p={'12px'}>
          <FormControl as="fieldset" onChange={handleFilterChange} name="price">
            <FormLabel as="legend">PRICE</FormLabel>
            <RadioGroup defaultValue="0">
              <VStack spacing="18px" alignItems>
                <Radio name="price" value="0">
                  Increment
                </Radio>
                <Radio name="price" value="1">
                  Decrement
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default Asidefilter;
