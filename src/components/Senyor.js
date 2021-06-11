import { ImagenSenyor } from "./ImagenSenyor";
import { InformacionSenyor } from "./InformacionSenyor";
import { IconoCheck } from "./IconoCheck";
import { useState } from "react";

export const Senyor = (props) => {
  const { senyor } = props;
  const { foto, nombre, profesion, estado, twitter, marcado } = senyor;
  const [activo, setActivo] = useState(marcado ? " marcado" : "");
  const toggleMarcado = () => {
    setActivo(activo === "" ? " marcado" : "");
  };

  return (
    <article
      className={`senyor${activo} col-8 offset-2 mb-4`}
      onClick={toggleMarcado}
    >
      <div className="row">
        <ImagenSenyor foto={foto} nombre={nombre} />
        <InformacionSenyor
          nombre={nombre}
          profesion={profesion}
          estado={estado}
          twitter={twitter}
        />
      </div>
      <IconoCheck />
    </article>
  );
};
