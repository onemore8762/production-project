import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
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

export const Clear = Template.bind({})

Clear.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})

ClearInverted.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Outline = Template.bind({})

Outline.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE
}
export const OutlineSizeL = Template.bind({})

OutlineSizeL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}
export const OutlineSizeXL = Template.bind({})

OutlineSizeXL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
}

export const OutlineDark = Template.bind({})

OutlineDark.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})

BackgroundTheme.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({})

BackgroundInverted.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({})

Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
}
export const SquareL = Template.bind({})

SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
}
export const SquareM = Template.bind({})

SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
}
export const SquareXL = Template.bind({})

SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
}

export const Disabled = Template.bind({})

Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true
}
