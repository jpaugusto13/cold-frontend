interface TableProps {
  filter: string;
  multiplier: number;
}

export function Table({ filter, multiplier }: TableProps) {
  const amount = Number(0);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td><h1>Vitória {multiplier}x</h1></td>
            <th>
              <img alt="icon" src={`/svg/games/double/${filter}Card.svg`} />
            </th>
          </tr>
          <tr>
            <td>Total de apostas</td>
            <td><h1>R$ {amount.toFixed(2).replace('.', ',')}</h1></td>
          </tr>
          <tr>
            <td>Usuário</td>
            <td>Quantia</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
