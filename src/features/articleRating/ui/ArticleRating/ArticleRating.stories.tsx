import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleRating from './ArticleRating'

export default {
    title: '/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = () => <ArticleRating/>

export const Normal = Template.bind({})
Normal.args = {}
