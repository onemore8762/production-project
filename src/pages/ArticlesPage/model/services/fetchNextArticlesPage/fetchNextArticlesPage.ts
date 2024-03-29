import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const hasMore = getArticlesPageHasMore(getState())
        const page = getArticlesPageNum(getState())
        const isLoading = getArticlesPageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1))
            void dispatch(fetchArticlesList({}))
        }
    }
)
