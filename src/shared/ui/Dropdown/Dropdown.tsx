import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

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

    const menuClasses = [cls[direction]]

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            disabled={item.disabled}
                            className={classNames(cls.item, { [cls.active]: active })}
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
