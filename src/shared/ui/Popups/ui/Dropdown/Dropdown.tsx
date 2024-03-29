import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { AppLink } from '../../../AppLink/AppLink'
import { type DropdownDirection } from '../../types/types'
import popupCls from './../styles/popup.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

export function Dropdown (props: DropdownProps) {
    const { className, trigger, items, direction = 'bottom_right' } = props

    const menuClasses = [popupCls[direction]]

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            disabled={item.disabled}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    )
                })}

            </Menu.Items>
        </Menu>
    )
}
