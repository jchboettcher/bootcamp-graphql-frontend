/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React from 'react'
// import { deleteItem } from './list-controller'
// import {
//   EntryLink, OddEntryDiv, EvenEntryDiv, TopEntryDiv,
// } from '../../../styles'

export const Description = ({
  firstName, lastName, age, email, numBooksPublished, address,
}) => {
  const getAddressString = () => {
    if (address) {
      const {
        street, city, state, zip,
      } = address
      return `${street}, ${city}, ${state} ${zip}`
    }
    return 'unknown'
  }
  return (
    <>
      <h3>{`${firstName} ${lastName}`}</h3>
      <p>
        {`Age: ${age === null ? 'unknown' : age}`}
      </p>
      <p>
        {`Number of Books Published: ${numBooksPublished}`}
      </p>
      <div>
        <p>Contact info:</p>
        <p style={{ marginLeft: '20px' }}>
          {`Email: ${email || 'unknown'}`}
        </p>
        <p style={{ marginLeft: '19px' }}>
          {` Address: ${getAddressString()}`}
        </p>
      </div>
    </>
  )
}
