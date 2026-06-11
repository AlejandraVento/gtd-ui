import React from 'react';
import { Button, Table as ChakraTable } from '@chakra-ui/react';

const Table = ({ headers, data, onClickOption }) => {
  const resolveCellValue = (row, header) => {
    const value = row?.[header?.key];
    return value ?? '';
  };

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
              {headers?.map((header) => {
                const isOptionsColumn = header?.key === 'options';
                return (
                  <ChakraTable.Cell
                    key={`${row.id}-${header.key}`}
                    py={4}
                    fontSize="sm"
                    fontWeight="medium"
                    color={
                      !isOptionsColumn && row?.modificationRequired
                        ? 'var(--dangerText)'
                        : 'var(--mainText)'
                    }
                    bg="var(--mainBackground)"
                  >
                    {isOptionsColumn ? (
                      <Button
                        color="var(--mainText)"
                        bg={
                          row?.modificationRequired
                            ? 'var(--secondaryBackground)'
                            : 'var(--mainBackground)'
                        }
                        border={
                          row?.modificationRequired
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
                        onClick={() => onClickOption(row)}
                      >
                        {row?.modificationRequired ? 'Editar' : 'Ver'}
                      </Button>
                    ) : (
                      resolveCellValue(row, header)
                    )}
                  </ChakraTable.Cell>
                );
              })}
            </ChakraTable.Row>
          );
        })}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );
};

export default Table;
