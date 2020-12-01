import React from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/LogoSignIn.svg';

const schema = Yup.object().shape({
  number: Yup.string().required('É necessário seu número'),
  password: Yup.string().required('É necessário sua senha'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="SomincorApp" />

      <Form schema={schema} onSubmit>
        <h1>Faça seu login</h1>
        <Input name="number" type="number" placeholder="Digite seu nº" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">
          <FiLogIn />
          Criar conta
        </Link>
        <Link to="/forgot">
          <FiMail />
          Recuperar senha
        </Link>
      </Form>
    </>
  );
}
