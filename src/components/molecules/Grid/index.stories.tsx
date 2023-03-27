import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GridContainer } from './index'
import { PointEntity } from 'entities/Point'

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

const point = new PointEntity({ x: 0, y: 0 })
Default.args = {
  point: point,
  color: 'green',
  diskColor: 'black',
  onClickHandler: (point) => {
    console.log(`Grid: (${point.x}, ${point.y}) clicked`)
  },
}
