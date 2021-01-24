/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  FancyButton, InputDiv, RowDiv, RedP,
} from '../../../styles'
import { FormInput } from '../../components/FormInput'
import { emptyForm } from './Constants'

const AddEntry = ({
  form, setForm, addBook, type,
}) => {
  const [clicked, setClicked] = useState(false)

  const titleEmpty = () => (form.Title === '')
  const languageEmpty = () => (form.Language === '')
  const authorFirstNameEmpty = () => (form['Author First Name'] === '')
  const authorLastNameEmpty = () => (form['Author Last Name'] === '')
  const publisherEmpty = () => (form.Publisher === '')
  const numPagesNotNum = () => (form['Number of Pages'] !== '' && isNaN(parseInt(form['Number of Pages'], 10)))
  const bestsellerNotBool = () => (form.Bestseller !== '' && form.Bestseller !== 'no' && form.Bestseller !== 'yes')
  const submitForm = () => {
    setClicked(true)
    if (titleEmpty() || languageEmpty() || numPagesNotNum() || bestsellerNotBool()) {
      return false
    }
    if (type === 'publishers' && (authorFirstNameEmpty() || authorLastNameEmpty())) {
      return false
    }
    if (type === 'authors' && publisherEmpty()) {
      return false
    }
    addBook()
    return true
  }
  const resetForm = () => {
    setClicked(false)
    setForm(emptyForm)
  }
  return (
    <>
      <RowDiv>
        <InputDiv>
          <FormInput label="Title" form={form} setForm={setForm} />
          <FormInput label="Language" form={form} setForm={setForm} />
          <FormInput label="Number of Pages" form={form} setForm={setForm} />
          <FormInput label="Date Published" form={form} setForm={setForm} />
          <FormInput label="Bestseller" form={form} setForm={setForm} />
        </InputDiv>
        <InputDiv>
          {type === 'publishers' && <FormInput label="Author First Name" form={form} setForm={setForm} />}
          {type === 'publishers' && <FormInput label="Author Last Name" form={form} setForm={setForm} />}
          {type === 'authors' && <FormInput label="Publisher" form={form} setForm={setForm} />}
        </InputDiv>
        <RowDiv>
          <FancyButton type="submit" onClick={submitForm}>Add Book</FancyButton>
          <FancyButton type="reset" onClick={resetForm}>Reset Form</FancyButton>
        </RowDiv>
      </RowDiv>
      {clicked && titleEmpty() && <RedP>Title field is required.</RedP>}
      {clicked && languageEmpty() && <RedP>Language field is required.</RedP>}
      {clicked && numPagesNotNum() && <RedP>Number of pages must be a number.</RedP>}
      {clicked && bestsellerNotBool()
        && <RedP>Bestseller field must be a either &apos;yes&apos; or &apos;no&apos;.</RedP>}
      {clicked && type === 'publishers' && authorFirstNameEmpty() && <RedP>Author first name field is required.</RedP>}
      {clicked && type === 'publishers' && authorLastNameEmpty() && <RedP>Author last name field is required.</RedP>}
      {clicked && type === 'authors' && publisherEmpty() && <RedP>Publisher field is required.</RedP>}
    </>
  )
}

export default AddEntry
