import React from 'react';
import './App.css';
import { Layout } from './features/layout';
import { Orders } from './features/orders';
import { makeStyles, Theme } from '@material-ui/core/styles'
import classnames from 'classnames'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from './features/notFound'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    }
}));


function App() {
    const classes = useStyles();

    return (
        <div className={classnames('App', classes.root)}>
            <Layout>
                <Switch>
                    <Route path='/data'>
                        <Orders></Orders>
                    </Route>
                    <Route path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Layout>      
        </div>
  );
}

export default App;
