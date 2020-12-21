import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

// import signInBackground from '../../../assets/miners.jpg';

import miners from '../../../assets/miners.jpg';
import miners2 from '../../../assets/miners2.jpg';
import dashboardWall from '../../../assets/dashboardWall.jpg';
import Insdustrial from '../../../assets/Insdustrial.jpg';
import palha from '../../../assets/palha.jpg';
import fundoMine from '../../../assets/fundoMine.jpg';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 3s;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 10px;
      height: 44px;
      padding: 16px;
      color: #f4ede8;
      margin: 0 0 10px;
      width: 100%;

      border: 2px solid #666360;

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }

      &::placeholder {
        color: #666360;
      }
    }
    span {
      color: #fff900;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      background: #fde2b3;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      margin-top: 16px;
      font-weight: 500;
      color: #312e38;
      transition: background-color 0.5s;

      &:hover {
        background: ${shade(0.2, '#fde2b3')};
      }
    }

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.8s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

const animate = keyframes`
  0%{
    background-image: url(${miners});
  }  20%{
    background-image: url(${dashboardWall});
  }  40%{
    background-image: url(${Insdustrial});
  }  60%{
    background-image: url(${miners2});
  }  80%{
    background-image: url(${palha});
  }  100%{
    background-image: url(${fundoMine});
  }

`;

export const Background = styled.div`
  flex: 1;
  animation: ${animate} 190s;

  background-size: cover;

  animation-direction: alternate-reverse;
  animation-duration: 190s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
`;
