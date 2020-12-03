import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1120pc;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 100px;
  margin-left: 50px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #333;
    display: flex;
    align-items: center;
    font-weight: 600;

    span {
      display: flex;
      align-items: center;
      text-transform: capitalize;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #333;
      margin: 0 8px;
    }
  }
`;

export const NextOrden = styled.aside`
  margin-top: 64px;

  strong {
    color: #333;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    background: #fde2b3;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 3px;
      left: 0;
      top: 10%;
      background: #00ff22;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #333;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #333;

    svg {
      color: #00ff22;
      margin-right: 8px;
    }
  }
`;

export const Section = styled.div`
  margin-top: 48px;
  > strong {
    color: #333;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: #333;
  }
`;

export const Orden = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: 70px;
    color: #f4ede8;
    svg {
      color: #333;
      margin-right: 8px;
    }
  }
  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
    strong {
      margin-left: 24px;
      font-size: 20px;
      color: #fff;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
