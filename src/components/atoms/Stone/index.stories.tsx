import { ComponentMeta, ComponentStory } from '@storybook/react'
import Stone from './index'

export default {
  title: 'Atoms/Stone',
  argTypes: {
    variant: {
      options: ['black', 'white'],
      control: { type: 'radio' },
      defaultValue: 'black',
      // docsに表示する内容を設定
      description: 'Stone Variant',
      table: {
        type: { summary: 'white | black' },
        defaultValue: { summary: 'black' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '石の横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '石の縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof Stone>

const Template: ComponentStory<typeof Stone> = (args) => <Stone {...args} />

// Black
export const Black = Template.bind({})
Black.args = { variant: 'black', children: 'Black Stone' }

// White
export const White = Template.bind({})
White.args = { variant: 'white', children: 'White Stone' }
