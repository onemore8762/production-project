import React, { memo, type ReactElement, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

export const AppRouter = memo((): ReactElement => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <div className={'page-wrapper'}>
                {route.element}
            </div>
        )

        return <Route key={route.path} path={route.path} element={route.authOnly
            ? <RequireAuth>{element}</RequireAuth>
            : element
        }>
        </Route>
    }, [])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}

)
