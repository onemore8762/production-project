import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = (): void => {
        void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
                className={classNames('', {}, [className])}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}
)
