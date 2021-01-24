/* eslint-disable no-nested-ternary */
import React, { useReducer } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Entry from './components/Entry'
import AddEntry from './components/AddEntry'
// import SearchBar from './SearchBar'
import { OuterDiv, GoBackLink } from '../../styles'
import { ALL_AUTHORS, ADD_AUTHOR } from './graphql'
import { formReducer } from '../components/FormInput'
import { emptyForm } from './components/Constants'

const AuthorsListApp = () => {
  const [form, setForm] = useReducer(formReducer, emptyForm)
  const { data, error: queryError, loading: queryLoading } = useQuery(ALL_AUTHORS)
  if (queryError) {
    // eslint-disable-next-line no-console
    console.warn(queryError)
    throw new Error('query authors failed')
  }
  const [addAuthor, { error: addError }] = useMutation(ADD_AUTHOR, {
    update: (client, { data: { addAuthor: createAuthor } }) => {
      try {
        const temp = client.readQuery({ query: ALL_AUTHORS })
        temp.allAuthors = [...temp.allAuthors, createAuthor]
        client.writeQuery({ query: ALL_AUTHORS, temp })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err)
        throw new Error('author cache failed')
      }
    },
    variables: {
      input: {
        firstName: form['First Name'],
        lastName: form['Last Name'],
        age: form.Age === '' ? null : parseInt(form.Age, 10),
        email: form.email === '' ? null : form.email,
        numBooksPublished: form['Number of Books Published'] === ''
          ? 0 : parseInt(form['Number of Books Published'], 10),
        address: form.Street ? {
          street: form.Street,
          city: form.City,
          state: form.State,
          zip: form.Zip,
        } : null,
      },
    },
  })
  if (addError) {
    // eslint-disable-next-line no-console
    console.warn(addError)
    throw new Error('add author failed')
  }
  return (
    <OuterDiv>
      <GoBackLink to="/">Back</GoBackLink>
      <h1>Authors</h1>
      <div>
        <AddEntry addAuthor={addAuthor} form={form} setForm={setForm} />
        {/* <SearchBar lists={lists} setLists={setLists} /> */}
      </div>
      {queryLoading ? 'Loading...' : (
        data.allAuthors.length
          ? (data.allAuthors.map(entry => (
            entry ? (
              <Entry
                key={entry.id}
                rank={data.allAuthors.indexOf(entry)}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...entry}
              />
            ) : ''
          )))
          : <p>No authors to show.</p>)}
    </OuterDiv>
  )
}

export default AuthorsListApp
