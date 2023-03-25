import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { type CSSProperties } from 'react'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        border,
        height
    } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div className={classNames(cls.Skeleton, {}, [className])}
             style={styles}
        >

        </div>
    )
}
