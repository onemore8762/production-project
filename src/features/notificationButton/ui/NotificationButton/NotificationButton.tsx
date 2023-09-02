import React, { type FC, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Popover } from '@/shared/ui/Popups'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { NotificationList } from '@/entities/Notifications'
import cls from './NotificationButton.module.scss'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted></Icon>
        </Button>
    )
    return (
        <div>
            <BrowserView>
                <Popover className={classNames('', {}, [className])}
                         direction={'bottom_left'}
                         trigger={trigger}>
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}

                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </div>

    )
}
