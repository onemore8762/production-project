import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { type MutableRefObject, type ReactNode, useRef, type UIEvent } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/useThrottle/useThrottle'
import { getUIScrollByPath, uiActions } from 'features/UI'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname))
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log('scroll', e.currentTarget.scrollTop)
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    return (
        <section ref={wrapperRef}
                 onScroll={onScroll}
                 className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    )
}
