import gql from 'graphql-tag'

export const BOOK_BY_ID = gql`
  query bookById($id: ID!) {
    bookById(id: $id) {
      id
      title
      language
      numPages
      datePublished
      bestseller
      author {
        firstName
        lastName
        age
        email
        numBooksPublished
        address {
          street
          city
          state
          zip
        }
      }
      publisher {
        company
        phoneNumber
        numBooksPublished
        address {
          street
          city
          state
          zip
        }
      }
    }
  }
`
