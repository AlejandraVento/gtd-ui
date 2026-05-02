import React from 'react';
import { Button, Table as ChakraTable } from '@chakra-ui/react';

const Table = ({ headers, data }) => {
  return (
    <ChakraTable.Root
      bg="var(--mainBackground)"
      variant="line"
      borderRadius="2xl"
      overflow="hidden"
      width="100%"
    >
      <ChakraTable.Header>
        <ChakraTable.Row>
          {headers?.map((header) => (
            <ChakraTable.ColumnHeader
              key={header.key}
              textTransform="capitalize"
              fontSize="sm"
              fontWeight={700}
              color="var(--mainText)"
              bg="var(--mainBackground)"
              borderBottom="1px solid var(--lightGreyBorder)"
            >
              {header.label}
            </ChakraTable.ColumnHeader>
          ))}
        </ChakraTable.Row>
      </ChakraTable.Header>
      <ChakraTable.Body px={6}>
        {data?.map((row) => {
          return (
            <ChakraTable.Row key={row.id}>
              <ChakraTable.Cell
                py={4}
                fontSize="sm"
                fontWeight="medium"
                color={
                  row?.requiresModification
                    ? 'var(--dangerText)'
                    : 'var(--mainText)'
                }
                bg="var(--mainBackground)"
              >
                {row.type}
              </ChakraTable.Cell>
              <ChakraTable.Cell
                py={4}
                fontSize="sm"
                fontWeight="medium"
                color={
                  row?.requiresModification
                    ? 'var(--dangerText)'
                    : 'var(--mainText)'
                }
                bg="var(--mainBackground)"
              >
                {row.date}
              </ChakraTable.Cell>
              <ChakraTable.Cell
                py={4}
                fontSize="sm"
                fontWeight="medium"
                color={
                  row?.requiresModification
                    ? 'var(--dangerText)'
                    : 'var(--mainText)'
                }
                bg="var(--mainBackground)"
              >
                {row.status}
              </ChakraTable.Cell>
              <ChakraTable.Cell
                py={4}
                fontSize="sm"
                color="var(--mainText)"
                bg="var(--mainBackground)"
                fontWeight="medium"
              >
                <Button
                  color="var(--mainText)"
                  bg={
                    row?.requiresModification
                      ? 'var(--secondaryBackground)'
                      : 'var(--mainBackground)'
                  }
                  border={
                    row?.requiresModification
                      ? 'none'
                      : '1px solid var(--lightGreyBorder)'
                  }
                  borderRadius={10}
                  fontWeight={600}
                  fontSize="sm"
                  py={4}
                  px={4}
                  minH="44px"
                  minW="max-content"
                  maxW="max-content"
                  _focus={{ boxShadow: 'none', outline: 'none' }}
                  onClick={() => {}}
                >
                  {row?.requiresModification ? 'Editar' : 'Ver'}
                </Button>
              </ChakraTable.Cell>
            </ChakraTable.Row>
          );
        })}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );
};

export default Table;
