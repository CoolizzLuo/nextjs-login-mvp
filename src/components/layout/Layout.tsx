import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import { Flex, Box } from '@chakra-ui/react';
import theme from '@/components/layout/theme';

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" overflow="hidden" m="0" p="0" textAlign="center" fontSize="md" w={'full'} maxW={1920} mx="auto">
        <Header />
        <Flex h="2xl" justify="center" align="center">
          {props.children}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
