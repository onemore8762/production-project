import { useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { type SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newOrder: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, onChangeSort, sort, onChangeOrder, order } = props
    const { t } = useTranslation()
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ]
    , [t])
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ]
    , [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
}
