import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <span>
        <Link to="/dashboard">
          <AiOutlineArrowLeft />
          DASHBOARD
        </Link>
      </span>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="number" placeholder="Número de funcionário" />
        <Input name="email" placeholder="Seu endereço de E-mail" />
        <Input
          name="direction_id"
          placeholder="Sua Direção, Ex.: Produção ou Manutenção"
        />
        <Input
          name="area_id"
          placeholder="Sua Área, Ex.: Elétrica ou BackFill"
        />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua password actual"
        />
        <Input type="password" name="Password" placeholder="Nova password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Corfirmar password"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
