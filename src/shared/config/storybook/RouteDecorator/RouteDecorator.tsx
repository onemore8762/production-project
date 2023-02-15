import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { type ReactElement } from 'react'

export const RouteDecorator = (story: () => Story): ReactElement => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
)
