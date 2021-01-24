import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home/index'
import AuthorsListApp from './containers/AuthorList/index'
import PublishersListApp from './containers/PublisherList/index'
import BookList from './containers/BookList/index'
import BookDesc from './containers/BookDesc/index'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route exact path="/:type(authors|publishers)/:id/:bookid">
              <BookDesc />
            </Route>
            <Route exact path="/:type(authors|publishers)/:id">
              <BookList />
            </Route>
            <Route exact path="/authors">
              <AuthorsListApp />
            </Route>
            <Route exact path="/publishers">
              <PublishersListApp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
