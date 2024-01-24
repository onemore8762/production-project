import { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlePageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import {
    type ArticleSortField,
    ArticleSortSelector, type ArticleType,
    ArticleTypeTabs,
    type ArticleView,
    ArticleViewSelector
} from '@/entities/Article'
import { useSelector } from 'react-redux'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { type SortOrder } from '@/shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
    const { className } = props
    const { t } = useTranslation()
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)
    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        void dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch}
                       value={search}
                       placeholder={t('Поиск')}/>
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType}/>
        </div>
    )
}
