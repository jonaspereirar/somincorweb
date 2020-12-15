import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 110px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid #eee;
      width: 100px;
      height: 100px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
    text-decoration: none
      margin-top: 8px;
      display: block;
      color: #333;
      font-size: 19px;
    }

    a {
      display: back;
      margin-top: 2px;
      font-size: 10px;
      color: #999;
    }
  }
  img {
    margin-top: 8px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;
