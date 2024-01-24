import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useCallback } from 'react'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = (props: ArticleRatingProps) => {
    const {
        className,
        articleId
    } = props
    const userData = useSelector(getUserAuthData)
    const { t } = useTranslation()
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })

    const [rateArticleMutation] = useRateArticle()
    const rating = data?.[0]

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            void rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
    }, [handleRateArticle])

    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            className={className}
            rate={rating?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой')}
            hasFeedback
        />
    )
}

export default ArticleRating
