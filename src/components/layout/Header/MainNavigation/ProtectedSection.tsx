import Image from 'next/image';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

const formatName = (name: string) => {
  return name.split('(')[0].trim();
};

const ProtectedSection = (user: Session['user']) => {
  const { name = 'No body', email = '', image = '' } = user;

  const formattedName = `Hi ${formatName(name)}!`;

  return (
    <>
      <Image src={image} width={40} height={40} alt="avatar" />
      <p>{formattedName}</p>
      <p>{email}</p>
      <Button
        bg={'red.400'}
        color={'white'}
        _hover={{
          bg: 'red.500',
        }}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </>
  );
};

export default ProtectedSection;
