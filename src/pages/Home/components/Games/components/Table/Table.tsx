import { useEffect, useState } from 'react';
import api from '../../../../../../services/api';
import { NumberCounter } from '../NumberContent/NumberContent';

interface TableProps {
  filter: string;
  multiplier: number;
}
type userProps = {
  name: string;
  bet: number;
};
export function Table({ filter, multiplier }: TableProps) {
  const [users, setUsers] = useState<userProps[]>([]);

  useEffect(() => {
    const getBets = async () => {
      await api
        .get('/gameDouble/getBet', {
          params: {
            filter: filter,
          },
        })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setUsers(res.data);
          }
        });
    };
    getBets();
  });

  const amount = users.reduce((acumulador, { bet }) => acumulador + bet, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <h1>Vitória {multiplier}x</h1>
            </td>
            <th>
              <img alt="icon" src={`/svg/games/double/${filter}Card.svg`} />
            </th>
          </tr>
          <tr>
            <td>
              <p>Total de apostas</p>
            </td>
            <td>
              <h1>
                R$
                {<NumberCounter start={0} end={amount} duration={2000} />}
              </h1>
            </td>
          </tr>
          <tr className="users">
            <td>Usuário</td>
            <td>Quantia</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, bet }: userProps) => (
            <tr key={name + bet}>
              <td>{name}</td>
              <td>
                R$ {bet != undefined ? bet.toFixed(2).replace('.', ',') : 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
