import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Label } from '.'

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = () => <Label text="公開" />

export const Normal = Template.bind({})
Normal.args = {}
