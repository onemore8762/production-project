import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentList } from './CommentList'

export default {
    title: '/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = () => <CommentList/>

export const Normal = Template.bind({})
Normal.args = {}
