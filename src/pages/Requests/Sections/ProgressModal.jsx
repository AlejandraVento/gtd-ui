import React from 'react';
import Modal from '../../../components/Modal';
import { Steps } from '@chakra-ui/react';

const steps = [
  {
    title: 'Step 1',
    description: 'Step 1 description',
  },
  {
    title: 'Step 2',
    description: 'Step 2 description',
  },
  {
    title: 'Step 3',
    description: 'Step 3 description',
  },
];

export default function ProgressModal({
  isOpen,
  setIsOpen,
  title,
  description,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={title}
      description={description}
    >
      <Steps.Root defaultStep={1} count={steps.length}>
        <Steps.List>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {steps.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.description}
          </Steps.Content>
        ))}
      </Steps.Root>
    </Modal>
  );
}
