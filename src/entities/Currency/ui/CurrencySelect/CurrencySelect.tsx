import { useTranslation } from 'react-i18next'
import { Currency } from '../../modal/types/currency'
import { useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return <ListBox onChange={onChangeHandler}
                    className={className}
                    readonly={readonly}
                    label={t('Укажите страну')}
                    defaultValue={t('Укажите валюту')}
                    value={value}
                    direction={'top_right'}
                    items={options}
    />
}
