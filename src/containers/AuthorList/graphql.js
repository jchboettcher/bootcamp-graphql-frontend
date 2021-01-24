import gql from 'graphql-tag'

export const ALL_AUTHORS = gql`
  query allAuthors {
    allAuthors {
      id
      firstName
      lastName
      age
      email
      numBooksPublished
      address {
        street
        state
        city
        zip
      }
    }
  }
`

export const ADD_AUTHOR = gql`
  mutation addAuthor($input: AddAuthor!) {
    addAuthor(input: $input) {
      id
      firstName
      lastName
      age
      email
      numBooksPublished
      address {
        street
        state
        city
        zip
      }
    }
  }
`
