import React from 'react';

const RutinaApp = () => {
  return (
    <div className="pagina">
      {/* Barra lateral */}
      <aside className="barra-lateral">
        <div className="iconos-superiores">
          {[...Array(5)].map((_, i) => (
            <button key={i} className="icono"></button>
          ))}
        </div>
        <div className="inocono-inferior">
          <button className="icono"></button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="contenido-principal">
        {/* Navbar superior */}
        <div className="barra-superior">
          <div className="navegacion-principal" id="barra-nav">
            <button id="btn-Rutina" className="boton-seccion blanco" onClick={() => seleccionarSeccion('Rutina')}>Rutina</button>
            <button id="btn-Editar" className="boton-seccion azul" onClick={() => seleccionarSeccion('Editar')}>Editar</button>
          </div>
          <img src="perfil.png" alt="Perfil" className="perfil" />
        </div>
        <hr className="hr" />

        {/* Zona de contenido editable */}
        <div className="zona-edicion" id="zona-edicion" style={{ display: 'none' }}>
          <div className="contenedor-edicion" style={{ display: 'flex', gap: '2rem' }}>
            <div className="editor" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h2 className="text-white mb-4">Editar rutina</h2>
              <textarea id="rutina-editable" className="edit" placeholder="Editar rutina aquí..." style={{ flexGrow: 1 }}></textarea>
              <button onClick={guardarRutina} className="btn">Guardar</button>
            </div>

            <div className="vista-previa" style={{ flex: 1 }}>
              <h2 className="text-white mb-4">Vista previa</h2>
              <div id="rutina-guardada" className="preview-box">Aquí se verá la rutina guardada...</div>
            </div>
          </div>
        </div>

        {/* Zona de contenido original */}
        <div className="zona-contenido" id="zona-contenido">
          <div className="zona-ejercicio">
            <div className="titulo-ejercicio">Ejercicio indicado</div>

            <div className="tarjeta-ejercicio">
              <div className="navegacion-ejercicio">
                <button className="flecha" onClick={anteriorEjercicio}>&#8592;</button>
                <img src="imagen-ejemplo.png" alt="Ejercicio" className="imagen-ejercicio" />
                <button className="flecha" onClick={siguienteEjercicio}>&#8594;</button>
              </div>
              <div className="info-ejercicio">
                <p id="peso">Peso: peso Indicado</p>
                <p id="repeticiones">Reps: repeticiones indicadas</p>
              </div>
            </div>

            <div className="tarjeta-dias">
              <div className="dias-semana" id="dias">
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map(dia => (
                  <button
                    key={dia}
                    id={`btn-${dia}`}
                    className="boton-dia"
                    onClick={(e) => seleccionarDia(e.target, dia)}
                  >
                    {dia}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="columna-derecha">
            <h1 className="h1">Rutina indicada</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RutinaApp;

// Las funciones seleccionarSeccion, guardarRutina, anteriorEjercicio, siguienteEjercicio, seleccionarDia deben estar definidas e importadas o colocadas dentro del mismo archivo o componente según tu arquitectura.
