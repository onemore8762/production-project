import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {MainPageAsync} from "./page/MainPage/MainPage.async";
import {AboutPageAsync} from "./page/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    const bool = true
    return (
        <div className={classNames('app', {}, [theme])}>
            {/*<Counter/>*/}
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={''}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={''} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;