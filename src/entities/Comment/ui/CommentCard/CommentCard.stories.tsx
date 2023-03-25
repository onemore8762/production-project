import React from 'react'
import { type ComponentMeta } from '@storybook/react'

import { CommentCard } from './CommentCard'

export default {
    title: '/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>
//
// const Template: ComponentStory<typeof CommentCard> = () => <CommentCard/>
//
// export const Normal = Template.bind({})
// Normal.args = {}
