'use client';

import {
  ButtonGroup,
  IconButton,
  Pagination as ChakraPagination,
} from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Pagination = ({ page, setPage, pageSize, total }) => {
  return (
    <ChakraPagination.Root
      count={total}
      pageSize={pageSize}
      page={page}
      onPageChange={(e) => setPage(e.page)}
    >
      <ButtonGroup variant="ghost" size="sm">
        <ChakraPagination.PrevTrigger asChild>
          <IconButton>
            <HiChevronLeft />
          </IconButton>
        </ChakraPagination.PrevTrigger>

        <ChakraPagination.Items
          render={(page) => (
            <IconButton
              color="var(--mainText)"
              _selected={{
                bg: 'var(--secondaryBackground) !important',
                color: 'var(--mainButtonText) !important',
                border: 'none',
              }}
              border="1px solid var(--lightGreyBorder)"
              borderRadius="sm"
              variant={{ base: 'ghost', _selected: 'outline' }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <ChakraPagination.NextTrigger asChild>
          <IconButton>
            <HiChevronRight />
          </IconButton>
        </ChakraPagination.NextTrigger>
      </ButtonGroup>
    </ChakraPagination.Root>
  );
};

export default Pagination;
