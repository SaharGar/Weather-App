import React from 'react';
import { Route, Switch } from 'react-router'

import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Favorites } from './pages/favorites';

import { Header } from './cmp/Header';

export function RootCmp() {


    return (
        <section className='app main-container'>
            <Header/>
            <main>
                <Switch>
                    <Route component={Favorites} path="/WeatherApp/favorites" />
                    <Route component={Search} path="/WeatherApp/search" />
                    <Route component={Home} path="/WeatherApp" />
                </Switch>
            </main>
            {/* <Footer/> */}
        </section>
    )
}