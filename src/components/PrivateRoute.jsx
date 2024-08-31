import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PropTypes from 'prop-types';


function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  // Se o usuário não está autenticado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Se o usuário está autenticado, renderiza o componente filho
  return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default PrivateRoute;
