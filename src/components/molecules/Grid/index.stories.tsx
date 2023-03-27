import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GridContainer } from './index'

export default {
  title: 'Molecules/Grid',
  component: GridContainer,
} as ComponentMeta<typeof GridContainer>

const Template: ComponentStory<typeof GridContainer> = (args) => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <GridContainer {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'green',
  disk: 'black',
}
