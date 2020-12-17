import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { isToday, format, parseISO, isAfter } from 'date-fns';

import { pt } from 'date-fns/locale';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiClock } from 'react-icons/fi';
import { AiOutlineCamera } from 'react-icons/ai';

import api from '~/services/api';

import {
  Container,
  Content,
  Schedule,
  NextOrder,
  Section,
  Order,
  Calender,
} from './styles';

export default function Dashboard() {
  const user = useSelector((state) => state.user.profile);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [orders, setOrders] = useState([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        return response.data;
      });
  }, [currentMonth, user.id]);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get('orders/me', {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      });
      console.tron.log(response.data);
      const data = response.data.orders.map((order) => {
        return {
          ...order,
          hourFormatted: format(parseISO(order.date), 'HH:mm'),
        };
      });

      setOrders(data);
    }
    loadOrder();
  }, [selectedDate]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: pt,
    });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', {
      locale: pt,
    });
  }, [selectedDate]);

  const morningOrders = useMemo(() => {
    return orders.filter((order) => {
      return parseISO(order.date).getHours() < 12;
    });
  }, [orders]);

  const afternoonOrders = useMemo(() => {
    return orders.filter((order) => {
      return parseISO(order.date).getHours() >= 12;
    });
  }, [orders]);

  const nextOrder = useMemo(() => {
    return orders.find((order) => isAfter(parseISO(order.date), new Date()));
  }, [orders]);

  return (
    <Container>
      <Content>
        <Calender>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calender>
        <Schedule>
          <h1>Pedidos agendados</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          <strong>Próximo Pedido</strong>
          {isToday(selectedDate) && nextOrder && (
            <NextOrder>
              <div>
                <img
                  src={nextOrder.user.avatar.url}
                  alt={nextOrder.user.name}
                />
                <strong>{nextOrder.user.name}</strong>
                <span>
                  <AiOutlineCamera />
                </span>
                <table>
                  <thead>
                    <tr>
                      <td>{nextOrder.title}</td>
                      <td />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Local:</td>
                      <td>{nextOrder.location.name}</td>
                    </tr>
                    <tr>
                      <td>Frente:</td>
                      <td>{nextOrder.front}</td>
                    </tr>
                  </tbody>
                </table>
                <span>
                  <FiClock />
                  {nextOrder.hourFormatted}
                </span>
              </div>
            </NextOrder>
          )}

          <Section>
            <strong>Turno Manhã</strong>

            {morningOrders.map((order) => (
              <Order key={order.id}>
                <span>
                  <FiClock />
                  {order.hourFormatted}
                </span>
                <div>
                  <img src={order.user.avatar.url} alt={order.user.name} />
                  <strong>
                    {order.user.name}
                    <td>Nº {order.user.number}</td>
                  </strong>

                  <table>
                    <thead>
                      <tr>
                        <td>{order.title}</td>
                        <span>
                          <AiOutlineCamera />
                        </span>
                        <p />
                        <td>Descrição: </td>
                        <p />
                        <p />
                        <p />
                        <li>{order.description}</li>
                        <td />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Local:</td>
                        <td>{order.location.name}</td>
                      </tr>
                      <tr>
                        <td>Frente:</td>
                        <td>{order.front}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Order>
            ))}
          </Section>

          <Section>
            <strong>Turno Tarde</strong>

            {afternoonOrders.map((order) => (
              <Order key={order.id}>
                <span>
                  <FiClock />
                  {order.hourFormatted}
                </span>
                <div>
                  <img src={order.user.avatar.url} alt={order.user.name} />
                  <strong>
                    {order.user.name}
                    <td>Nº {order.user.number}</td>
                  </strong>

                  <table>
                    <thead>
                      <tr>
                        <td>Verificar cabo danificado</td>
                        <span>
                          <AiOutlineCamera />
                        </span>
                        <p />
                        <td>Descrição: </td>
                        <p />
                        <p />
                        <p />
                        <li>{order.description}</li>
                        <td />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Local:</td>
                        <td>{order.location.name}</td>
                      </tr>
                      <tr>
                        <td>Frente:</td>
                        <td>{order.front}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Order>
            ))}
          </Section>
        </Schedule>
      </Content>
    </Container>
  );
}
