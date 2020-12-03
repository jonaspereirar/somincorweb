import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Badge, NoticeList, Scroll, Notice } from './styles';

export default function Notices() {
  const [visible, setVisible] = useState(false);
  const [notices, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notices.find((notice) => notice.read === false),
    [notices]
  );

  useEffect(() => {
    async function loadNotifications() {
      await api.get('notices').then((response) => {
        const noticeFormatted = response.data.map((notice) => {
          return {
            ...notice,
            timeDistance: formatDistance(
              parseISO(notice.createdAt),
              new Date(),
              {
                addSuffix: true,
                locale: pt,
              }
            ),
          };
        });
        setNotifications(noticeFormatted);
      });
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notices/${id}`);

    setNotifications(
      notices.map((notice) =>
        notice.id === id ? { ...notice, read: true } : notice
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={25} />
      </Badge>

      <NoticeList visible={visible}>
        <Scroll>
          {notices.map((notice) => (
            <Notice key={notice.id} unread={!notice.read}>
              <p>{notice.content}</p>
              <time>{notice.timeDistance}</time>
              {!notice.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notice.id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notice>
          ))}
        </Scroll>
      </NoticeList>
    </Container>
  );
}
