/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { BOOK_BY_ID } from './graphql'
import { Description as AuthorDescription } from '../AuthorList/components/Description'
import { Description as PublisherDescription } from '../PublisherList/components/Description'
import { Description as BookDescription } from '../BookList/components/Description'
import { OuterDiv, GoBackLink } from '../../styles'

const BookDesc = () => {
  const { type, id, bookid } = useParams()
  const { data, error, loading } = useQuery(BOOK_BY_ID, {
    variables: { id: bookid },
  })
  if (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('book query failed')
  }
  return (
    <OuterDiv>
      <GoBackLink to={`/${type}/${id}`}>Back</GoBackLink>
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', 'flex-direction': 'row' }}>
          <div style={{ padding: '25px' }}>
            <h2>Book:</h2>
            <BookDescription {...data.bookById} />
          </div>
          <div style={{ padding: '25px' }}>
            <h2>Author:</h2>
            <AuthorDescription {...data.bookById.author} />
          </div>
          <div style={{ padding: '25px' }}>
            <h2>Publisher:</h2>
            <PublisherDescription {...data.bookById.publisher} />
          </div>
        </div>
      )}
    </OuterDiv>
  )
}

export default BookDesc
