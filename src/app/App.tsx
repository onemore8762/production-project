import React, { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'

const App = () => {
  const { theme } = useTheme()

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback={<div>Loading...</div>}>
              <Navbar/>
              <div className='content-page'>
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </Suspense>
      </div>
  )
}

export default App
