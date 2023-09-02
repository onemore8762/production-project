import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = () => <ArticleDetailsPageHeader/>

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
