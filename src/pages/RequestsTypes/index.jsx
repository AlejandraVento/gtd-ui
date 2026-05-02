import React, { useState } from 'react';
import { Flex, Text, Span } from '@chakra-ui/react';
import RequestSelector from '../../components/RequestSelector';

export default function RequestsTypes() {
  const [tipoTramite, setTipoTramite] = useState(['']);

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
        <Flex p={{ base: 6, sm: 8 }} flexDirection="column" gap={8}>
          <Text
            color="var(--mainText)"
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
          >
            Tipos de Trámites
          </Text>
          <RequestSelector value={tipoTramite} setValue={setTipoTramite} />
          <Flex direction="column" gap={4}>
            <Text
              color="var(--mainText)"
              as="h2"
              fontSize="lg"
              fontWeight="bold"
              mb={0}
            >
              Contrato a Tiempo Determinado Personal Docente y Miembros
              Especiales Personal Docente (Auxiliares Docentes, Docentes Libres)
            </Text>
            <Text
              color="var(--secondaryText)"
              as="h4"
              fontSize="md"
              fontWeight="bold"
              mb={0}
            >
              Recaudos:
            </Text>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '2rem',
                marginBottom: 0,
              }}
            >
              <li>
                Original y dos (2) copias del Oficio dirigido al Consejo de
                Facultad.
              </li>
              <li>Original y dos (2) copias del Informe de Actividades.</li>
              <li>
                Original y una (1) copia de síntesis curricular del personal
                docente a contratar.
              </li>
              <li>Dos (2) copias de los soportes de la síntesis curricular.</li>{' '}
              <li>
                Dos (2) copias certificadas del título (solo incluir el último
                título obtenido). El titulo debe estar debidamente registrado,
                en caso de estar en otro idioma, debe estar traducido por un
                traductor oficial certificado.
                <br />
                La copias deben conformarse con el original y el responsable de
                la certificación debe indicar: o Nombres-Apellidos del
                funcionario que certifica en la dependencia, cédula de
                identidad, fecha o firma.
              </li>
              <li>
                Dos (2) copias de la Planilla de Datos Personales (debe incluir
                foto digitalizada del docente).
              </li>
              <li>Dos (2) copias de la cédula de identidad.</li>
              <li>Dos (2) copias del RIF actualizado.</li>
              <li>
                Dos (2) copias del documento que indique el número de cuenta
                bancaria de 20 dígitos (Para efectos de depósito de la nómina;
                la cuenta bancaria, debe ser de alguno de los siguientes Bancos
                Nacionales: Banesco, Mercantil, Provincial o Venezuela).
              </li>
            </ul>
            <Text>
              Dirigirse a la oficina de Recursos Humanos en la Facultad de
              Ciencias UCV.
              <br />
              <Span fontWeight={700}>Horarios:</Span> Martes a jueves 8:00am -
              12:00pm
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
