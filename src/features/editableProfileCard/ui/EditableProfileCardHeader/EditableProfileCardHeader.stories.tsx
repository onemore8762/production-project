import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = () => <EditableProfileCardHeader/>

export const Normal = Template.bind({})
Normal.args = {}

Normal.decorators = [StoreDecorator({})]
