import React, { type ReactElement, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

export const AppRouter = (): ReactElement => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={(
                        <div className={'page-wrapper'}>
                            {element}
                        </div>
                    )}>
                    </Route>
                ))}
            </Routes>
        </Suspense>
    )
}
