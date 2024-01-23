import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleInfinityList } from './ArticleInfinityList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ArticlesPage/ArticleInfinityList',
    component: ArticleInfinityList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleInfinityList>

const Template: ComponentStory<typeof ArticleInfinityList> = () => <ArticleInfinityList/>

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
