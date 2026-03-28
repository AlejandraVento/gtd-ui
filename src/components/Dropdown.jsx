import React from 'react';
import { HStack, Select } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dropdown({
  value,
  setValue,
  listOfItems,
  placeholder,
  icon,
  labels,
  display,
  width,
  dropdownLabel,
  styles,
}) {
  return (
    <Select.Root
      collection={listOfItems}
      onValueChange={(e) => setValue(e.value)}
      value={value}
      width={width ?? 'max-content'}
      display={display ?? 'block'}
    >
      <Select.HiddenSelect />
      <Select.Label
        className={!dropdownLabel && 'sr-only'}
        fontSize="md"
        fontWeight={500}
        color="var(--mainText)"
      >
        {dropdownLabel ?? placeholder}
      </Select.Label>
      <Select.Control minW="full">
        <Select.Trigger
          color="var(--mainText)"
          bg="var(--mainBackground)"
          borderColor="var(--lightGreyBorder)"
          borderRadius="xl"
          cursor="pointer"
          h="44px"
          px={4}
          pr={8}
          minW="max-content"
          fontSize="sm"
          _focus={{ boxShadow: 'none', outline: 'none' }}
          {...styles}
        >
          <Select.ValueText
            textTransform="capitalize"
            placeholder={placeholder}
            minW="max-content"
            fontSize="sm"
          >
            <HStack gap={2} minW="max-content" fontSize="sm">
              <>
                {icon && (
                  <FontAwesomeIcon
                    icon={icon}
                    style={{ fontSize: '0.875rem' }}
                  />
                )}
                {value?.[0] ? labels?.[value[0]] : placeholder}
              </>
            </HStack>
          </Select.ValueText>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator color="var(--mainText)" />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content
          color="var(--mainText)"
          border="1px solid var(--lightGreyBorder)"
          bg="var(--mainBackground)"
          borderRadius="xl"
          p={0}
          maxH="154px"
          overflowY="auto"
        >
          {listOfItems.items.map((currentStatus) => (
            <Select.Item
              item={currentStatus}
              key={currentStatus.value}
              justifyContent="flex-start"
              fontSize="sm"
              p={2}
              borderTop="1px solid var(--lightGreyBorder)"
              borderRadius={0}
              _first={{ borderTop: 'none' }}
            >
              {currentStatus.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
}
