import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { type ReactElement } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsCommentsReducer } from 'page/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer
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
