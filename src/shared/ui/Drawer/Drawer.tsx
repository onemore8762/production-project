import { type FC, type ReactNode } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer: FC<DrawerProps> = (props) => {
    const { className, onClose, isOpen, children } = props
    const { theme } = useTheme()
    const mods: Mods = {
        [cls.opened]: isOpen
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
