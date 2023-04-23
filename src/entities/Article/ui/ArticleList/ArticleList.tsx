import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { type HTMLAttributeAnchorTarget } from 'react'

interface ArticleListProps {
    className?: string
    articles?: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === 'SMALL' ? 9 : 3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
))

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'SMALL',
        isLoading,
        target
    } = props
    const { t } = useTranslation()

    const renderArticle = (article: Article) => {
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

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {(articles?.length || 0) > 0 ? articles?.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
}
