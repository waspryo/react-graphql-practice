import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login: "waspryo") {
      name,
      avatarUrl
    }
  }
`