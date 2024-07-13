import { Meta, StoryObj } from '@storybook/react'
import { ConnectionState } from '.'

const meta: Meta<typeof ConnectionState> = {
  title: 'views/ConnectionState',
  component: ConnectionState,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}
