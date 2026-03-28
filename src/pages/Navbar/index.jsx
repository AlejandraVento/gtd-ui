import React, { useState } from 'react';
import {
  Box,
  Button,
  createListCollection,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import logoCiencias from '../../assets/logo-facultad-ciencias.png';
import Dropdown from '../../components/Dropdown';

export default function Navbar() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(['login']);

  const tabList = createListCollection({
    items: [
      { label: 'Login', value: 'login' },
      {
        label: 'Tipos de trámites',
        value: 'tramites',
      },
      {
        label: 'Información de procesos',
        value: 'informacion',
      },
    ],
  });

  const tabLabels = {
    login: 'Login',
    tramites: 'Tipos de trámites',
    informacion: 'Información de procesos',
  };

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
        flexWrap="wrap"
      >
        <Flex alignItems="center" gap={2}>
          <Link
            as={LinkRouter}
            to="/login"
            onClick={() => setTab(['login'])}
            alt="login"
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
              alt="Logo Facultad de Ciencias"
              m="auto"
              width={10}
              height={10}
            />
          </Link>
        </Flex>
        <Flex
          justifyContent="center"
          display={{ base: 'none', md: 'block' }}
          alignItems="center"
          gap={4}
        >
          <Button
            bg="var(--transparent)"
            color="var(--mainText)"
            _focus={{ outline: 'none' }}
            mb={0}
            pr={4}
            borderRight="1px solid var(--mainText)"
            onClick={() => {
              setTab(['tramites']);
              navigate('/tipos-tramites', { replace: true });
            }}
            fontWeight={tab.includes('tramites') ? 600 : 400}
          >
            Tipos de trámites
          </Button>
          <Button
            _focus={{ outline: 'none' }}
            color="var(--mainText)"
            bg="var(--transparent)"
            fontWeight={tab.includes('informacion') ? 600 : 400}
            mb={0}
            onClick={() => {
              setTab(['informacion']);
              navigate('/informacion-procesos', { replace: true });
            }}
          >
            Información de procesos
          </Button>
        </Flex>
        <Box display={{ base: 'block', md: 'none' }} ml="auto">
          <Dropdown
            value={tab}
            setValue={(newValue) => {
              setTab(newValue);
              if (newValue.includes('tramites')) {
                navigate('/tipos-tramites', { replace: true });
              } else if (newValue.includes('informacion')) {
                navigate('/informacion-procesos', { replace: true });
              } else if (newValue.includes('login')) {
                navigate('/login', { replace: true });
              }
            }}
            listOfItems={tabList}
            icon="fa-solid fa-filter"
            labels={tabLabels}
          />
        </Box>
      </Flex>
    </>
  );
}
