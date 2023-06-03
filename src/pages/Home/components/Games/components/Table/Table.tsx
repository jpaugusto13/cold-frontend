interface TableProps {
  filter: string;
  multiplier: number;
}

export function Table({ filter, multiplier }: TableProps) {
  const amount = Number(0);
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <td>Vitória {multiplier}x</td>
            <th>
              <img alt="icon" src={`/svg/games/double/${filter}Card.svg`} />
            </th>
          </tr>
          <tr>
            <td>Total de apostas</td>
            <td>R$ {amount.toFixed(2).replace('.', ',')}</td>
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
