import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationList } from '@/entities/Notifications'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock]
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Primary = Template.bind({})

Primary.args = {
}
Primary.decorators = [StoreDecorator({})]

Primary.parameters = {
    mockData: [
        {
            url: __API__ + '/notifications',
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Помыть посуду'
                },
                {
                    id: '2',
                    title: 'Уведомление2',
                    description: 'Помыть посуду'
                },
                {
                    id: '3',
                    title: 'Уведомление3',
                    description: 'Помыть посуду'
                }
            ]
        }
    ]
}
