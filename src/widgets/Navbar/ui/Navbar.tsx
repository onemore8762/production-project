import React, { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.links}
                    onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti dignissimos dolorem exercitationem fugiat minima odit quaerat, quod suscipit! Blanditiis est excepturi, iusto libero pariatur reiciendis tempora totam! Dolorum, quam?
            </Modal>
        </div>
    )
}
