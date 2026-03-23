import React from 'react';
import { Flex, Image, Link, Text } from '@chakra-ui/react';

import { Link as LinkRouter } from 'react-router-dom';
import logoCiencias from '../../assets/logo-facultad-ciencias.png';

export default function Navbar() {
  return (
    <>
      <Flex
        role="navigation"
        aria-label="Barra de navegacion"
        zIndex={10}
        bg="var(--secondaryBackground)"
        px={4}
        py={4}
        width="100%"
        gap={4}
      >
        <Flex alignItems="center" gap={2}>
          <Link
            as={LinkRouter}
            to="/"
            alt="home"
            _hover={{ textDecoration: 'none' }}
            h="44px"
            alignItems="center"
            _focus={{
              boxShadow: 'none',
              outline: 'none',
            }}
          >
            <Image
              src={logoCiencias}
              alt="Logo de la Facultad de Ciencias"
              m="auto"
              width={10}
              height={10}
            />
          </Link>
        </Flex>
        <Flex justifyContent="center" alignItems="center" gap={4}>
          <Text mb={0} pr={4} borderRight="1px solid var(--mainText)">
            Tipos de trámites
          </Text>
          <Text mb={0}>Información de procesos</Text>
        </Flex>
      </Flex>
    </>
  );
}
