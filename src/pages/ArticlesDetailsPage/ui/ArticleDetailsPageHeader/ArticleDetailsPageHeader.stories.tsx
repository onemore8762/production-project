import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

export default {
    title: '/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = () => <ArticleDetailsPageHeader/>

export const Normal = Template.bind({})
Normal.args = {}
