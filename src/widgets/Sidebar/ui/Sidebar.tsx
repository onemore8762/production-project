import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/home.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation('translation')
    const toggle = (): void => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div data-testid="sidebar"
             className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid="sidebar-toggle"
                    type="button"
                    onClick={toggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    size={ButtonSize.L}
                    square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>

                <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>

                <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                        className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
}
