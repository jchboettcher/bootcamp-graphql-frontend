import gql from 'graphql-tag'

export const ALL_PUBLISHERS = gql`
  query allPublishers {
    allPublishers {
      id
      company
      phoneNumber
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

export const ADD_PUBLISHER = gql`
  mutation addPublisher($input: AddPublisher!) {
    addPublisher(input: $input) {
      id
      company
      phoneNumber
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
