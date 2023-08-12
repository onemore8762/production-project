import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetailsComments } from './ArticleDetailsComments'

export default {
    title: '/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = () => <ArticleDetailsComments id={'3'}/>

export const Normal = Template.bind({})
Normal.args = {}
