import React from 'react';
import './App.css';
import { ApolloClient, inMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new inMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
    </ApolloProvider>
  );
}

export default App;
