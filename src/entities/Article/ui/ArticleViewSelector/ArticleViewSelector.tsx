import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { type ArticleView } from '../../model/types/article'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { memo } from 'react'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: 'SMALL' as ArticleView,
        icon: TiledIcon
    },
    {
        view: 'BIG' as ArticleView,
        icon: ListIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    )
})
