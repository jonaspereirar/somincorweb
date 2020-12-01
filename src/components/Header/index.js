import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/headerLogo.png';
import foto from '~/assets/FotoMinera.png';

import { Container, Profile, Content } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="SomincorApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar !== null ? (
                  profile.avatar.url
                ) : (
                  <img src={foto} alt="SomincorApp" />
                )
              }
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
