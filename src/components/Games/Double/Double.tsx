import { useState } from 'react';
import { Table } from './components/Table/Table';

import './double.scss';

interface DoubleProps {
  name: string;
  money: number;
  isLogged: boolean;
}

export function Double({ name, money, isLogged }: DoubleProps) {
  const [selectButton, setSelectButton] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [value, setValue] = useState(0);

  function handleColor(buttonID: number, color: string) {
    setSelectButton(buttonID);
    setSelectedColor(color);
    if (selectedColor && value) {
      return 0;
    }
  }

  function handleGame() {
    if (!isLogged) {
      alert('Para jogar você precisa estar cadastrado');
    } else {
      alert('Jogo em manutenção');
    }
  }

  return (
    <>
      <h3>
        Usuário: {name} , Saldo: R$ {money.toFixed(2).replace('.', ',')}
      </h3>
      <section id="double">
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
      </section>

      <section className="tables">
        <Table filter="vermelho" multiplier={2} />
        <Table filter="branco" multiplier={12} />
        <Table filter="preto" multiplier={4} />
      </section>
    </>
  );
}
