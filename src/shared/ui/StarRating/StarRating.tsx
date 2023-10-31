import { useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '../Icon/Icon'
import cls from './StarRating.module.scss'
import StarIcon from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = (props: StarRatingProps) => {
    const { className, selectedStars = 0, onSelect, size = 30 } = props

    const [isHovered, setIsHovered] = useState(false)
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    Svg={StarIcon}
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
                    key={starNumber}
                    height={size}
                    width={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    )
}
