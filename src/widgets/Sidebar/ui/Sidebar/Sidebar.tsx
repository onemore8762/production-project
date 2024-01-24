import React, { memo, useMemo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidibarItems'
import { VStack } from '@/shared/ui/Stack'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const toggle = (): void => {
        setCollapsed(prevState => !prevState)
    }
    const itemList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [sidebarItemsList, collapsed])
    return (
        <section data-testid="sidebar"
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
            <VStack role={'navigation'} gap={'8'} className={cls.items}>
                {itemList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </section>
    )
})
