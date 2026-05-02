import React, { useState } from 'react';
import Table from '../../components/Table';
import { Card, Flex, Text } from '@chakra-ui/react';
import Pagination from '../../components/Pagination';
import requiresModification from '../../utils/requiresModication';

const exampleData = [
  {
    id: '1',
    file_type: 'RIF',
    updated_at: '2024-01-01',
    expiration_date: '2024-12-31',
    modificationRequired: requiresModification('2024-12-31'),
  },
  {
    id: '2',
    file_type: 'Cedula',
    updated_at: '2024-01-02',
    expiration_date: '2026-12-31',
    modificationRequired: requiresModification('2026-12-31'),
  },
];

const headers = [
  { key: 'file_type', label: 'Tipo' },
  { key: 'updated_at', label: 'Ultima Actualización' },
  { key: 'expiration_date', label: 'Fecha de Vencimiento' },
  { key: 'options', label: 'Opciones' },
];

const Documents = () => {
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
          <Text as="h1" p={6} fontWeight={600} fontSize="2xl">
            Documentos
          </Text>
          <Table data={exampleData} headers={headers} />
          <Card.Footer justifyContent="space-between" alignItems="center" p={6}>
            <Text fontSize="sm" color="var(--mainText)">
              Mostrando {((page - 1) * pageSize + 1).toString()} de&nbsp;
              {Math.min(page * pageSize, exampleData.length)} de&nbsp;
              {exampleData.length} documentos
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

export default Documents;
