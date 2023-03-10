import { type FC, type MouseEvent, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (
    {
        className,
        children,
        isOpen,
        onClose
    }) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const onContentClick = (e: MouseEvent): void => {
        e.stopPropagation()
    }
    if (!isOpen) {
        return null
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
