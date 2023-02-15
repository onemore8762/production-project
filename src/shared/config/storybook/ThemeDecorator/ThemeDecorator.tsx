import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import { type ReactElement } from 'react'

export const ThemeDecorator = (theme: Theme) => function StoryComponent (StoryComponent: Story): ReactElement {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
}
