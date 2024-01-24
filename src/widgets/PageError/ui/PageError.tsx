import React, { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    const reloadPage = (): void => {
        window.location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    )
}
