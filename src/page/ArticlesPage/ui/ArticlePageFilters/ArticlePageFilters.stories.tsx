import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticlePageFilters } from './ArticlePageFilters'

export default {
    title: 'page/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlePageFilters>

const Template: ComponentStory<typeof ArticlePageFilters> = () => <ArticlePageFilters/>

export const Normal = Template.bind({})
Normal.args = {}
