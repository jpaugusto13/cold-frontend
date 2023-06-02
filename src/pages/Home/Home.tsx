import { Link } from 'react-router-dom';
import { Double } from '../../components/Games/Double/Double';
import { useState, useEffect } from 'react';

import api from '../../services/api';

export function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState('Não logado');
  const [money, setMoney] = useState(0);

  const key = 'token@COLD';

  useEffect(() => {
    const changeName = async () => {
      const token = localStorage.getItem(key);
      if (token) {
        try {
          api
            .get('/user', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(({ data }) => {
              setName(data.name);
              setMoney(data.money);
              setIsLogged(true);
            });
        } catch (e) {
          console.log(e);
        }
      }
    };

    changeName();
  }, []);

  function handleLogoff() {
    localStorage.removeItem(key);
    setIsLogged(false);
    setName('Não logado');
    setMoney(0);
  }

  return (
    <>
      {!isLogged ? (
        <div>
          <p>
            <Link to="/entrar">entrar</Link> /{' '}
            <Link to="/cadastro">cadastro</Link>
          </p>
        </div>
      ) : (
        <button onClick={handleLogoff}>sair</button>
      )}
      <title>Double | Cold</title>
      <h1>Double</h1>
      <main>
        <Double name={name} money={money} isLogged={isLogged} />
      </main>
    </>
  );
}
