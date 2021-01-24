import React from 'react'
import { Link } from 'react-router-dom'

const AuthorList = () => {
  const link = 'Willard Smith'
  return (
    <>
      <div>
        author list
      </div>
      <Link to={`/authors/${link}`}>Link</Link>
      <Link to="/">Back</Link>
    </>
  )
}

export default AuthorList
