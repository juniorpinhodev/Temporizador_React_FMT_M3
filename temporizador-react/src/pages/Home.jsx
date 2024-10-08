import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Home() {
    const { user, logout } = useContext(AuthContext);

    return (
      <div>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Este é o conteúdo da página inicial.</p>

        {user ? (
        <div>
          <p>Usuário logado: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Você não está logado.</p>
      )}
      </div>
    );
  }
  
  export default Home;
  