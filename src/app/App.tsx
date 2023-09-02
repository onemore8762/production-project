import React, { type ReactElement, Suspense, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from '@/app/providers/router'
import { Sidebar } from '@/widgets/Sidebar'
import { Navbar } from '@/widgets/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from '@/entities/User'

const App = (): ReactElement => {
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App
