import React, { memo, type ReactElement, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import { routeConfig } from '../config/routeConfig'
import { type AppRoutesProps } from '@/shared/types/router'

export const AppRouter = memo((): ReactElement => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <>
                {route.element}
            </>
        )
        return <Route key={route.path} path={route.path} element={route.authOnly
            ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
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
