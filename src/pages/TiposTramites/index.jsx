import React, { useState } from 'react';
import { Flex, Text, Span, createListCollection } from '@chakra-ui/react';
import Dropdown from '../../components/Dropdown';

export default function TiposTramites() {
  const [tipoTramite, setTipoTramite] = useState(['']);

  const typesList = createListCollection({
    items: [
      { label: 'Selecciona un tipo de trámite', value: '' },
      {
        label: 'Ingreso por contrato',
        value: 'ingreso-contrato',
      },
      { label: 'Prorroga de contrato', value: 'prorroga-contrato' },
      { label: 'Ingreso por concurso', value: 'ingreso-concurso' },
      {
        label: 'Ascenso en escalafón universitario',
        value: 'ascenso-escalafon',
      },
      {
        label: 'Cambio denominación cargo docente',
        value: 'cambio-cargo-docente',
      },
      {
        label: 'Cambio denominación cargo jefe de departamento',
        value: 'cambio-cargo-jefe-departamento',
      },
      {
        label: 'Cambio denominación cargo jefe de centro',
        value: 'cambio-cargo-jefe-centro',
      },
      {
        label: 'Cambio denominación cargo jefe de postgrado',
        value: 'cambio-cargo-jefe-postgrado',
      },
      {
        label: 'Permisos remunerados',
        value: 'permisos-remunerados',
      },
      {
        label: 'Permisos no remunerados',
        value: 'permisos-no-remunerados',
      },
      {
        label: 'Reincorporación de permisos',
        value: 'reincorporacion-permisos',
      },
      {
        label: 'Egresos',
        value: 'egresos',
      },
      {
        label: 'Solicitud de dictamen de jubilación',
        value: 'solicitud-dictamen-jubilacion',
      },
      {
        label: 'Solicitud de jubilación',
        value: 'solicitud-jubilacion',
      },
    ],
  });

  const typesLabels = {
    'ingreso-contrato': 'Ingreso por contrato',
    'prorroga-contrato': 'Prorroga de contrato',
    'ingreso-concurso': 'Ingreso por concurso',
    'ascenso-escalafon': 'Ascenso en escalafón universitario',
    'cambio-cargo-docente': 'Cambio denominación cargo docente',
    'cambio-cargo-jefe-departamento':
      'Cambio denominación cargo jefe de departamento',
    'cambio-cargo-jefe-centro': 'Cambio denominación cargo jefe de centro',
    'cambio-cargo-jefe-postgrado':
      'Cambio denominación cargo jefe de postgrado',
    'permisos-remunerados': 'Permisos remunerados',
    'permisos-no-remunerados': 'Permisos no remunerados',
    'reincorporacion-permisos': 'Reincorporación de permisos',
    egresos: 'Egresos',
    'solicitud-dictamen-jubilacion': 'Solicitud de dictamen de jubilación',
    'solicitud-jubilacion': 'Solicitud de jubilación',
  };

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
          <Dropdown
            value={tipoTramite}
            setValue={setTipoTramite}
            listOfItems={typesList}
            placeholder="Selecciona un tipo de trámite"
            icon="fa-solid fa-filter"
            labels={typesLabels}
          />
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
