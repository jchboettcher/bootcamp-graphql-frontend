/* eslint-disable react/prop-types */
import React from 'react'
import { StyledInput } from '../../styles'

export const FormInput = ({
  label, form, setForm,
}) => (
  <>
    <p>{label}</p>
    <StyledInput
      value={form[label]}
      onChange={e => setForm({ [label]: e.target.value })}
    />
  </>
)

export const formReducer = (prevState, payload) => ({ ...prevState, ...payload })
