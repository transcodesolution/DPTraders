import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avt from '../../../Assets/avtar.jpg';
import { setLogout } from '../../../State/state';

function Header() {
  const auth = useSelector(state => state.user);
  const [openProfilepopup, setOpenProfilepopup] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <>
      <Box mw="100%" px="4" bgColor={'blue.600'} color="gray.200">
        <Flex w={'100%'} justifyContent="space-between" alignItems={'center'}>
          <Link to="/">
            <Box display={'flex'} alignItems="center" cursor={'pointer'}>
              <Text fontSize={'5xl'} textAlign="center">
                DP
              </Text>
              <Text
                position={'relative'}
                top="10px"
                left={'-8px'}
                fontSize={'1xl'}
              >
                {' '}
                Traders
              </Text>{' '}
            </Box>
          </Link>
          <Box fontSize={'14px'}>
            <Flex gap={'60px'}>
              <Box
                cursor={'pointer'}
                _hover={{ bg: 'blue.500' }}
                border={'1px '}
                py="2"
                px={'4'}
                borderRadius="lg"
                borderColor={'blue.500'}
              >
                <Link to="/billing"> Billing</Link>
              </Box>
              <Box
                cursor={'pointer'}
                _hover={{ bg: 'blue.500' }}
                border={'1px '}
                py="2"
                px={'4'}
                borderRadius="lg"
                borderColor={'blue.500'}
              >
                <Link to="/stocks"> Stocks</Link>
              </Box>
              <Box
                cursor={'pointer'}
                _hover={{ bg: 'blue.500' }}
                border={'1px '}
                py="2"
                px={'4'}
                borderRadius="lg"
                borderColor={'blue.500'}
              >
                <Link to="/reports"> Reports</Link>
              </Box>
            </Flex>
          </Box>
          <Box>
            {!auth ? (
              <Button bg={'white'} color={'black'}>
                <Link to="/login"> Login</Link>
              </Button>
            ) : (
              <>
                <Box pos={'relative'}>
                  <Avatar
                    cursor={'pointer'}
                    src={Avt}
                    onClick={() => setOpenProfilepopup(!openProfilepopup)}
                  ></Avatar>
                  {openProfilepopup && (
                    <Box
                      pos={'absolute'}
                      top="16"
                      bg={'white'}
                      width="10vw"
                      right={0}
                      boxShadow="md"
                      color={'blue.500'}
                      fontFamily="bold"
                    >
                      <VStack>
                        <Text py={1} px={'3'}>
                          PROFILE
                        </Text>
                        <Divider></Divider>
                        <Text
                          py={1}
                          px={'3'}
                          onClick={handleLogout}
                          cursor="pointer"
                        >
                          LOG OUT
                        </Text>
                      </VStack>
                    </Box>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
