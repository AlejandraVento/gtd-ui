import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sections/Sidebar';
import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';

const SidebarLayout = ({ isOpen, onClose }) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Flex gap={3}>
      {!isMobile ? (
        <Sidebar isOpen={isOpen} onClose={onClose} />
      ) : (
        <Drawer.Root
          open={isOpen}
          placement="start"
          onOpenChange={(e) => {
            if (!e.open) onClose();
          }}
          size="full"
        >
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content
                bg="var(--secondaryBackground)"
                borderTopRadius="xl"
                p={4}
              >
                <Sidebar isOpen={isOpen} onClose={onClose} />
                <Drawer.CloseTrigger asChild>
                  <CloseButton color="var(--mainText)" size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      )}
      <Box
        height="calc(100dvh - 76)"
        width="100%"
        position="relative"
        overflowY="auto"
      >
        <Box flex="1" height="100%">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default SidebarLayout;
