import { Meta, StoryObj } from '@storybook/react';
import { LoadingView } from '.';


const meta: Meta<typeof LoadingView> = {
  title: 'components/LoadingView',
  component: LoadingView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
export const Blue: Story = {
  args: {
    variant: "blue",
  },
}
export const Gray: Story = {
  args: {
    variant: "black",
  },
}
