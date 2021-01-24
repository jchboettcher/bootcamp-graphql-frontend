/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Entry from './components/Entry'
import AddEntry from './components/AddEntry'
// import SearchBar from './SearchBar'
import { OuterDiv, GoBackLink } from '../../styles'
import { AUTHOR_BY_ID, PUBLISHER_BY_ID, ADD_BOOK } from './graphql'
import { formReducer } from '../components/FormInput'
import { emptyForm } from './components/Constants'
import { Description as AuthorDescription } from '../AuthorList/components/Description'
import { Description as PublisherDescription } from '../PublisherList/components/Description'

const AuthorsListApp = () => {
  const { type, id } = useParams()
  const getQuery = () => {
    if (type === 'authors') {
      return AUTHOR_BY_ID
    }
    return PUBLISHER_BY_ID
  }
  const [form, setForm] = useReducer(formReducer, emptyForm)
  const { data, error: queryError, loading: queryLoading } = useQuery(getQuery(), {
    variables: { id },
  })
  if (queryError) {
    // eslint-disable-next-line no-console
    console.warn(queryError)
    throw new Error('query failed')
  }
  const getData = () => {
    if (queryLoading) {
      return null
    }
    if (type === 'authors') {
      return data.authorById
    }
    return data.publisherById
  }
  const getAuthor = () => {
    if (queryLoading) {
      return { firstName: '', lastName: '' }
    }
    if (type === 'authors') {
      return {
        firstName: data.authorById.firstName,
        lastName: data.authorById.lastName,
      }
    }
    return {
      firstName: form['Author First Name'],
      lastName: form['Author Last Name'],
    }
  }
  const getPublisher = () => {
    if (queryLoading) {
      return ''
    }
    if (type === 'publishers') {
      return data.publisherById.company
    }
    return form.Publisher
  }
  const [addBook, { error: addError }] = useMutation(ADD_BOOK, {
    variables: {
      input: {
        title: form.Title,
        language: form.Language,
        numPages: form['Number of Pages'] === ''
          ? null : parseInt(form['Number of Pages'], 10),
        datePublished: form['Date Published'] === ''
          ? null : form['Date Published'],
        bestseller: form.Bestseller === 'yes',
        author: {
          firstName: getAuthor().firstName,
          lastName: getAuthor().lastName,
        },
        publisher: {
          company: getPublisher(),
        },
      },
    },
    refetchQueries: () => [{
      query: getQuery(),
      variables: { id },
    }],
  })
  if (addError) {
    // eslint-disable-next-line no-console
    console.warn(addError)
    throw new Error('add book failed')
  }
  return (
    <OuterDiv>
      <GoBackLink to={`/${type}`}>Back</GoBackLink>
      {queryLoading ? <p>Loading...</p> : (
        <>
          {type === 'authors' ? (
            <AuthorDescription {...getData()} />
          ) : (
            <PublisherDescription {...getData()} />
          )}
          <div>
            <AddEntry addBook={addBook} form={form} setForm={setForm} type={type} />
            {/* <SearchBar lists={lists} setLists={setLists} /> */}
          </div>
          {getData().books.length
            ? (getData().books.map(entry => (
              entry ? (
                <Entry
                  key={entry.id}
                  rank={getData().books.indexOf(entry)}
                  link={`/${type}/${id}/${entry.id}`}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...entry}
                />
              ) : ''
            )))
            : <p>No books to show.</p>}
        </>
      )}
    </OuterDiv>
  )
}

export default AuthorsListApp
