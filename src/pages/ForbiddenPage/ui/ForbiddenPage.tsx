
import { useTranslation } from 'react-i18next'

const ForbiddenPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('У вас нет доступа к этой странице')}
        </div>
    )
}

export default ForbiddenPage
