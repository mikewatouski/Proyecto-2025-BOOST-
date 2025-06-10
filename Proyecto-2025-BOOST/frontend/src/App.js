import React, { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Simulación de mensaje para testeo en Vercel
    setMensaje("¡Hola desde Boost en Vercel!");
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{mensaje}</h1>
      <p>Esto es el frontend funcionando correctamente.</p>
    </div>
  );
}

export default App;
