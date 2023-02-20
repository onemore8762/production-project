import React, { type ReactElement, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'

const App = (): ReactElement => {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
