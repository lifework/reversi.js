import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Game } from './index'

export default {
  title: 'Organism/Game',
  component: Game,
} as ComponentMeta<typeof Game>

const Template: ComponentStory<typeof Game> = (args) => {
  return <Game {...args} />
}

export const Default = Template.bind({})
Default.args = {
  columns: 8,
  rows: 8,
}
