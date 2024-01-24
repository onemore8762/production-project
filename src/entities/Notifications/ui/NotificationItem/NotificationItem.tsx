import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { type Notification } from '../../model/types/notification'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import cls from './NotificationItem.module.scss'
interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem: FC<NotificationItemProps> = ({ className, item }) => {
    const { t } = useTranslation()

    const content = (
        <Card theme={'outlined'} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description}></Text>
        </Card>
    )

    if (item.href) {
        return (
            <a className={cls.link} target={'_blank'} href={item.href} rel="noreferrer">
                {content}
            </a>
        )
    }
    return content
}
