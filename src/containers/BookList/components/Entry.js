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
  rank, link, title, language, numPages, datePublished, bestseller, publisher, author,
}) => {
  const data = {
    title, language, numPages, datePublished, bestseller, publisher, author,
  }
  return (
    <>
      {rank
        ? (
          rank % 2 ? (
            <OddEntryDiv>
              <Description {...data} />
              <EntryLink to={link}>Details</EntryLink>
            </OddEntryDiv>
          )
            : (
              <EvenEntryDiv>
                <Description {...data} />
                <EntryLink to={link}>Details</EntryLink>
              </EvenEntryDiv>
            )
        )
        : (
          <TopEntryDiv>
            <Description {...data} />
            <EntryLink to={link}>Details</EntryLink>
          </TopEntryDiv>
        )}
    </>
  )
}

export default Entry
