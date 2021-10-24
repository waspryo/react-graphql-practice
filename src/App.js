import client from './client'
import { ME, SEARCH_REPOSITORIES } from './graphql'
import {ApolloProvider} from 'react-apollo'
import {Query} from 'react-apollo'

const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}

function App() {
  const {query, first, last, before, after} = VARIABLES
  return (
    <ApolloProvider client={client}>
      <Query query={SEARCH_REPOSITORIES}
      variables={{query, first, last, before, after}}
      >
      {
        ({loading, error, data}) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`
          console.log({data})
          return <div></div>
        }
      }
      </Query>
    </ApolloProvider>
  );
}

export default App;
