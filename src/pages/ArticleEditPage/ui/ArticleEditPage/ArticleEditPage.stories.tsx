import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleEditPage } from './ArticleEditPage'

export default {
    title: '/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage/>

export const Normal = Template.bind({})
Normal.args = {}
