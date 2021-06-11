import { ImagenSenyor } from "./ImagenSenyor";
import { InformacionSenyor } from "./InformacionSenyor";
import { IconoCheck } from "./IconoCheck";

export const Senyor = (props) => {
  const { senyor } = props;
  const { foto, nombre } = senyor;

  return (
    <>
      <article className="senyor col-8 offset-2 mb-4">
        <div className="row">
          <ImagenSenyor foto={foto} nombre={nombre} />
          <InformacionSenyor />
        </div>
        <IconoCheck />
      </article>
    </>
  );
};
