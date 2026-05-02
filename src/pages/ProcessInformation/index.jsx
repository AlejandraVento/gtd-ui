import React from 'react';
import { Flex, Text, Span } from '@chakra-ui/react';

export default function ProcessInformation() {
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
        </Flex>
      </Flex>
    </>
  );
}
