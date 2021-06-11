export const ImagenSenyor = (props) => {
  const { foto, nombre } = props;
  const nombrePalabras = nombre.split(" ");
  const getInicial = () =>
    nombrePalabras[0].length < 3
      ? nombrePalabras[1].charAt(0)
      : nombrePalabras[0].charAt(0);

  return (
    <div className="avatar col">
      <img
        src={`../img/${foto}`}
        className="img-fluid rounded-circle"
        width="214"
        alt={nombre}
      />
      <span className="inicial text-center rounded-circle">{getInicial()}</span>
    </div>
  );
};
