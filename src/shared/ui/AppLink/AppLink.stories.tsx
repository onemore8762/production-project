import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})

Primary.args = {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})

Secondary.args = {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
}

export const Red = Template.bind({})

Red.args = {
    children: 'Red',
    theme: AppLinkTheme.RED
}

export const PrimaryDark = Template.bind({})

PrimaryDark.args = {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})

SecondaryDark.args = {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
}

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})

RedDark.args = {
    children: 'Red',
    theme: AppLinkTheme.RED
}

RedDark.decorators = [ThemeDecorator(Theme.DARK)]
