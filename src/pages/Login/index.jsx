import React, { useState } from 'react';
import {
  Flex,
  Stack,
  Box,
  Text,
  Field,
  InputGroup,
  Input,
  Span,
  Button,
} from '@chakra-ui/react';
import Modal from '../../components/Modal';
import { PasswordInput } from '../../components/ui/password-input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);

  return (
    <>
      {isResetPasswordOpen && (
        <Modal
          isOpen={isResetPasswordOpen}
          onClose={() => setIsResetPasswordOpen(false)}
          title="¿Olvidaste tu contraseña?"
          description="Ingrese su correo electrónico"
        >
          <Field.Root required>
            <Field.Label>
              Correo electrónico <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup>
              <Input
                placeholder="ejemplo@gmail.com"
                type="email"
                aria-labelledby="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border="1px solid var(--lightGreyBorder)"
                fontSize="md"
                borderRadius={10}
                fontWeight={400}
                py={6}
              />
            </InputGroup>
          </Field.Root>
        </Modal>
      )}
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
        >
          <Flex
            p={{ base: 0, lg: 6 }}
            w={{ base: '100%', md: '50%' }}
            flexDirection="column"
          >
            <Text
              color="var(--mainText)"
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              mb={8}
            >
              Bienvenido a la plataforma de GTD
            </Text>
            <Text fontSize="lg" mb={0} textAlign="justify">
              La plataforma de GTD, (Gestión de Trámites Docentes) es un
              proyecto que tiene como objetivo automatizar la gestión de
              solicitudes de tramite del personal docente de la Facultad de
              Ciencias de la Universidad Central de Venezuela, con la
              participación de forma activa de docentes y el personal
              administrativo.
              <br />
              <br />
              <Span display={{ base: 'none', md: 'block' }}>
                El GTD permite a los docentes generar y monitorear en tiempo
                real su solicitud de trámite, así como también permite a los
                delegados administrativos manejar el proceso digitalmente.
                <br />
                <br />
                Desde el 01 de Julio de 2026 se encuentra operativo este sistema
                y esperamos sus sugerencias y comentarios.
              </Span>
            </Text>
          </Flex>
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="center"
            direction="column"
            w={{ base: '100%', md: '50%' }}
            p={{ base: 0, md: 6 }}
          >
            <Box w="full">
              <Text as="h1" fontWeight={700} fontSize="2xl" textAlign="center">
                Inicia Sesión
              </Text>
              <Flex gap={8} direction="column" alignItems="center" mt={8}>
                <Field.Root required>
                  <Field.Label>
                    Correo electrónico <Field.RequiredIndicator />
                  </Field.Label>
                  <InputGroup>
                    <Input
                      placeholder="ejemplo@gmail.com"
                      borderRadius={0}
                      type="email"
                      aria-labelledby="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      border="none"
                      _focusVisible={{
                        outline: 'none',
                      }}
                      borderBottom="1px solid var(--lightGreyBorder)"
                      fontSize="md"
                      fontWeight={400}
                      py={6}
                    />
                  </InputGroup>
                </Field.Root>
                <Field.Root required>
                  <Field.Label>
                    Contraseña <Field.RequiredIndicator />
                  </Field.Label>
                  <InputGroup>
                    <PasswordInput
                      borderRadius={0}
                      type="password"
                      aria-labelledby="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      color="var(--mainText)"
                      border="none"
                      _focusVisible={{
                        outline: 'none',
                      }}
                      borderBottom="1px solid var(--lightGreyBorder)"
                      fontSize="md"
                      fontWeight={400}
                      py={6}
                    />
                  </InputGroup>
                </Field.Root>
                <Button
                  color="var(--lightText)"
                  bg="var(--secondaryBackground)"
                  borderRadius="full"
                  fontWeight={600}
                  fontSize="md"
                  py={4}
                  px={12}
                  minH="44px"
                  minW="max-content"
                  maxW="max-content"
                  _focus={{ boxShadow: 'none', outline: 'none' }}
                >
                  Iniciar
                </Button>
                <Flex justifyContent="space-between" gap={{ base: 4, md: 6 }}>
                  <Box
                    minH="44px"
                    fontSize="md"
                    fontWeight={500}
                    display="flex"
                    alignItems="center"
                  >
                    ¿Olvidaste tu contraseña?
                  </Box>
                  <Button
                    color="var(--secondaryText)"
                    bg="transparent"
                    _focus={{ outline: 'none' }}
                    fontSize="md"
                    minH="44px"
                    fontWeight={500}
                    display="flex"
                    alignItems="center"
                    onClick={() => setIsResetPasswordOpen(true)}
                  >
                    Recuperala aquí
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
