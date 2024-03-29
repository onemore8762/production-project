import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'Denis',
            first: 'test',
            city: 'AFS',
            currency: Currency.USD
        }
    }
})]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'Denis',
            first: 'test',
            city: 'AFS',
            currency: Currency.USD
        }
    }
}), ThemeDecorator(Theme.DARK)]
