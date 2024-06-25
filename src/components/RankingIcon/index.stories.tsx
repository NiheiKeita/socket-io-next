import { Meta, StoryObj } from '@storybook/react';
import { RankingIcon } from '.';


const meta: Meta<typeof RankingIcon> = {
  title: 'components/RankingIcon',
  component: RankingIcon,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rank: 1,
  },
}
export const First: Story = {
  args: {
    rank: 1,
  },
}
export const Second: Story = {
  args: {
    rank: 2,
  },
}
export const Third: Story = {
  args: {
    rank: 3,
  },
}
