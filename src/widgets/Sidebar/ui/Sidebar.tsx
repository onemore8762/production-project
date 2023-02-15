import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

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
            <button data-testid = "sidebar-toggle"
                    type="button"
                    onClick={toggle}> {t('Переключатель')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
