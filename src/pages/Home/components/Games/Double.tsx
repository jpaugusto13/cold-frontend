import { Table } from './components/Table/Table';

import './double.scss';

export function Double() {
  return (
    <div id="double">
      <section className="dashboard">
        <aside>
          <form>
            <div className="field-input">
              <input type="number" id="value-field" placeholder="Quantia" />
              <div className="emblem">
                <p>R$</p>
              </div>
            </div>
            <div>
              <div className="label-btn">
                <label htmlFor="btn">Selecione a cor</label>
              </div>
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

            <div className="btn-dashboard">
              <button className="red" type="button">
                Apostar
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
