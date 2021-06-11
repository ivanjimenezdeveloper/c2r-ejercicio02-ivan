import { useState } from "react";
import { Cabecera } from "./components/Cabecera";
import { Senyor } from "./components/Senyor";
import { senyores as senyoresApi } from "./datos/senyores";

let primeraCarga = false;
function App() {
  let [senyores, setSenyores] = useState([]);

  const toggleMarcadoTodos = () => {
    setSenyores(
      senyores.map((senyor) => {
        return { ...senyor, marcado: true };
      })
    );
  };

  const getSenyores = (funcion) =>
    setTimeout(() => {
      primeraCarga = true;
      funcion(senyoresApi);
    }, 2000);

  if (!primeraCarga) {
    getSenyores(setSenyores);
  }

  const cambiarMarcado = (id) => {
    setSenyores(
      senyores.map((senyor) => {
        if (senyor.id === id) {
          return { ...senyor, marcado: !senyor.marcado };
        } else {
          return senyor;
        }
      })
    );
  };

  return (
    <div className="contenedor-general container-xl">
      <header className="cabecera text-center py-2 row">
        <Cabecera senyores={senyores} toggleMarcadoTodos={toggleMarcadoTodos} />
      </header>
      <main className="principal mt-2 row">
        {senyores.length !== 0
          ? senyores.map((senyor) => (
              <Senyor
                senyor={senyor}
                cambiarMarcado={cambiarMarcado}
                key={senyor.nombre}
              />
            ))
          : ""}
      </main>
    </div>
  );
}

export default App;
