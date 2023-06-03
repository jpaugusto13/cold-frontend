import { useState } from 'react';
import { Table } from './components/Table/Table';

import './double.scss';
import { useAuth } from '../../../../hooks/useAuth';

export function Double() {
  const { user, isLoggedIn } = useAuth();
  const [selectButton, setSelectButton] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [value, setValue] = useState(0);

  const { name, money } = user;
  function handleColor(buttonID: number, color: string) {
    setSelectButton(buttonID);
    setSelectedColor(color);
    console.log(user.money)
    if (selectedColor && value) {
      return 0;
    }
  }

  function handleGame() {
    if (!isLoggedIn) {
      alert('Para jogar você precisa estar cadastrado');
    } else {
      alert('Jogo em manutenção');
    }
  }

  return (
    <section id="double">
      <h3>
        Usuário: {name} , Saldo: R$ {Number(money).toFixed(2).replace('.', ',')}
      </h3>
      <div className="dashboard">
        <aside>
          <form>
            <div>
              <input
                type="number"
                id="value-field"
                onChange={(e) => setValue(parseInt(e.target.value))}
                placeholder="Quantia"
              />
            </div>
            <div>
              <label>Selecione a cor</label>
              <div>
                <button
                  className={`btn-select${selectButton === 1 ? ' select' : ''}`}
                  onClick={() => handleColor(1, 'vermelho')}
                  type="button"
                >
                  x2
                </button>
                <button
                  className={`btn-select${selectButton === 2 ? ' select' : ''}`}
                  onClick={() => handleColor(2, 'branco')}
                  type="button"
                >
                  x12
                </button>
                <button
                  className={`btn-select${selectButton === 3 ? ' select' : ''}`}
                  onClick={() => handleColor(3, 'preto')}
                  type="button"
                >
                  x4
                </button>
              </div>
            </div>

            <div>
              <button onClick={handleGame} type="button">
                Começar o jogo
              </button>
            </div>
          </form>
        </aside>
        <canvas></canvas>
      </div>

      <section className="tables">
        <Table filter="vermelho" multiplier={2} />
        <Table filter="branco" multiplier={12} />
        <Table filter="preto" multiplier={4} />
      </section>
    </section>
  );
}
