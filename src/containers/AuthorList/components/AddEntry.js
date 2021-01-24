/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  FancyButton, InputDiv, RowDiv, RedP,
} from '../../../styles'
import { FormInput } from '../../components/FormInput'
import { emptyForm } from './Constants'

const AddEntry = ({ form, setForm, addAuthor }) => {
  const [clicked, setClicked] = useState(false)

  const firstNameEmpty = () => (form['First Name'] === '')
  const lastNameEmpty = () => (form['Last Name'] === '')
  const addressPartial = () => (
    (form.Street === '' || form.City === '' || form.State === '' || form.Zip === '')
    && (form.Street !== '' || form.City !== '' || form.State !== '' || form.Zip !== '')
  )
  const ageNotNum = () => (form.Age !== '' && isNaN(parseInt(form.Age, 10)))
  const booksNotNum = () => (form['Number of Books Published'] !== '' && isNaN(parseInt(form['Number of Books Published'], 10)))
  const submitForm = () => {
    setClicked(true)
    if (firstNameEmpty() || lastNameEmpty() || addressPartial() || ageNotNum() || booksNotNum()) {
      return false
    }
    addAuthor()
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
          <FormInput label="First Name" form={form} setForm={setForm} />
          <FormInput label="Last Name" form={form} setForm={setForm} />
          <FormInput label="Age" form={form} setForm={setForm} />
          <FormInput label="Email" form={form} setForm={setForm} />
          <FormInput label="Number of Books Published" form={form} setForm={setForm} />
        </InputDiv>
        <InputDiv>
          <FormInput label="Street" form={form} setForm={setForm} />
          <FormInput label="City" form={form} setForm={setForm} />
          <FormInput label="State" form={form} setForm={setForm} />
          <FormInput label="Zip" form={form} setForm={setForm} />
        </InputDiv>
        <RowDiv>
          <FancyButton type="submit" onClick={submitForm}>Add Author</FancyButton>
          <FancyButton type="reset" onClick={resetForm}>Reset Form</FancyButton>
        </RowDiv>
      </RowDiv>
      {clicked && firstNameEmpty() && <RedP>First name field is required.</RedP>}
      {clicked && lastNameEmpty() && <RedP>Last name field is required.</RedP>}
      {clicked && ageNotNum() && <RedP>Age must be a number.</RedP>}
      {clicked && booksNotNum() && <RedP>Number of books must be a number.</RedP>}
      {clicked && addressPartial() && <RedP>Address cannot be only partially filled.</RedP>}
    </>
  )
}

export default AddEntry
