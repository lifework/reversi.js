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

export const Default = Template.bind({})
Default.args = {
  color: 'green',
  columns: 4,
  rows: 4,
  gridSize: 80,
}
