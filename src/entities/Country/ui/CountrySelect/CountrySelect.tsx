import { useTranslation } from 'react-i18next'
import { Country } from '../../modal/types/country'
import { useCallback } from 'react'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return <ListBox onChange={onChangeHandler}
                    direction={'top_right'}
                    className={className}
                    readonly={readonly}
                    label={t('Укажите страну')}
                    defaultValue={t('Укажите страну')}
                    value={value}
                    items={options}
    />
}
