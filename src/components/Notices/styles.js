import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  margin-right: 150px;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff0000;
        border-radius: 50%;
      }
    `}
`;

export const NoticeList = styled.div`
  position: absolute;
  width: 260px;
  z-index: 1;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notice = styled.div`
  color: #fff;
  & + div {
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
    margin-bottom: 5px;
    margin-top: 2px;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(1, '#7159c1')};
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff0000;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
