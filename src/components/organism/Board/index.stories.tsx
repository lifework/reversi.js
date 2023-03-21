import { ComponentMeta, ComponentStory } from '@storybook/react'
import Board from './index'

export default {
  title: 'Organism/Board',
  component: Board,
  argTypes: {
    size: {
      control: { type: 'string' },
      description: '大きさ',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />

export const Default = Template.bind({})
Default.args = {}
