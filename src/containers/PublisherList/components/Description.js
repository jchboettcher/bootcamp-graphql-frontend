/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React from 'react'
// import { deleteItem } from './list-controller'
// import {
//   EntryLink, OddEntryDiv, EvenEntryDiv, TopEntryDiv,
// } from '../../../styles'

export const Description = ({
  company, phoneNumber, numBooksPublished, address,
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
      <h3>{company}</h3>
      <p>
        {`Number of Books Published: ${numBooksPublished}`}
      </p>
      <div>
        <p>Contact info:</p>
        <p style={{ marginLeft: '20px' }}>
          {`Phone Number: ${phoneNumber || 'unknown'}`}
        </p>
        <p style={{ marginLeft: '19px' }}>
          {`Address: ${getAddressString()}`}
        </p>
      </div>
    </>
  )
}
