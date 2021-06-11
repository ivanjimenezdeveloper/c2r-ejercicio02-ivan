import { useState } from "react";
import { Cabecera } from "./components/Cabecera";
import { Senyor } from "./components/Senyor";
import { senyores as senyoresApi } from "./datos/senyores";

function App() {
  let [senyores, setSenyores] = useState([]);

  const getSenyores = () =>
    setTimeout(() => {
      setSenyores(senyoresApi);

      console.log(senyoresApi);
    }, 2000);

  getSenyores();

  return (
    <div className="contenedor-general container-xl">
      <header className="cabecera text-center py-2 row">
        <Cabecera senyores={senyores} />
      </header>
      <main className="principal mt-2 row">
        {senyores.length !== 0
          ? senyores.map((senyor) => <Senyor senyor={senyor} />)
          : ""}
      </main>
    </div>
  );
}

export default App;
