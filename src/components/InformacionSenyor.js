export const InformacionSenyor = (props) => {
  const { nombre, profesion, estado, twitter } = props;
  return (
    <div className="info col">
      <h2 className="nombre-senyor">{nombre}</h2>
      <ul className="datos list-unstyled mt-2">
        <li className="row">
          <span className="nombre-dato col-4">Profesión:</span>
          <span className="valor-dato col">{profesion}</span>
        </li>
        <li className="row">
          <span className="nombre-dato col-4">Estado:</span>
          <span className="valor-dato col">{estado}</span>
        </li>
        <li className="row">
          <span className="nombre-dato col-4">Twitter:</span>
          <span className="valor-dato col">{twitter}</span>
        </li>
      </ul>
    </div>
  );
};
