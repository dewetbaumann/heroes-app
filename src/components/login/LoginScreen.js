import React from 'react';

export const LoginScreen = () => {
  const handleLogin = () => {
    
  }

  return (
    <div className="container mt-5 center-container">
      <h1 className="login-h1">Heroes de Marvel y DC</h1>
      <button
        className="btn btn-primary login-btn"
        onClick={ handleLogin }
      >
        Ingresar
      </button>
    </div>
  )
}
