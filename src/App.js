import React, { Component } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createBatchingNetworkInterface
} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://0.0.0.0:8000/gql/',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
         <div>
          <Route exact path="/" component={HomeView} />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/" component={HomeView} />
          </Switch>
         </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
