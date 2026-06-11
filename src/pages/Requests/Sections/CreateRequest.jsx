import React, { useState } from 'react';
import { Button, Card, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import SelectRequest from './SelectRequest';
import RequestForm from './RequestForm';

const CreateRequest = () => {
  const navigate = useNavigate();
  const [tipoTramite, setTipoTramite] = useState(['']);
  const [role, setRole] = useState(['']);
  const [startCreation, setStartCreation] = useState(false);

  const isDisabled = tipoTramite?.[0] === '';

  const handleClick = () => {
    if (tipoTramite?.[0] !== '' && !startCreation) {
      setStartCreation(true);
    } else {
      // TO DO
    }
  };
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
          {startCreation ? (
            <RequestForm
              tipoTramite={tipoTramite}
              value={role}
              setValue={setRole}
            />
          ) : (
            <SelectRequest
              tipoTramite={tipoTramite}
              setTipoTramite={setTipoTramite}
              isDisabled={isDisabled}
            />
          )}
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
            onClick={handleClick}
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
