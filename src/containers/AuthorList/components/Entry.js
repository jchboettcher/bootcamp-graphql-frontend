/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React from 'react'
// import { deleteItem } from './list-controller'
import {
  EntryLink, OddEntryDiv, EvenEntryDiv, TopEntryDiv,
} from '../../../styles'
import { Description } from './Description'

const Entry = ({
  rank, id, firstName, lastName, age, email, numBooksPublished, address,
}) => {
  const data = {
    firstName, lastName, age, email, numBooksPublished, address,
  }
  return (
    <>
      {rank
        ? (
          rank % 2 ? (
            <OddEntryDiv>
              <Description {...data} />
              <EntryLink to={`/authors/${id}`}>Details</EntryLink>
            </OddEntryDiv>
          )
            : (
              <EvenEntryDiv>
                <Description {...data} />
                <EntryLink to={`/authors/${id}`}>Details</EntryLink>
              </EvenEntryDiv>
            )
        )
        : (
          <TopEntryDiv>
            <Description {...data} />
            <EntryLink to={`/authors/${id}`}>Details</EntryLink>
          </TopEntryDiv>
        )}
    </>
  )
}

export default Entry
