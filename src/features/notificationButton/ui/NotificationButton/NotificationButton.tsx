import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Popover } from 'shared/ui/Popups'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notifications'
import cls from './NotificationButton.module.scss'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <Popover className={classNames('', {}, [className])}
                 direction={'bottom_left'}
                 trigger={(
                     <Button theme={ButtonTheme.CLEAR}>
                         <Icon Svg={NotificationIcon} inverted></Icon>
                     </Button>
                 )}>
            <NotificationList className={cls.notifications}/>
        </Popover>
    )
}
