import React, { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')
    return (
        <div>
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
