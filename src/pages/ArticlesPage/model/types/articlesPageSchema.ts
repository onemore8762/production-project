import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView, type ArticleSortField, type ArticleType } from '@/entities/Article'
import { type SortOrder } from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit: number
    hasMore: boolean
    // filtres
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    type: ArticleType
    search: string

    _inited: boolean
}
