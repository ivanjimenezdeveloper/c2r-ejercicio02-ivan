export const Cabecera = (props) => {
  const contarApuntadores = (senyores) => {
    return senyores.filter((senyor) => senyor.marcado === true).length;
  };
  let cantidadApuntando = 0;

  if (props.senyores.length !== 0) {
    const senyores = props.senyores;
    cantidadApuntando = contarApuntadores(senyores);
  }

  return (
    <>
      <h1 className="col-12">Señores que te apuntan con el dedo</h1>
      <span className="col-12 mt-2">
        {cantidadApuntando} señores que te apuntan con el dedo marcados
      </span>
      <button className="col-2 offset-5 btn mt-2">Marcar todos</button>
    </>
  );
};
