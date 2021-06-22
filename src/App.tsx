import React, { Suspense, FunctionComponent } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from "./store/store";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const UsersContainer = React.lazy(() => import('./containers/user.container'));
const CompaniesContainer = React.lazy(() => import('./containers/companies.container'));
const ListContainer = React.lazy(() => import('./containers/list.container'));

const App: FunctionComponent = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={<p>laddar</p>} persistor={persistor}>
        <Router>
          <Suspense fallback={<p>laddar..</p>}>
            <Switch>
              <Route exact path="/" component={UsersContainer} />
              <Route exact path="/user" component={UsersContainer} />
              <Route exact path="/companies" component={CompaniesContainer} />
              <Route exact path="/list" component={ListContainer} />
            </Switch>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
