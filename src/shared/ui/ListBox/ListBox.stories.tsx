import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={{ padding: 100 }}><Story/></div>
    ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>

export const Normal = Template.bind({})
Normal.args = {
    value: 'DropDown',
    items: [
        { content: '12321312321', value: '123' },
        { content: '1232131232dd1', value: '1235' },
        { content: '123213123dddd21', value: '1243' }
    ]
}

export const topLeft = Template.bind({})
topLeft.args = {
    direction: 'top_left',
    value: 'DropDown',
    items: [
        { content: '12321312321', value: '123' },
        { content: '1232131232dd1', value: '1235' },
        { content: '123213123dddd21', value: '1243' }
    ]
}

export const topRight = Template.bind({})
topRight.args = {
    value: 'DropDown',
    direction: 'top_right',
    items: [
        { content: '12321312321', value: '123' },
        { content: '1232131232dd1', value: '1235' },
        { content: '123213123dddd21', value: '1243' }
    ]
}

export const bottomLeft = Template.bind({})
bottomLeft.args = {
    value: 'DropDown',
    direction: 'bottom_left',
    items: [
        { content: '12321312321', value: '123' },
        { content: '1232131232dd1', value: '1235' },
        { content: '123213123dddd21', value: '1243' }
    ]
}

export const bottomRight = Template.bind({})
bottomRight.args = {
    value: 'DropDown',
    direction: 'bottom_right',
    items: [
        { content: '12321312321', value: '123' },
        { content: '1232131232dd1', value: '1235' },
        { content: '123213123dddd21', value: '1243' }
    ]
}
