import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticlesDetailsPage from './ArticlesDetailsPage'

export default {
    title: '/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlesDetailsPage>

const Template: ComponentStory<typeof ArticlesDetailsPage> = () => <ArticlesDetailsPage/>

export const Normal = Template.bind({})
Normal.args = {}
