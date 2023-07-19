import { useEffect, useState } from 'react';
import api from '../../../../../../services/api';
import { NumberCounter } from '../NumberContent/NumberContent';

interface TableProps {
  filter: string;
  multiplier: number;
}

type UserProps = {
  name: string;
  bet: number;
};

export function Table({ filter, multiplier }: TableProps) {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const getBets = async () => {
      try {
        const response = await api.get('/gameDouble/getBet', {
          params: {
            filter: filter,
          },
        });

        if (Array.isArray(response.data)) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Erro ao obter as apostas:', error);
      }
    };

    getBets();
    const interval = setInterval(getBets, 100);
    return () => {
      clearInterval(interval);
    };
  }, [filter]);

  const amount = users.reduce(
    (accumulator, { bet }) => accumulator + (bet || 0),
    0
  );

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
                R$ <NumberCounter start={0} end={amount} duration={2000} />
              </h1>
            </td>
          </tr>
          <tr className="users">
            <td>Usuário</td>
            <td>Quantia</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, bet }: UserProps) => (
            <tr key={name + (bet ?? 0)}>
              <td>{name}</td>
              <td>
                R$ {bet !== undefined ? bet.toFixed(2).replace('.', ',') : '0'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
