import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData, getUserRoles, type UserRole } from 'entities/User'
import { useMemo } from 'react'
import { RoutePath } from 'shared/config/routeConfig/type'

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export function RequireAuth ({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()
    const useRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some(requiredRole => {
            return useRoles?.includes(requiredRole)
        })
    }, [roles, useRoles])

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    }

    return children
}
