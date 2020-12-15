import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notices from '~/components/Notices';

import logo from '~/assets/LogoSignIn2.svg';
// import logo from '~/assets/headerLogo.png';

import { Container, Profile, Content } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="SomincorApp" />
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
                src={
                  profile.avatar !== null
                    ? profile.avatar.url
                    : 'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png'
                }
                alt="profile"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
