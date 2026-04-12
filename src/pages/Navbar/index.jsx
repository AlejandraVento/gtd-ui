import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  createListCollection,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import logoCiencias from '../../assets/logo-facultad-ciencias.png';
import Dropdown from '../../components/Dropdown';
import List from './Sections/List';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({ isOpen, onClose, onOpen }) {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [tab, setTab] = useState(['inicio-sesion']);
  const [display, setDisplay] = useState('inicio-sesion');

  const tabList = createListCollection({
    items: [
      { label: 'Inicio', value: 'inicio-sesion' },
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
    'inicio-sesion': 'Inicio',
    tramites: 'Tipos de trámites',
    informacion: 'Información de procesos',
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setDisplay('inicio');
    } else {
      setDisplay('inicio-sesion');
    }
  }, [sessionStorage.getItem('token')]);

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
        justifyContent={
          display === 'inicio-sesion' ? 'flex-start' : 'space-between'
        }
      >
        <Flex alignItems="center" gap={2}>
          {display === 'inicio' ? (
            <IconButton
              bg="var(--secondaryBackground)"
              onClick={isOpen ? onClose : onOpen}
              size="lg"
              alt="Menu de navegación"
              aria-label="menu de navegación"
              _focus={{
                boxShadow: 'none',
                outline: 'none',
              }}
            >
              <FontAwesomeIcon icon={faBars} color="var(--mainText)" />
            </IconButton>
          ) : (
            <Link
              as={LinkRouter}
              to="/inicio-sesion"
              onClick={() => setTab(['inicio-sesion'])}
              alt="Inicio de sesión"
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
                title="Inicio"
              />
            </Link>
          )}
        </Flex>
        {display === 'inicio-sesion' ? (
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
        ) : (
          <Flex gap={2} alignItems="center">
            <Avatar.Root variant="subtle">
              <Avatar.Fallback name="John Doe" />
            </Avatar.Root>
            <Flex alignItems="center" gap={1} ref={menuRef}>
              <Text
                color="var(--mainText)"
                mb={0}
                fontSize="sm"
                fontWeight={500}
              >
                John Doe
              </Text>
              <List
                menuRef={menuRef}
                setIsOpen={setIsListOpen}
                isOpen={isListOpen}
              />
            </Flex>
          </Flex>
        )}
        <Box display={{ base: 'block', md: 'none' }} ml="auto">
          <Dropdown
            value={tab}
            setValue={(newValue) => {
              setTab(newValue);
              if (newValue.includes('tramites')) {
                navigate('/tipos-tramites', { replace: true });
              } else if (newValue.includes('informacion')) {
                navigate('/informacion-procesos', { replace: true });
              } else if (newValue.includes('inicio-sesion')) {
                navigate('/inicio-sesion', { replace: true });
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
