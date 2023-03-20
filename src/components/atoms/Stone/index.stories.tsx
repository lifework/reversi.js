import CircleIcon from '@mui/icons-material/Circle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Stone from './index'

type CircleIconProps = {
  fontSize?: string
  color?: string
}

const CircleIconComponent = ({ fontSize, color }: CircleIconProps) => (
  <span style={{ fontSize, color }}>
    <CircleIcon fontSize="inherit" color="inherit" />
  </span>
)

const CircleOutlinedIconComponent = ({ fontSize, color }: CircleIconProps) => (
  <span style={{ fontSize, color }}>
    <CircleOutlinedIcon fontSize="inherit" color="inherit" />
  </span>
)

export default {
  title: 'Atoms/Stone',
  argTypes: {
    variant: {
      options: ['black', 'white'],
      control: { type: 'radio' },
      defaultValue: 'black',
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'black | white' },
        defaultValue: { summary: 'black' },
      },
    },
    size: {
      control: { type: 'number' },
      description: '石の大きさ',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof Stone>

const Template: ComponentStory<typeof Stone> = (args) => <Stone {...args} />

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
