import React, { useRef, useMemo } from 'react';
import {
  Box,
  Link,
  Flex,
  VStack,
  Tooltip,
  Portal,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faRectangleList,
} from '@fortawesome/free-regular-svg-icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  const linkItems = useMemo(
    () => [
      {
        name: 'Documentos',
        icon: faAddressCard,
        link: '/documentos',
        alt: 'Documentos',
        display: true,
      },
      {
        name: 'Trámites',
        icon: faRectangleList,
        link: '/tramites',
        alt: 'Trámites',
        display: true,
      },
    ],
    [],
  );

  return (
    <Box
      as="nav"
      aria-label="Barra lateral de navegación"
      maxW={{ base: 'auto', sm: 'min-content' }}
      ref={sidebarRef}
    >
      <Flex
        direction="row"
        height="100%"
        minH="calc(100vh - 76px)"
        width="100%"
      >
        <Box
          height="100%"
          bg="var(--mainBackground)"
          px={isOpen ? 6 : 4}
          width="100%"
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
          boxShadow="md"
          border="1px solid var(--lightGreyBorder)"
        >
          <VStack align="flex-start" gap={0}>
            {linkItems.map((link, i) => (
              <Item link={link} key={i} isOpen={isOpen} closeMenu={onClose} />
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

function Item({ link, isOpen, closeMenu }) {
  const { pathname } = useLocation();
  const isActive = pathname === link.link;
  const isSmallScreen = useBreakpointValue({
    base: false,
    sm: true,
    md: false,
  });

  if (isOpen && link.display && !isSmallScreen) {
    return (
      <>
        <Flex align="center" p={0} mb={0} w="100%">
          <Link
            as={RouterLink}
            to={link.link}
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
            }}
            height="44px"
            width="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={isActive ? 'var(--secondaryBackground)' : 'transparent'}
            borderRadius="md"
            px={2}
            _focus={{
              outline: 'none',
            }}
            onClick={closeMenu}
          >
            <FontAwesomeIcon
              style={{ marginRight: '8px', width: '20px' }}
              color="var(--mainText)"
              icon={link.icon}
            />
            <Text
              mb={0}
              fontWeight={600}
              color="var(--mainText) !important"
              _hover={{
                color: 'var(--hoverMainText) !important',
              }}
            >
              {link.name}
            </Text>
          </Link>
        </Flex>
      </>
    );
  }
  if ((isSmallScreen && link.display) || (!isOpen && link.display)) {
    return (
      <Tooltip.Root label={link.name} aria-label={link.alt} placement="right">
        <Tooltip.Trigger asChild>
          <Link
            as={RouterLink}
            width="44px"
            height="44px"
            to={link.link}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={isActive ? 'var(--secondaryBackground)' : 'transparent'}
            borderRadius="md"
            _focus={{
              outline: 'none',
            }}
          >
            <FontAwesomeIcon
              style={{ width: '20px' }}
              color="var(--mainText)"
              icon={link.icon}
            />
          </Link>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>{link.name}</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    );
  }
}
