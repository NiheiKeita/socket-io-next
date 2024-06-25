import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '.';
import { useState } from 'react';


const meta: Meta<typeof TextArea> = {
  title: 'components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(args) {
    const [value, setValue] = useState('');
    const handleChange = (value: string) => {
      setValue(value)
    }
    return (
      <TextArea {...args} handleChange={handleChange} value={value} />
    )
  },
}
