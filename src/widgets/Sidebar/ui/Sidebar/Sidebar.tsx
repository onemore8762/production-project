import React, { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidibarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const toggle = (): void => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <menu data-testid="sidebar"
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
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </menu>
    )
})
