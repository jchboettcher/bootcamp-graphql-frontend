import gql from 'graphql-tag'

export const AUTHOR_BY_ID = gql`
  query authorById($id: ID!) {
    authorById(id: $id) {
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
      books {
        id
        title
        language
        numPages
        datePublished
        bestseller
        publisher {
          company
        }
      }
    }
  }
`

export const PUBLISHER_BY_ID = gql`
  query publisherById($id: ID!) {
    publisherById(id: $id) {
      company
      phoneNumber
      numBooksPublished
      address {
        street
        state
        city
        zip
      }
      books {
        id
        title
        language
        numPages
        datePublished
        bestseller
        author {
          firstName
          lastName
        }
      }
    }
  }
`

export const ADD_BOOK = gql`
  mutation addBook($input: AddBook!) {
    addBook(input: $input) {
      id
      title
      language
      numPages
      datePublished
      author {
        firstName
        lastName
      }
      publisher {
        company
      }
    }
  }
`
