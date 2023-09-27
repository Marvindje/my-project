import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';

function Auth({ onAuthSuccess, isLogin }) {
  const { onChangeUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Les identifiants sont incomplets.");
      return;
    }

    const endpoint = isLogin ? "/auth/login" : "/auth/register";
    const payload = { email, password };

    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`, payload, {
        withCredentials: true,
      });

      onChangeUser(response.data);
      onAuthSuccess();
    } catch (error) {
      setErrorMessage("Les identifiants sont incorrects.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{isLogin ? "Login" : "Register"}</button>
    </form>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
};

export default Auth;
