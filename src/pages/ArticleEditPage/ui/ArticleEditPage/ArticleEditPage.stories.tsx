import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleEditPage from './ArticleEditPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage/>

export const Normal = Template.bind({})
Normal.args = {}
