import { Button, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react';

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
}) {
  return (
    <Dialog.Root
      key="modal"
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={onClose}
      size={{ base: 'sm', md: 'md' }}
      placement="center"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            bg="var(--mainBackground)"
            border="1px solid var(--lightGreyBorder)"
            borderRadius="2xl"
          >
            <Dialog.Header display="flex" justifyContent="center">
              <Dialog.Title fontSize="xl" mb={0} fontWeight={600}>
                {title}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text fontSize="md">{description}</Text>
              {children}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  bg="var(--mainBackground)"
                  color="var(--mainText)"
                  borderColor="var(--lightGreyBorder)"
                  borderRadius={10}
                  _focus={{ outline: 'none' }}
                >
                  Cancelar
                </Button>
              </Dialog.ActionTrigger>
              <Button
                color="var(--mainText)"
                bg="var(--secondaryBackground)"
                _hover={{ bg: 'var(--secondaryText)' }}
                borderRadius={10}
              >
                Recuperar
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger _focus={{ outline: 'none' }} asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
