import { Meta, StoryObj } from '@storybook/react'
import { ConnectionManager } from '.'

const meta: Meta<typeof ConnectionManager> = {
  title: 'views/ConnectionManager',
  component: ConnectionManager,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1",
  },
}
