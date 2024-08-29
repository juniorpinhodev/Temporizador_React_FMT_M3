import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Criando o contexto
export const AuthContext = createContext();

// Provider do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função de login
  const login = (email, password) => {
    // Simulação de uma requisição de login
    const token = '123456'; // Simulando um token

    // Salvar o token e os dados do usuário no estado
    setUser({ email, token }); // Usando apenas o email e token, o password não é necessário agora
    localStorage.setItem('user', JSON.stringify({ email, token }));
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Verificar se o usuário já está logado ao carregar o app
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};