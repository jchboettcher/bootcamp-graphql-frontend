/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  FancyButton, InputDiv, RowDiv, RedP,
} from '../../../styles'
import { FormInput } from '../../components/FormInput'
import { emptyForm } from './Constants'

const AddEntry = ({ form, setForm, addPublisher }) => {
  const [clicked, setClicked] = useState(false)

  const companyEmpty = () => (form.Company === '')
  const addressPartial = () => (
    (form.Street === '' || form.City === '' || form.State === '' || form.Zip === '')
    && (form.Street !== '' || form.City !== '' || form.State !== '' || form.Zip !== '')
  )
  const booksNotNum = () => (form['Number of Books Published'] !== '' && isNaN(parseInt(form['Number of Books Published'], 10)))
  const submitForm = () => {
    setClicked(true)
    if (companyEmpty() || addressPartial() || booksNotNum()) {
      return false
    }
    addPublisher()
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
          <FormInput label="Company" form={form} setForm={setForm} />
          <FormInput label="Phone Number" form={form} setForm={setForm} />
          <FormInput label="Number of Books Published" form={form} setForm={setForm} />
        </InputDiv>
        <InputDiv>
          <FormInput label="Street" form={form} setForm={setForm} />
          <FormInput label="City" form={form} setForm={setForm} />
          <FormInput label="State" form={form} setForm={setForm} />
          <FormInput label="Zip" form={form} setForm={setForm} />
        </InputDiv>
        <RowDiv>
          <FancyButton type="submit" onClick={submitForm}>Submit</FancyButton>
          <FancyButton type="reset" onClick={resetForm}>Reset</FancyButton>
        </RowDiv>
      </RowDiv>
      {clicked && companyEmpty() && <RedP>Company field is required.</RedP>}
      {clicked && booksNotNum() && <RedP>Number of books must be a number.</RedP>}
      {clicked && addressPartial() && <RedP>Address cannot be only partially filled.</RedP>}
    </>
  )
}

export default AddEntry
