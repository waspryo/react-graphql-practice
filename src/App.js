import client from './client'
import { ME } from './graphql'
import {ApolloProvider} from 'react-apollo'
import {Query} from 'react-apollo'

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Graphql</div>
      <Query query={ME}>
      {
        ({loading, error, data}) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`

          return <div>{data.user.name}</div>
        }
      }
      </Query>
    </ApolloProvider>
  );
}

export default App;
