import React from 'react';
import { Route, Switch } from 'react-router'

import { Home } from './pages/Home';

export function RootCmp() {


    return (
        <section className='app main-container'>
            {/* <Header/> */}
            <main>
                <Switch>
                    {/* <Route component={Favorites} path="/favorites" /> */}
                    {/* <Route component={Search} path="/search" /> */}
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            {/* <Footer/> */}
        </section>
    )
}