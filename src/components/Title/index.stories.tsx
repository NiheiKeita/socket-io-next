import { Meta, StoryObj } from '@storybook/react';
import { Title } from '.';


const meta: Meta<typeof Title> = {
  title: 'components/Title',
  component: Title,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <Title >Title</Title>
    )
  },
}
