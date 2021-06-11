function App() {
  return (
    <div class="contenedor-general container-xl">
      <header class="cabecera text-center py-2 row">
        <h1 class="col-12">Señores que te apuntan con el dedo</h1>
        <span class="col-12 mt-2">
          0 señores que te apuntan con el dedo marcados
        </span>
        <button class="col-2 offset-5 btn mt-2">Marcar todos</button>
      </header>
      <main class="principal mt-2 row">
        <article class="senyor senyor-molde col-8 offset-2 mb-4">
          <div class="row">
            <div class="avatar col">
              <img src="" class="img-fluid rounded-circle" width="214" alt="" />
              <span class="inicial text-center rounded-circle"></span>
            </div>
            <div class="info col">
              <h2 class="nombre-senyor"></h2>
              <ul class="datos list-unstyled mt-2">
                <li class="row">
                  <span class="nombre-dato col-4">Profesión:</span>
                  <span class="valor-dato col"></span>
                </li>
                <li class="row">
                  <span class="nombre-dato col-4">Estado:</span>
                  <span class="valor-dato col"></span>
                </li>
                <li class="row">
                  <span class="nombre-dato col-4">Twitter:</span>
                  <span class="valor-dato col"></span>
                </li>
              </ul>
            </div>
          </div>
          <i class="icono fas fa-check"></i>
        </article>
      </main>
    </div>
  );
}

export default App;
