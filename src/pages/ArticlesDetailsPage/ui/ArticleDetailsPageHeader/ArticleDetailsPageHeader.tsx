import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import { HStack } from '@/shared/ui/Stack/index'

import { RoutePath } from '@/shared/const/router'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id || ''}/edit`)
    }, [article?.id, navigate])

    return (
        <HStack max
                justify={'between'}
                className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )
            }
        </HStack>
    )
}
