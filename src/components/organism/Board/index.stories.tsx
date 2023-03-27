import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BoardContainer } from './index'
import { BoardEntity } from 'entities/Board'

export default {
  title: 'Organism/Board',
  component: BoardContainer,
} as ComponentMeta<typeof BoardContainer>

const Template: ComponentStory<typeof BoardContainer> = (args) => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <BoardContainer {...args} />
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
