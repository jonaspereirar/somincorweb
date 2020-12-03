import React from 'react';
import { FiClock } from 'react-icons/fi';

import {
  Container,
  Content,
  Schedule,
  NextOrden,
  Section,
  Orden,
  Calendar,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextOrden>
            <strong>Pedido a seguir</strong>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                alt="Jonas Rodrigues"
              />
              <strong>Jonas Rodrigues</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextOrden>
          <Section>
            <strong>Pedidos agendados</strong>
            <Orden>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                  alt="Jonas Rodrigues"
                />
                <strong>Jonas Rodrigues</strong>
              </div>
            </Orden>
            <Orden>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                  alt="Jonas Rodrigues"
                />
                <strong>Jonas Rodrigues</strong>
              </div>
            </Orden>
            <Orden>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                  alt="Jonas Rodrigues"
                />
                <strong>Jonas Rodrigues</strong>
              </div>
            </Orden>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
}
