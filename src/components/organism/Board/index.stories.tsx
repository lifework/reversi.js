import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Board } from './index'

export default {
  title: 'Organism/Board',
  component: Board,
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = (args) => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Board {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'green',
  columns: 8,
  rows: 8,
  boardSize: 640,
}
