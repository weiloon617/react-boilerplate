import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import importedComponent from 'react-imported-component'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Reducer
import reducer from './reducers/reducer'

// Route
import Home from './routes/home/Home'

// Component
import Loading from './components/loading/Loading'

const store = createStore(reducer, {}, compose(applyMiddleware(thunk)))

const AsyncDynamicPage = importedComponent(
  () =>
    import(/*webpackChunkName:'DynamicPage'*/ './routes/dynamicPage/DynamicPage'),
  { LoadingComponent: Loading },
)
const AsyncNoMatch = importedComponent(
  () => import(/*webpackChunkName:'NoMatch'*/ './routes/noMatch/NoMatch'),
  { LoadingComponent: Loading },
)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dynamic" component={AsyncDynamicPage} />
            <Route component={AsyncNoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
