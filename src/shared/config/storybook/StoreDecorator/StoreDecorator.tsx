// eslint-disable-next-line fsd-stabilized/layer-imports
import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'
import { type ReactElement } from 'react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
// eslint-disable-next-line fsd-stabilized/layer-imports
import { uiReducer } from '@/features/UI'
// eslint-disable-next-line fsd-stabilized/layer-imports,fsd-stabilized/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage/model/slices'
import { profileReducer } from '@/features/editableProfileCard/testing'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    ui: uiReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => function StoryComponent (StoryComponent: Story): ReactElement {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
}
