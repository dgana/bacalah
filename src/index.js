import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import client from './apollo'

// nama url menjadi https://batam-news.appspot.com/graphql/ bukan https://batam-news.appspot.com/graphiql/
new ApolloClient({
  link: new HttpLink({ uri: `https://inbound-hawk-157511.appspot.com/graphql/` }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
// registerServiceWorker()
