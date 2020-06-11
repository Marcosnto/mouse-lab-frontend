import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup';

import './addNew.scss'

import api from '../../Services/api'
import Header from '../../Components/Header/header'
import MenuHead from '../../Components/Header/menuHead'
import Input from '../../Components/Form/input'

async function handleAddRepository(data) {
  const response = await api.post('repositories', {
    title: data.title,
    owner: data.owner,
    url: data.url,
    techs: data.techs
  });

  console.log(response);
}


export default function AddNew() {
  const formRef = useRef(null);

  async function submitForm(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título Obrigatório'),
        owner: Yup.string().required('Nome do criador é obrigatório'),
        url: Yup.string().url().required('A URL é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false, //with this the Yup will check all form 
      })

      formRef.current.setErrors({});

      reset();

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
      }
    }

    handleAddRepository(data)

  }

  return (
    <>
      <Header />
      <MenuHead />
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-12 mb40">
            <h1 className="text-center">Adicionar Repositório</h1>
          </div>
          <div className="col-6">
            <Form ref={formRef} onSubmit={submitForm} >
              <label className="mt15"><b>Título: </b></label>
              <Input name="title" type="text" className="form-control" />
              <label className="mt15"><b>Criador: </b></label>
              <Input name="owner" type="text" className="form-control" />
              <label className="mt15"><b>Url: </b></label>
              <Input name="url" type="url" className="form-control" />
              <label className="mt15"><b>Techs: </b></label>
              <Input name="techs" className="form-control" />
              <div className="col-12 text-center mt30">
                <button className="btn btn-success"type="submit">Adicionar</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}