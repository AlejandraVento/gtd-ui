import React, { useState } from 'react';
import Table from '../../components/Table';
import { Button, Card, Flex, Text } from '@chakra-ui/react';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router';

const exampleData = [
  {
    id: '1',
    type: 'Vacaciones',
    date: '2024-01-01',
    status: 'En proceso',
    modificationRequired: true,
  },
  {
    id: '2',
    type: 'Permiso',
    date: '2024-01-02',
    status: 'Completado',
    modificationRequired: false,
  },
];

const headers = [
  { key: 'type', label: 'Tipo' },
  { key: 'date', label: 'Fecha' },
  { key: 'status', label: 'Estado' },
  { key: 'options', label: 'Opciones' },
];

const Requests = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const pageSize = 5;

  return (
    <Flex
      w="100%"
      p={{ base: 8, md: 8 }}
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      gap={{ base: 16, md: 8 }}
    >
      <Card.Root
        alignItems="center"
        flexDirection="row"
        borderRadius={{ base: 0, sm: 18 }}
        bg="var(--mainBackground)"
        boxShadow="sm"
        border="1px solid var(--lightGreyBorder)"
        p={0}
        w="full"
      >
        <Card.Body p={0}>
          <Flex
            p={6}
            justifyContent="space-between"
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            w="full"
          >
            <Text as="h1" fontWeight={600} fontSize="2xl">
              Tramites
            </Text>
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
              onClick={() => {
                navigate('/crear-solicitud', { replace: true });
              }}
            >
              Crear solicitud de trámite
            </Button>
          </Flex>
          <Table data={exampleData} headers={headers} />
          <Card.Footer justifyContent="space-between" alignItems="center" p={6}>
            <Text fontSize="sm" color="var(--mainText)">
              Mostrando {((page - 1) * pageSize + 1).toString()} de&nbsp;
              {Math.min(page * pageSize, exampleData.length)} de&nbsp;
              {exampleData.length} trámites
            </Text>
            <Pagination
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              total={exampleData.length}
            />
          </Card.Footer>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default Requests;
