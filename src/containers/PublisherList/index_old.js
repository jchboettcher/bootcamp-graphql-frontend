import React from 'react'
import { Link } from 'react-router-dom'
import { GoBackLink } from '../../styles'

const PublisherList = () => {
  const link = 'Penguin Group'
  return (
    <>
      <div>
        publisher listfd
      </div>
      <Link to={`/publishers/${link}`}>Link</Link>
      <GoBackLink to="/">Back</GoBackLink>
    </>
  )
}

export default PublisherList
