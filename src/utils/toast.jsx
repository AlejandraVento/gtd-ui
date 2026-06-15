import {
  Toaster as ChakraToaster,
  Flex,
  Portal,
  Spinner,
  Toast,
  createToaster,
} from '@chakra-ui/react';

export const toaster = createToaster({
  placement: 'top-end',
  pauseOnPageIdle: true,
});

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <Toast.Root
            width={{ md: 'sm' }}
            border="1px solid"
            borderColor={
              toast.type === 'error'
                ? 'var(--dangerBackground)'
                : 'var(--mainText)'
            }
            py={4}
            px={6}
            bg={
              toast.type === 'error'
                ? 'var(--dangerBackground)'
                : 'var(--mainBackground)'
            }
            color={
              toast.type === 'error' ? 'var(--dangerText)' : 'var(--mainText)'
            }
            borderRadius="xl"
            gap={4}
          >
            {toast.type === 'loading' ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Flex
              gap="4"
              flex="1"
              alignItems="center"
              justifyContent="space-between"
            >
              {toast.description && (
                <Toast.Description mb={0} opacity={1} wordBreak="break-word">
                  {toast.description}
                </Toast.Description>
              )}
              {toast.closable && (
                <Toast.CloseTrigger
                  bg="var(--mainText)"
                  color="var(--mainBackground)"
                  borderRadius="full"
                  position="unset"
                />
              )}
            </Flex>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
