import { Circle, CircleOutlined } from '@mui/icons-material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Disk from './index'

type CircleIconProps = {
  fontSize?: string
  color?: string
}

const CircleIconComponent = ({ fontSize, color }: CircleIconProps) => (
  <span style={{ fontSize, color }}>
    <Circle fontSize="inherit" color="inherit" />
  </span>
)

const CircleOutlinedIconComponent = ({ fontSize, color }: CircleIconProps) => (
  <span style={{ fontSize, color }}>
    <CircleOutlined fontSize="inherit" color="inherit" />
  </span>
)

export default {
  title: 'Atoms/Disk',
  argTypes: {
    variant: {
      options: ['black', 'white'],
      control: { type: 'radio' },
      defaultValue: 'black',
      description: 'バリアント',
      table: {
        type: { summary: 'black | white' },
        defaultValue: { summary: 'black' },
      },
    },
    size: {
      control: { type: 'number' },
      description: '大きさ',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof Disk>

const Template: ComponentStory<typeof Disk> = (args) => <Disk {...args} />

// Black
export const Black = Template.bind({})
Black.args = {
  variant: 'black',
  children: <CircleIconComponent color="black" />,
}

// White
export const White = Template.bind({})
White.args = {
  variant: 'white',
  children: <CircleOutlinedIconComponent color="black" />,
}
