import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { type ReactElement } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => function StoryComponent (StoryComponent: Story):
ReactElement {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent/>
        </StoreProvider>
    )
}
