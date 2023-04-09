import { useSession } from 'next-auth/react';
import { Flex, useColorModeValue, Box, Heading } from '@chakra-ui/react';
import MainNavigation from '@/components/layout/Header/MainNavigation';

type Props = {};

const Header = (props: Props) => {
  const { data: session } = useSession();

  return (
    <Box p="4" bg={useColorModeValue('gray.300', 'gray.800')}>
      <Flex align={'center'} justify={'space-between'}>
        <Heading fontSize={'3xl'}>Login test</Heading>
        <MainNavigation />
      </Flex>
    </Box>
  );
};

export default Header;
