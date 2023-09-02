import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '@/entities/Article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesRecommendations',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4
                }
            })

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
