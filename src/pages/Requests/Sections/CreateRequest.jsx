import React, { useState } from 'react';
import { Button, Card, Flex, Text } from '@chakra-ui/react';
import RequestSelector from '../../../components/RequestSelector';
import { useNavigate } from 'react-router';

const exampleData = {
  'ingreso-contrato': 'Ingreso por contrato',
  'prorroga-contrato': 'Prorroga de contrato',
  'ingreso-concurso': 'Ingreso por concurso',
  'ascenso-escalafon': 'Ascenso en escalafón universitario',
  'cambio-cargo-docente': 'Cambio denominación cargo docente',
  'cambio-cargo-jefe-departamento':
    'Cambio denominación cargo jefe de departamento',
  'cambio-cargo-jefe-centro': 'Cambio denominación cargo jefe de centro',
  'cambio-cargo-jefe-postgrado': 'Cambio denominación cargo jefe de postgrado',
  'permisos-remunerados': 'Permisos remunerados',
  'permisos-no-remunerados': 'Permisos no remunerados',
  'reincorporacion-permisos': 'Reincorporación de permisos',
  egresos: 'Egresos',
  'solicitud-dictamen-jubilacion': 'Solicitud de dictamen de jubilación',
  'solicitud-jubilacion': 'Solicitud de jubilación',
};

const CreateRequest = () => {
  const navigate = useNavigate();
  const [tipoTramite, setTipoTramite] = useState(['']);

  const isDisabled = tipoTramite?.[0] === '';
  return (
    <Flex
      w="100%"
      p={{ base: 8, md: 8 }}
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      gap={{ base: 16, md: 8 }}
    >
      <Card.Root
        borderRadius={{ base: 0, sm: 18 }}
        bg="var(--mainBackground)"
        boxShadow="sm"
        border="1px solid var(--lightGreyBorder)"
        p={0}
        w="full"
      >
        <Card.Body p={6}>
          <Flex gap={6} direction="column">
            <Text as="h1" fontWeight={600} fontSize="2xl">
              Crear Solicitud de Trámite
            </Text>
            <RequestSelector value={tipoTramite} setValue={setTipoTramite} />
            {isDisabled ? (
              <Text color="var(--mainText)" fontSize="md">
                Porfavor selecciona el tipo de trámite que deseas solicitar para
                visualizar los recaudos correspondientes.
                <br />
                Luego, haz clic en el botón "Crear solicitud" para iniciar el
                proceso.
              </Text>
            ) : (
              <>
                <Text
                  as="h2"
                  fontWeight="bold"
                  color="var(--mainText)"
                  fontSize="xl"
                  mb={0}
                >
                  {exampleData[tipoTramite?.[0]] ?? 'Tipo de tramite'}
                </Text>
                <Text color="var(--secondaryText)" fontSize="md" mb={0}>
                  Responsabilidad de ocupar un cargo temporal en la Institución,
                  este tipo de movimiento aplica para el Personal Profesional,
                  Administrativo, Técnico y de Servicio.
                </Text>
                <ul
                  style={{
                    listStyleType: 'disc',
                    paddingLeft: '2rem',
                    marginBottom: 0,
                    fontSize: '.9rem',
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
                  <li>
                    Dos (2) copias de los soportes de la síntesis curricular.
                  </li>{' '}
                  <li>
                    Dos (2) copias certificadas del título (solo incluir el
                    último título obtenido). El titulo debe estar debidamente
                    registrado, en caso de estar en otro idioma, debe estar
                    traducido por un traductor oficial certificado.
                    <br />
                    La copias deben conformarse con el original y el responsable
                    de la certificación debe indicar: o Nombres-Apellidos del
                    funcionario que certifica en la dependencia, cédula de
                    identidad, fecha o firma.
                  </li>
                  <li>
                    Dos (2) copias de la Planilla de Datos Personales (debe
                    incluir foto digitalizada del docente).
                  </li>
                  <li>Dos (2) copias de la cédula de identidad.</li>
                  <li>Dos (2) copias del RIF actualizado.</li>
                  <li>
                    Dos (2) copias del documento que indique el número de cuenta
                    bancaria de 20 dígitos (Para efectos de depósito de la
                    nómina; la cuenta bancaria, debe ser de alguno de los
                    siguientes Bancos Nacionales: Banesco, Mercantil, Provincial
                    o Venezuela).
                  </li>
                </ul>
              </>
            )}
          </Flex>
        </Card.Body>
        <Card.Footer justifyContent="flex-end" gap={4}>
          <Button
            color="var(--mainText)"
            bg="var(--mainBackground)"
            border="1px solid var(--lightGreyBorder)"
            borderRadius={10}
            fontWeight={600}
            fontSize="md"
            py={4}
            px={4}
            minH="44px"
            minW="max-content"
            maxW="max-content"
            _focus={{ boxShadow: 'none', outline: 'none' }}
            onClick={() => {
              navigate('/tramites', { replace: true });
            }}
          >
            Cancelar
          </Button>
          <Button
            color="var(--mainText)"
            bg="var(--secondaryBackground)"
            borderRadius={10}
            fontWeight={600}
            fontSize="md"
            py={4}
            px={4}
            minH="44px"
            minW="max-content"
            maxW="max-content"
            _focus={{ boxShadow: 'none', outline: 'none' }}
            onClick={() => {}}
            disabled={isDisabled}
            title={
              isDisabled
                ? 'Selecciona un tipo de trámite para habilitar el botón'
                : ''
            }
          >
            Crear solicitud
          </Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

export default CreateRequest;
