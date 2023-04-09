import { useSession, signIn } from 'next-auth/react';
import { Flex, Button } from '@chakra-ui/react';
import ProtectedSection from '@/components/layout/Header/MainNavigation/ProtectedSection';

const MainNavigation = () => {
  const { data: session } = useSession();

  return (
    <Flex align={'center'} gap="20px">
      {session && <ProtectedSection {...session.user} />}
      {!session && (
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
          onClick={() => signIn('google')}
        >
          Sign in
        </Button>
      )}
    </Flex>
  );
};

export default MainNavigation;
