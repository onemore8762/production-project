import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})

Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti dignissimos dolorem exercitationem fugiat minima odit quaerat, quod suscipit! Blanditiis est excepturi, iusto libero pariatur reiciendis tempora totam! Dolorum, quam?\n'
}

export const Dark = Template.bind({})

Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti dignissimos dolorem exercitationem fugiat minima odit quaerat, quod suscipit! Blanditiis est excepturi, iusto libero pariatur reiciendis tempora totam! Dolorum, quam?\n'
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
