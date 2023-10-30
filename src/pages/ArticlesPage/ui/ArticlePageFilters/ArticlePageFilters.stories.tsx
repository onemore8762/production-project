import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticlePageFilters } from './ArticlePageFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticlePageFilters>

const Template: ComponentStory<typeof ArticlePageFilters> = () => <ArticlePageFilters/>

export const Normal = Template.bind({})
Normal.args = {}
