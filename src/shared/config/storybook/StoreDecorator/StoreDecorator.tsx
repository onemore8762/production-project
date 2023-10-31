import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'
import { type ReactElement } from 'react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line fsd-stabilized/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line fsd-stabilized/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line fsd-stabilized/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice'
import { uiReducer } from '@/features/UI'
// eslint-disable-next-line fsd-stabilized/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage/model/slices'
// eslint-disable-next-line fsd-stabilized/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'

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
