import { Meta, StoryObj } from '@storybook/react';
import { LoadingIcon } from '.';


const meta: Meta<typeof LoadingIcon> = {
  title: 'components/LoadingIcon',
  component: LoadingIcon,
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
