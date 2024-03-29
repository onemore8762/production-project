import React, { type FC, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Dropdown } from '@/shared/ui/Popups'
import { Avatar } from '@/shared/ui/Avatar'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from '@/shared/const/router'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const authData = useSelector(getUserAuthData)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }

    const isAdminPanelAvailable = isAdmin || isManager
    return (
        <Dropdown
                className={classNames('', {}, [className])}
                direction={'bottom_left'}
                items={[
                    ...(isAdminPanelAvailable
                        ? [{
                            content: t('Админка'),
                            href: RoutePath.admin_panel
                        }]
                        : []),
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData.id
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogout
                    }
                ]}
                trigger={<Avatar size={30} src={authData.avatar}/>}
        />
    )
}
