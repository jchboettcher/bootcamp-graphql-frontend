/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React from 'react'
// import { deleteItem } from './list-controller'
// import {
//   EntryLink, OddEntryDiv, EvenEntryDiv, TopEntryDiv,
// } from '../../../styles'

export const Description = ({
  title, language, numPages, datePublished, bestseller, publisher, author,
}) => (
  <>
    <h3>{title}</h3>
    <div>
      <p>
        {`Language: ${language}`}
      </p>
      <p>
        {`Number of Pages: ${numPages === null ? 'unknown' : numPages}`}
      </p>
      <p>
        {`Date Published: ${datePublished === null ? 'unknown' : datePublished}`}
      </p>
    </div>
    <div>
      {author && <p>{`Author: ${author.firstName} ${author.lastName}`}</p>}
      {publisher && <p>{`Publisher: ${publisher.company}`}</p>}
      {bestseller && <p style={{ color: 'darkgreen' }}>**Bestseller!**</p>}
    </div>
  </>
)
