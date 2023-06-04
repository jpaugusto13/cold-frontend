import { Table } from './components/Table/Table';

import './double.scss';
import { useAuth } from '../../../../hooks/useAuth';

export function Double() {
  const { isLoggedIn } = useAuth();


  function handleGame() {
    if (!isLoggedIn) {
      alert('Para jogar você precisa estar cadastrado');
    } else {
      alert('Jogo em manutenção');
    }
  }

  return (
    <div id='double'>
      <section className="dashboard">
        <aside>
          <form>
            <div>
              <input
                type="number"
                id="value-field"
                placeholder="Quantia"
              />
            </div>
            <div>
              <label>Selecione a cor</label>
              <div className="btn">
                <button className="red" type="button">
                  x2
                </button>
                <button className="white" type="button">
                  x12
                </button>
                <button className="black" type="button">
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
    </div>
  );
}
