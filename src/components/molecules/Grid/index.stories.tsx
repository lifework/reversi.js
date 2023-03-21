import { ComponentMeta, ComponentStory } from '@storybook/react'
import Grid from './index'

export default {
  title: 'Molecules/Grid',
  component: Grid,
  // argTypes: {
  //   size: {
  //     control: { type: 'string' },
  //     description: '大きさ',
  //     table: {
  //       type: { summary: 'string' },
  //     },
  //   },
  //},
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'green',
  size: '1px',
}
