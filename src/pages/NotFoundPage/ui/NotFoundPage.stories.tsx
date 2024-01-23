import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
