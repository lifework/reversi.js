import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GameContainer } from './index'

export default {
  title: 'Organism/Game',
  component: GameContainer,
} as ComponentMeta<typeof GameContainer>

const Template: ComponentStory<typeof GameContainer> = (args) => {
  return <GameContainer {...args} />
}

export const Default = Template.bind({})
Default.args = {
  columns: 4,
  rows: 4,
}
