import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Flex
        bg="var(--mainBackground)"
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={0}
        m={0}
        role="main"
        minHeight="100vh"
      >
        <Flex
          w="100%"
          p={{ base: 8, md: 8 }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          gap={{ base: 16, md: 8 }}
        ></Flex>
      </Flex>
    </>
  );
}
