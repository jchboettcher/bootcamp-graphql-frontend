/* eslint-disable no-nested-ternary */
import React, { useReducer } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Entry from './components/Entry'
import AddEntry from './components/AddEntry'
// import SearchBar from './SearchBar'
import { OuterDiv, GoBackLink } from '../../styles'
import { ALL_PUBLISHERS, ADD_PUBLISHER } from './graphql'
import { formReducer } from '../components/FormInput'
import { emptyForm } from './components/Constants'

const PublishersListApp = () => {
  const [form, setForm] = useReducer(formReducer, emptyForm)
  const { data, error: queryError, loading: queryLoading } = useQuery(ALL_PUBLISHERS)
  if (queryError) {
    // eslint-disable-next-line no-console
    console.warn(queryError)
    throw new Error('query publishers failed')
  }
  const [addPublisher, { error: addError }] = useMutation(ADD_PUBLISHER, {
    update: (client, { data: { addPublisher: createPublisher } }) => {
      try {
        const temp = client.readQuery({ query: ALL_PUBLISHERS })
        temp.allPublishers = [...temp.allPublishers, createPublisher]
        client.writeQuery({ query: ALL_PUBLISHERS, temp })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err)
        throw new Error('publisher cache failed')
      }
    },
    variables: {
      input: {
        company: form.Company,
        phoneNumber: form['Phone Number'] === ''
          ? null : form['Phone Number'],
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
    throw new Error('add publisher failed')
  }
  return (
    <OuterDiv>
      <GoBackLink to="/">Back</GoBackLink>
      <h1>Publishers</h1>
      <div>
        <AddEntry addPublisher={addPublisher} form={form} setForm={setForm} />
        {/* <SearchBar lists={lists} setLists={setLists} /> */}
      </div>
      {queryLoading ? 'Loading...' : (
        data.allPublishers.length
          ? (data.allPublishers.map(entry => (
            entry ? (
              <Entry
                key={entry.id}
                rank={data.allPublishers.indexOf(entry)}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...entry}
              />
            ) : ''
          )))
          : <p>No publishers to show.</p>)}
    </OuterDiv>
  )
}

export default PublishersListApp
