import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Disk } from './index'

export default {
  title: 'Atoms/Disk',
  component: Disk,
} as ComponentMeta<typeof Disk>

const Template: ComponentStory<typeof Disk> = (args) => <Disk {...args} />

// Black
export const Black = Template.bind({})
Black.args = {
  color: 'black',
  size: '100px',
}

// White
export const White = Template.bind({})
White.args = {
  color: 'white',
  size: '100px',
}
