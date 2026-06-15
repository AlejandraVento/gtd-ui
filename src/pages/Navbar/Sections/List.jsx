import React from 'react';
import { Menu, Flex, Text, Button } from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown,
  faUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

export default function List({ menuRef, setIsOpen, isOpen }) {
  const getAnchorRect = () => menuRef.current.getBoundingClientRect();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Mi cuenta',
      alt: 'Mi cuenta',
      onClick: () => {
        navigate('/account');
        setIsOpen(false);
      },
      icon: faUser,
    },
    {
      title: 'Cerrar sesión',
      alt: 'Cerrar sesión',
      onClick: () => {
        sessionStorage.removeItem('access_token');
        setIsOpen(false);
        navigate('/inicio-sesion', { replace: true });
      },
      icon: faRightFromBracket,
    },
  ];

  return (
    <Menu.Root
      open={isOpen}
      positioning={{ getAnchorRect, placement: 'top-end' }}
      onOpenChange={() => setIsOpen(!isOpen)}
      closeOnSelect={false}
    >
      <Menu.Trigger asChild>
        <Button
          height="44px"
          background="transparent"
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          _focus={{ boxShadow: 'none', outline: 'none' }}
          aria-label="Opciones de usuario"
          cursor="pointer"
        >
          <FontAwesomeIcon
            icon={isOpen ? faAngleUp : faAngleDown}
            color="var(--mainText)"
          />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            border="1px solid var(--lightGreyBorder)"
            borderRadius="2xl"
            p={5}
            bg="var(--mainBackground)"
            gap={4}
            boxShadow="sm"
          >
            <Menu.ItemGroup>
              {menuItems?.map((item, index) => (
                <Menu.Item
                  key={index}
                  onClick={item.onClick}
                  fontSize="sm"
                  fontWeight={600}
                  bg="var(--mainBackground)"
                  color="var(--mainText)"
                  _hover={{ color: 'var(--hoverMainText)' }}
                  _focus={{ boxShadow: 'none', outline: 'none' }}
                  minHeight="44px"
                  width="auto"
                  cursor="pointer"
                >
                  <Flex
                    flexGrow={1}
                    width="100%"
                    height="100%"
                    alignItems="center"
                    direction="row"
                    gap={3}
                  >
                    {item.icon && (
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="xl"
                        color="var(--mainText)"
                      />
                    )}
                    <Flex
                      width="100%"
                      height="100%"
                      direction="column"
                      justify="center"
                    >
                      <Text m={0}>{item.title}</Text>
                      {item.description && (
                        <Text fontSize="xs" m={0}>
                          {item.description}
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
