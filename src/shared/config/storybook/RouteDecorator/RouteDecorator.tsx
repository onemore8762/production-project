// eslint-disable-next-line fsd-stabilized/layer-imports
import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent/>
    </BrowserRouter>
)
