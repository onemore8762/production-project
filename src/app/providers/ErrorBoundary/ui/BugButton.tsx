import React, { type ReactElement, useEffect, useState } from 'react'

import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'

export const BugButton = (): ReactElement => {
    const [error, setError] = useState(false)
    const onThrow = (): void => {
        setError(true)
    }
    const { t } = useTranslation()

    useEffect(() => {
        if (error) {
            throw new Error('Error')
        }
    }, [error])

    return (

        <Button onClick={onThrow}>
            {t('Сгенерировать ошибку')}
        </Button>
    )
}
