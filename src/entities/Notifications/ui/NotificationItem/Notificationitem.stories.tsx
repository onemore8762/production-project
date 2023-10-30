import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { NotificationItem } from '@/entities/Notifications/ui/NotificationItem/NotificationItem'

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Primary = Template.bind({})

Primary.args = {
    item: {
        id: '1',
        title: 'Уведомление',
        description: 'Помыть посуду'
    }
}
Primary.decorators = [StoreDecorator({})]
