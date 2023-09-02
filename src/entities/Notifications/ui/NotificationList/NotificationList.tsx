import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useNotifications } from '../../api/notificationApi'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import cls from './NotificationList.module.scss'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = ({ className }) => {
    const { t } = useTranslation()
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000
    })

    if (isLoading) {
        return (
            <VStack gap={'16'}
                    max
                    className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width='100%' border='8px' height='80px'></Skeleton>
                <Skeleton width='100%' border='8px' height='80px'></Skeleton>
                <Skeleton width='100%' border='8px' height='80px'></Skeleton>

            </VStack>
        )
    }
    return (
        <VStack gap={'16'}
                max
                className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map(item => (
                <NotificationItem key={item.id} item={item}></NotificationItem>
            ))}
        </VStack>
    )
}
