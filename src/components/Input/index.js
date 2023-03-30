import React from 'react'
import { InputConteiner } from './styles.js';

function Input({value, onChange}) {
  return (
    <InputConteiner>
     <input value={value} onChange={onChange} />
    </InputConteiner>
  )
}

export default Input