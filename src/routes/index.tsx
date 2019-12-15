import React, { Component, lazy } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Bundle from '@src/components/Bundle'

const Index = lazy(() => import('@src/pages/index'))
import ErrorPages from './error'

const Routes = () => (
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Bundle(Index)} />
                {/* other Route */}
                <ErrorPages />
            </Switch>
        </>
    </Router>
)

export default Routes
