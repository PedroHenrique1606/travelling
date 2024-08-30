import type { Meta, StoryObj } from '@storybook/react';
import Benefits from './Benefits'; 

const meta: Meta<typeof Benefits> = {
  title: 'Components/Benefits',  
  component: Benefits,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    imageWidth: { control: 'number' },
    imageHeight: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Benefits>;

export const Default: Story = {
  args: {
    icon: '/path/to/icon.png',  
    title: 'Exemplo de Benefício',
    description: 'Descrição do benefício aqui.',
    imageWidth: 50,
    imageHeight: 50,
  },
};
