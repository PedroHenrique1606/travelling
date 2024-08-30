import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card'; 

const meta: Meta<typeof Card> = {
  title: 'Components/Card',  
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    duration: { control: 'text' },
    price: { control: 'number' },
    imageUrl: {control: 'text'},
    location: { control: 'text' },
    imageWidth: { control: 'number' },
    imageHeight: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Seu título',
    duration: '1 dia',
    price: 122412,
    location: 'Localidade da viagem',
    imageWidth: 500,
    imageHeight: 300,
    imageUrl: 'Link da sua imagem'
  },
};
