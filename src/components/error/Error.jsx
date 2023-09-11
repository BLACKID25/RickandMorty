import React from 'react';

function Error() {
  const errorStyles = {
    textAlign: 'center',
    padding: '20px',
    fontSize: '24px',
    color: 'red',
  };

  return (
    <div style={errorStyles}>
      <h1>Error 404</h1>
      <p>La página que estás buscando no existe.</p>
      <p>PAGE NO FOUNT.</p>
    </div>
  );
}

export default Error;