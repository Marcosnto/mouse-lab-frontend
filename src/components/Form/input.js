import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <>
      {error && <div class="alert alert-danger" value={defaultValue} role="alert">
        {error}
      </div>}
      <input ref={inputRef} {...rest} />
    </>
  )
}