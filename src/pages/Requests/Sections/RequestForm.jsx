import React, { useRef, useState } from 'react';
import { Button, FileUpload, Flex, Input, Text } from '@chakra-ui/react';
import RoleSelector from '../../../components/RoleSelector';
import { HiUpload } from 'react-icons/hi';

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

const RequestForm = ({ tipoTramite, value, setValue }) => {
  const [isLoading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);

    try {
      fileInputRef.current.value = null;
    } catch (e) {
      fileInputRef.current.value = null;
      console.log('Error uploading file', e);
    } finally {
      fileInputRef.current.value = null;
      setLoading(false);
    }
  };

  return (
    <Flex gap={6} direction="column">
      <Text as="h1" fontWeight={600} fontSize="2xl">
        Crear Solicitud de Trámite
      </Text>
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
        Responsabilidad de ocupar un cargo temporal en la Institución, este tipo
        de movimiento aplica para el Personal Profesional, Administrativo,
        Técnico y de Servicio.
      </Text>
      <RoleSelector value={value} setValue={setValue} />
      <Text fontWeight="bold" color="var(--mainText)" fontSize="lg" mb={0}>
        Fotocopia de la Cédula de Identidad
      </Text>
      <FileUpload.Root
        display="flex"
        flexDirection="row"
        onChange={handleUpload}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Trigger asChild>
          <Button
            color="var(--mainText)"
            bg="var(--secondaryBackground)"
            _hover={{ bg: 'var(--secondaryText)' }}
            borderRadius={10}
            variant="outline"
            size="sm"
            minH="44px"
          >
            <HiUpload /> Subir documento
          </Button>
        </FileUpload.Trigger>
        <FileUpload.List
          width="max-content"
          p={0}
          m={0}
          css={{
            '& li': {
              padding: 2,
            },
          }}
        />
      </FileUpload.Root>
    </Flex>
  );
};

export default RequestForm;
