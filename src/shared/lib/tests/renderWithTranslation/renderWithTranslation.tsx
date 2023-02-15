import { render } from '@testing-library/react'
import { type ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from '../../../config/i18n/i18nForTest'

export function renderWithTranslation (component: ReactElement): any {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {component}
        </I18nextProvider>
    )
}
