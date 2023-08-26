import React, { type ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Page } from 'widgets/Page/Page'
import { HStack } from 'shared/ui/Stack/index'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }
    return (
        <Page>
            {t('Главная страница')}
            <Input value={value}
                   placeholder='Введите текст'
                   onChange={onChange}/>
            <HStack>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: 'afd', disabled: true },
                        { value: '3', content: '1dsadsa3' }
                    ]}
                ></ListBox>
            </HStack>
        </Page>
    )
}

export default MainPage
