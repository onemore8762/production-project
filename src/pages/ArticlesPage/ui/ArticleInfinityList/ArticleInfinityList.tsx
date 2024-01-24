import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlesPageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Text } from '@/shared/ui/Text'

interface ArticleInfinityListProps {
    className?: string
}

export const ArticleInfinityList = (props: ArticleInfinityListProps) => {
    const { className } = props
    const { t } = useTranslation()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')}></Text>
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        </div>
    )
}
