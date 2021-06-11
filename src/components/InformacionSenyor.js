export const InformacionSenyor = () => {
  return (
    <div className="info col">
      <h2 className="nombre-senyor"></h2>
      <ul className="datos list-unstyled mt-2">
        <li className="row">
          <span className="nombre-dato col-4">Profesión:</span>
          <span className="valor-dato col"></span>
        </li>
        <li className="row">
          <span className="nombre-dato col-4">Estado:</span>
          <span className="valor-dato col"></span>
        </li>
        <li className="row">
          <span className="nombre-dato col-4">Twitter:</span>
          <span className="valor-dato col"></span>
        </li>
      </ul>
    </div>
  );
};
