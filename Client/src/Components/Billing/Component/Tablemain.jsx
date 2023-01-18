import { DeleteIcon, EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

function Tablemain({
  billingData,
  handleSingleDelet,
  handleEdit,
  enableEdit,
  lineLength,
  actionShow,
}) {
  function getTotalAmount(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].quantity * arr[i].weight * arr[i].rate;
    }
    return sum;
  }
  return (
    <>
      <TableContainer mt={16} borderTop="1px" borderColor={'#ddd'}>
        <Table variant="simple" colorScheme="blackAlpha">
          <TableCaption>
            <Box>
              <HStack>
                <Box>
                  <Text textAlign={'left'}>
                    {' '}
                    Goods Once Sold Will Not Be Taken Back.
                  </Text>
                  <Text>
                    If Any Difference Is Found In Quality & Rate It Shoud Be
                    Notified Within 24 Hours.
                  </Text>
                  <Text textAlign={'left'} fontWeight="bold">
                    SUBJECT TO SURAT JURISDICTION
                  </Text>
                </Box>
                <Box></Box>
              </HStack>
            </Box>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th textAlign={'center'} maxW="40%">
                Description
                <Text p="2">
                  Length
                  <SmallCloseIcon />
                  Breadth = Quantity
                  <SmallCloseIcon />
                  Weight
                </Text>
              </Th>
              <Th>
                QTY <small>(Kg)</small>{' '}
              </Th>
              <Th>Rate(/kg)</Th>
              <Th>Amount(₹)</Th>
              {actionShow ? <Th>Action</Th> : null}
            </Tr>
          </Thead>
          <Tbody className="billing_table_body" fontSize={'16px'}>
            {billingData.map((data, idx) => {
              return (
                <Tr>
                  <Td>{idx + 1}</Td>
                  <Td textAlign={'center'}>
                    {data.length} <SmallCloseIcon /> {data.breadth} ={' '}
                    {data.quantity} <SmallCloseIcon /> {data.weight}
                  </Td>
                  <Td>{data.quantity * data.weight} Kg</Td>
                  <Td>{data.rate}/-</Td>
                  <Td>{data.quantity * data.weight * data.rate} ₹</Td>
                  {actionShow ? (
                    <Td>
                      <HStack gap={4}>
                        <EditIcon
                          onClick={() => {
                            handleEdit(idx);
                            enableEdit();
                          }}
                        />
                        <DeleteIcon onClick={() => handleSingleDelet(idx)} />
                      </HStack>
                    </Td>
                  ) : null}
                </Tr>
              );
            })}
            {new Array((lineLength || 15) - billingData.length)
              .fill(0)
              .map(() => {
                return (
                  <>
                    <Tr>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      {actionShow ? <Td></Td> : null}
                    </Tr>
                  </>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>GSTIN: 24BCLPS5820E1ZL</Th>
              <Th></Th>
              <Th>Total</Th>
              <Th>₹{getTotalAmount(billingData)}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tablemain;
