import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DiskContainer } from './index'

export default {
  title: 'Atoms/Disk',
  component: DiskContainer,
} as ComponentMeta<typeof DiskContainer>

const Template: ComponentStory<typeof DiskContainer> = (args) => (
  <DiskContainer {...args} />
)

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
