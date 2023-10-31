import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { Page } from '@/widgets/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { useSearchParams } from 'react-router-dom'
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchNextArticlesPage())
        }
    }, [dispatch])
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams))
    })
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}
                  className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlePageFilters/>
                <ArticleInfinityList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
