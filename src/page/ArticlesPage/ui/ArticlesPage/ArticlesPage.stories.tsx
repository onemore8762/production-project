import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticlesPage from './ArticlesPage'

export default {
    title: '/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage/>

export const Normal = Template.bind({})
Normal.args = {}
