import { Meta, StoryObj } from '@storybook/react'
import { Events } from '.'

const meta: Meta<typeof Events> = {
  title: 'views/Events',
  component: Events,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}
