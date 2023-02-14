import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError/ui/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render (): ReactNode {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback={<div>Loading...</div>}>
                <PageError/>
            </Suspense>
        }

        return children
    }
}
