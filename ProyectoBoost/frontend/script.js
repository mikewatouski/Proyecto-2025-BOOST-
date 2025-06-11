fetch('http://localhost:3001/api/mensaje')
  .then(res => res.json())
  .then(data => {
    document.getElementById('mensaje').textContent = data.texto;
  })
  .catch(err => {
    document.getElementById('mensaje').textContent = 'Error al conectar al backend';
    console.error(err);
  });
