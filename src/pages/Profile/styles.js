import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 350px;
  margin: 25px auto;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 20px;
    color: #7159;
    position: fixed;
    margin-left: 550px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: transparent;
      width: 100%;
      border: 0;
      border-radius: 10px;
      height: 56px;
      padding: 0 16px;
      color: #fff;
      margin: 0 0 10px;

      border: 2px solid #666360;

      svg {
        margin-right: 16px;
      }

      &::placeholder {
        color: #666360;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      background: rgba(255, 255, 255, 0.5);
      margin: 10px 0 20px;
      height: 1px;
      border: 0;
    }

    button {
      width: 100%;
      margin: 5px 0 0;
      height: 44px;
      background: #fde2b3;
      font-weight: bold;
      color: #666360;
      border: 0;
      border-radius: 10px;
      font-size: 16px;
      transition: background 0.2s ease;

      &:hover {
        background: ${shade(0.03, '#28ff00')};
      }
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #fde2b3;
    font-weight: bold;
    color: #666360;
    border: 0;
    border-radius: 10px;
    font-size: 16px;
    transition: background 0.2s ease;

    &:hover {
      background: ${shade(0.08, '#f64c75')};
    }
  }
`;
