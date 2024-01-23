// eslint-disable-next-line fsd-stabilized/layer-imports
import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'
// eslint-disable-next-line fsd-stabilized/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type ReactElement } from 'react'
import { type Theme } from '@/shared/const/theme'

export const ThemeDecorator = (theme: Theme) => function StoryComponent (StoryComponent: Story): ReactElement {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        </ThemeProvider>
    )
}
