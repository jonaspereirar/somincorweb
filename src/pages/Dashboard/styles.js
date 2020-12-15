import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.main`
  display: flex;
  max-width: 120pc;
  min-width: 80pc;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 100px;
  margin-left: 50px;

  h1 {
    font-size: 36px;
    color: #333;
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
      background: #fff;
      margin: 0 8px;
    }
  }
`;

export const NextOrder = styled.aside`
  margin: 64px auto;
  display: flex;
  margin-top: 64px;

  table {
  //border-collapse: collapse;
  margin-top: 35px;
  margin-left: 90px;
  position: absolute;
  span {
      margin-left: 60px;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: #00ff22;
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }
    }
    thead {
    border-collapse: collapse;
    border: 1px solid #00ff22;

    }
  }


  strong {
    color: #333;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    background: #333;
    display: flex;

    padding: 16px 54px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 5px;
      left: 0;
      top: 10%;
      background: #00ff22;
    }

    img {
      margin-left: 1px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 1px;
      color: #fff;
    }

    span {
      margin-left: 130px;
      display: flex;
      align-items: center;
      color: #fff;

    svg {
      color: #00ff22;
      margin-right: 10px;
    }

  }
`;

export const Section = styled.div`
  margin-top: 300px;
  table {
    //border-collapse: collapse;
    margin-top: 0.1px;
    margin-left: 250px;
    position: absolute;
    span {
      margin-left: 60px;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: #00ff22;
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }
    }

    thead {
      border-collapse: collapse;
      border: 1px solid orange;
    }
  }
  > strong {
    color: #333;
    font-size: 20px;
    line-height: 30px;
    border-bottom: 1px solid #fff;
    display: block;
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
  > p {
    color: #333;
  }
`;

export const Order = styled.div`
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
    color: #333;
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

export const Calender = styled.aside`
  width: 380px;
  position: absolute;
  margin-left: 930px;
  margin-top: 16px;
  display: flex;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
