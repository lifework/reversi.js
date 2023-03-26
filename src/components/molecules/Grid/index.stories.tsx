import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Grid } from './index'

export default {
  title: 'Molecules/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Grid {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'green',
  disk: 'black',
}
