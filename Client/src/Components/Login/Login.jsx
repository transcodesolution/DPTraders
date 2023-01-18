import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import { setLogin } from '../../State/state';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = values => {
    axios
      .post('http://localhost:8000/auth/login', {
        id: values.dpId,
        password: values.password,
      })
      .then(data => {
        console.log(data);
        if (data) {
          dispatch(
            setLogin({
              user: data.data.user,
              token: data.data.token,
            })
          );
          navigate('/');
        }
      });
  };
  return (
    <>
      <Box>
        <HStack>
          <Box
            width={'50%'}
            height="100vh"
            bg={'blue.300'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
          >
            <Box
              color={'white'}
              className="fontCaramel"
              alignItems={'center'}
              height="100"
              textAlign={'center'}
            >
              <Text fontSize={'6xl'}>WELCOME TO</Text>
              <Text position={'relative'} top="-10" fontSize={'8xl'}>
                DP TRADERS
              </Text>
            </Box>
          </Box>
          <Box width={'50%'} height="100vh">
            <Container display={'flex'} alignItems="center" height={'100%'}>
              <Box width={'100%'}>
                <Formik
                  initialValues={{ dpId: '', password: '' }}
                  onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.setSubmitting(false);
                  }}
                >
                  {props => (
                    <Form>
                      <Field name="dpId">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel>DP Traders ID</FormLabel>
                            <Input {...field} />
                            <FormErrorMessage>
                              {form.errors.dpId}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="password">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel>Password</FormLabel>
                            <Input {...field} />
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Button
                        mt={4}
                        bg="blue.300"
                        width={'100%'}
                        _hover={{ bg: 'blue.400' }}
                        color={'white'}
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Container>
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default Login;
