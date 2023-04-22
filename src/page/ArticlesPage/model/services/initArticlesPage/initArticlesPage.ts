import { type ThunkConfig } from 'app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticlesPageInited } from '../../selectores/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const inited = getArticlesPageInited(getState())
        if (!inited) {
            void dispatch(articlesPageActions.initState())
            void dispatch(fetchArticlesList({
                page: 1
            }))
        }
    }
)
