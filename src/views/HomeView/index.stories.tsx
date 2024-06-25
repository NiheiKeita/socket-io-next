import { Meta, StoryObj } from '@storybook/react';
import { HomeView } from '.';

const meta: Meta<typeof HomeView> = {
  title: 'views/HomeView',
  component: HomeView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1",
  },
}
