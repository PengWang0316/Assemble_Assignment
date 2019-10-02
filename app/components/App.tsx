import React, { Suspense, lazy, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import importedComponent from 'react-imported-component';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar';
import { HOME_PAGE_URL, BILL_PAGE_URL, COMPLETE_PAGE_URL } from '../config';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4081f5',
      main: '#1a4fad',
      dark: '#08275e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#497ca4',
      main: '#105075',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

/* istanbul ignore next */
// const HomePage = importedComponent(() => import(/* webpackChunkName: "HomePageContainer" *//* webpackPrefetch: true */ './containers/HomePageContainer').catch(err => console.log(err)));
const CartPage = lazy(() => import(/* webpackChunkName: "CartPageContainer" *//* webpackPrefetch: true */ './containers/Cart'));
const BillPage = lazy(() => import(/* webpackChunkName: "BillContainer" *//* webpackPrefetch: true */ './containers/BillInformation'));
const OrderCompletePage = lazy(() => import(/* webpackChunkName: "OrderCompletePageContainer" *//* webpackPrefetch: true */ './containers/OrderComplete'));


/**
 * The root component that contains the theme, routers, navbar, and login dialog
 */
export const App = (): ReactElement => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <CssBaseline />
        <Navbar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={HOME_PAGE_URL} component={CartPage} />
              <Route exact path={BILL_PAGE_URL} component={BillPage} />
              <Route exact path={COMPLETE_PAGE_URL} component={OrderCompletePage} />
              <Route render={() => <p>Not Fount!</p>} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  </MuiThemeProvider>
);
export default App;
