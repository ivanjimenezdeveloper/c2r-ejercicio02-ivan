import { ImagenSenyor } from "./ImagenSenyor";
import { InformacionSenyor } from "./InformacionSenyor";
import { IconoCheck } from "./IconoCheck";

export const Senyor = (props) => {
  return (
    <>
      <article className="senyor col-8 offset-2 mb-4">
        <div className="row">
          <ImagenSenyor />
          <InformacionSenyor />
        </div>
        <IconoCheck />
      </article>
    </>
  );
};
