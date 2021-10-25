import client from './client'
import {  SEARCH_REPOSITORIES } from './graphql'
import {ApolloProvider} from 'react-apollo'
import {Query} from 'react-apollo'
import { useState } from 'react'

const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}

function App() {
  const [searchResult, setSearchResult] = useState(VARIABLES)

  const handleChange = (e) => {
    setSearchResult({
      ...searchResult,
      query: e.target.value
    })
  }

  const {query, first, last, before, after} = searchResult
  return (
    <ApolloProvider client={client}>
      <form>
        <input value={query} onChange={handleChange}/>
      </form>
      <Query query={SEARCH_REPOSITORIES}
      variables={{query, first, last, before, after}}
      >
      {
        ({loading, error, data}) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`
          const search = data.search
          const repositoryCount = search.repositoryCount
          const repositoryUnit = repositoryCount === 1 ? 'Repository' : 'Repositories'
          const title = `Github Repositories Search Results - ${data.search.repositoryCount} ${repositoryUnit}`
          return <h2>{title}</h2>
        }
      }
      </Query>
    </ApolloProvider>
  );
}

export default App;
