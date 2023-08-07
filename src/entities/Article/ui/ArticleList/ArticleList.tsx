import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import React, { type HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState } from 'react'
import { Virtuoso, VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso'
import { ArticlePageFilters } from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlePageFilters'
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/const/localstorage'

interface ArticleListProps {
    className?: string
    articles?: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    onLoadNextPart?: () => void
}

const Header = () => <ArticlePageFilters/>

const getSkeletons = () => new Array(3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view='BIG'/>
))

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'SMALL',
        isLoading,
        target,
        onLoadNextPart
    } = props
    const { t } = useTranslation()

    const [selectedArticleId, setSelectedArticleId] = useState(1)
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null)

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1
        setSelectedArticleId(+paged)
    }, [])

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        if (view === 'SMALL') {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {

                }
            })
        }
    })

    const renderArticle = (index: number, article: Article) => {
        return (
            <ArticleListItem
                target={target}
                article={article}
                view={view}
                key={article.id}
                className={cls.card}
            />
        )
    }

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            )
        }
        return null
    })

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])} style={{ width: '100%' }}>
            {/* {(articles?.length || 0) > 0 ? articles?.map((el) => renderArticle(1, el)) : null} */}
            {/* {isLoading && getSkeletons()} */}
            {view === 'BIG'
                ? (
                    <Virtuoso
                        style={{ height: '100%' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        initialTopMostItemIndex={selectedArticleId}
                        components={{
                            Header,
                            Footer
                        }}
                    >

                    </Virtuoso>
                )
                : (<VirtuosoGrid ref={virtuosoGridRef}
                >

                </VirtuosoGrid>
                )}
        </div>
    )
})
