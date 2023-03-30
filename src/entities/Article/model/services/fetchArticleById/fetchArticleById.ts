import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../../types/article'
import { type ThunkConfig } from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)