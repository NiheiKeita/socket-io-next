import { Meta, StoryObj } from '@storybook/react'
import { MyForm } from '.'

const meta: Meta<typeof MyForm> = {
  title: 'views/MyForm',
  component: MyForm,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1",
  },
}
