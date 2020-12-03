import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notices from '~/components/Notices';

import logo from '~/assets/headerLogo.png';
import foto from '~/assets/perfil.png';

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
          <Notices />

          <Profile>
            <div>
              <Link to="/profile">
                <strong>{profile.name}</strong>
              </Link>
            </div>
            <Link to="/profile">
              <img
                src={profile.avatar.url || <img src={foto} alt="SomincorApp" />}
                alt="profile"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
