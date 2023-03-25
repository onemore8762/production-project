import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { type Comment } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
    const { className, isLoading, comments } = props

    const { t } = useTranslation()
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard className={cls.comment}
                                 comment={comment}
                                 isLoading={isLoading}
                                 key={comment.id}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')}/>}
        </div>
    )
}
