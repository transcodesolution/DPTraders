import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { barData } from '../../../freeData/dataItem';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import axios from 'axios';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'DP Traders Daily Chart',
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Kgs',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Length / Breadth',
      },
    },
  },
};

const labels = [
  '8/8',
  '8/9',
  '8/10',
  '9/10',
  '9/11',
  '9/12',
  '9/13',
  '10/12',
  '10/13',
  '12/15',
  '9/36',
];

export const data = {
  labels,
  datasets: [
    {
      barPercentage: 0.5,
      label: 'Dataset 1',
      data: barData,
      backgroundColor: '#63b3ed',
    },
  ],
};

export default function Chartsdata() {
  const { data: newData, isLoading } = useQuery('daily-data', () =>
    axios.get('http://localhost:8000/report/daily')
  );
  if (isLoading) {
    return <>Loading</>;
  }
  return (
    <Box w={'85%'} margin="auto">
      <Bar options={options} data={data} />;
      <HStack w={'100%'} ml="auto" mt="4" pl={'14'} h="150px">
        <Box
          bg={'gray.200'}
          w="100%"
          h="150px"
          borderRadius={'lg'}
          boxShadow="lg"
        >
          <VStack h={'100%'} color={'blue.600'} justifyContent={'center'}>
            <Text fontSize={'3xl'}>TOTAL TURNOVER </Text>
            <Text fontSize={'2xl'} fontWeight="semibold">
              12,000 Kg
            </Text>
          </VStack>
        </Box>
        <Box bg={'blue.600'} h="150px" w="100%" borderRadius={'lg'}>
          {' '}
          <VStack h={'100%'} color={'gray.200'} justifyContent={'center'}>
            <Text fontSize={'3xl'}>TOTAL SALES </Text>
            <Text fontSize={'2xl'} fontWeight="semibold">
              1,20,000 ₹
            </Text>
          </VStack>
        </Box>
        <Box
          bg={'gray.200'}
          w="100%"
          h="150px"
          borderRadius={'lg'}
          boxShadow="lg"
        >
          <VStack h={'100%'} color={'blue.600'} justifyContent={'center'}>
            <Text fontSize={'3xl'}>TOTAL PROFIT</Text>
            <Text fontSize={'2xl'} fontWeight="semibold">
              {120000 * 0.3} ₹
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
