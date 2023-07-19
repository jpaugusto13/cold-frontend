import React, { useState, ChangeEventHandler } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { Table } from './components/Table/Table';
import api from '../../../../services/api';
import './double.scss';

export function Double() {
  const { user, isLoggedIn } = useAuth();
  const { email, firstName } = user;

  const [bet, setBet] = useState(0);
  const [color, setColor] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBet(Number(e.target.value));
  };

  const handleColor = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: string
  ) => {
    const btns = document.querySelectorAll('.btnDouble');
    btns.forEach((btn) => btn.classList.remove('active'));

    const button = e.target as HTMLButtonElement;
    button.classList.toggle('active');
    setColor(color);
  };

  const handleClick = async () => {
    if (isLoggedIn) {
      if (bet >= 1) {
        if (color) {
          await api
            .put('/gameDouble/play', { email: email, bet: bet })
            .then(({ data, status }) => {
              if (status == 200) {
                const { money } = data;

                const handleBet = async (bet: number) => {
                  await api
                    .post('/gameDouble/bet', {
                      bet: bet,
                      color: color,
                      name: firstName,
                    })
                };

                handleBet(money);
              } else if (status == 400) {
                alert('Você não tem saldo suficiente!');
              }
            });
        } else {
          alert('Selecione uma cor');
        }
      } else {
        alert('Você precisa apostar um valor maior ou igual a R$ 01,00');
      }
    } else {
      alert('Você precisa estar logado!');
    }
  };

  return (
    <div id="double">
      <section className="dashboard">
        <aside>
          <form>
            <div className="field-input">
              <input
                onChange={handleChange}
                type="number"
                id="value-field"
                placeholder="Quantia"
              />
              <div className="emblem">
                <p>R$</p>
              </div>
            </div>
            <div>
              <div className="label-btn">
                <label htmlFor="btn">Selecione a cor</label>
              </div>
              <div className="btn">
                <button
                  className="red btnDouble"
                  onClick={(e) => {
                    handleColor(e, 'red');
                  }}
                  type="button"
                >
                  x2
                </button>
                <button
                  className="white btnDouble"
                  onClick={(e) => {
                    handleColor(e, 'white');
                  }}
                  type="button"
                >
                  x12
                </button>
                <button
                  className="black btnDouble"
                  onClick={(e) => {
                    handleColor(e, 'black');
                  }}
                  type="button"
                >
                  x2
                </button>
              </div>
            </div>

            <div className="btn-dashboard">
              <button onClick={handleClick} className="red" type="button">
                Começar o jogo
              </button>
            </div>
          </form>
        </aside>
        <canvas></canvas>
      </section>

      <section className="tables">
        <Table filter="red" multiplier={2} />
        <Table filter="white" multiplier={12} />
        <Table filter="black" multiplier={2} />
      </section>
    </div>
  );
}
