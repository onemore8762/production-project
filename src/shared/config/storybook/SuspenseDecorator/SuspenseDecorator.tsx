// eslint-disable-next-line fsd-stabilized/layer-imports
import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'
import { Suspense } from 'react'

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent/>
    </Suspense>
)
