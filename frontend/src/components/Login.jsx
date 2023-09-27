import React from 'react';
import PropTypes from 'prop-types';
import Auth from './Auth';
import '../App.css';  // Assurez-vous d'avoir un fichier Login.css avec les styles appropriés

function Login({ onAuthSuccess }) {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1 className="loginHeader">Connexion</h1>
        <Auth onAuthSuccess={onAuthSuccess} isLogin={true} />
      </div>
    </div>
  );
}

Login.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
};

export default Login;
