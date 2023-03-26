import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Board } from './index'
import { BoardEntity } from 'entities/Board'

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

const columns = 8
const rows = 8
export const Default = Template.bind({})
Default.args = {
  state: new BoardEntity({ columns, rows }),
  color: 'green',
  columns: columns,
  rows: rows,
  boardSize: 640,
}
