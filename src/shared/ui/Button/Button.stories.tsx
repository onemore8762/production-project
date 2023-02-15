import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    children: 'text'
}

export const Secondary = Template.bind({})

Secondary.args = {
    children: 'text',
    theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})

Outline.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE
}

export const OutlineDark = Template.bind({})

OutlineDark.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
