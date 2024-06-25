import { Meta, StoryObj } from '@storybook/react';
import { SectionFrame } from '.';


const meta: Meta<typeof SectionFrame> = {
  title: 'components/SectionFrame',
  component: SectionFrame,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "dddd",
  },
  render(args) {
    return (
      <SectionFrame {...args}>
        {'ユニコーンガンダム\nクスィーガンダム\nガンダムF91\nクロスボーンガンダムX1'}
      </SectionFrame>
    )
  },
}
