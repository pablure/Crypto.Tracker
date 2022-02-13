/*fetch(`https://api.coingecko.com/api/v3/coins/list`)*/

const URL = "https://api.coingecko.com/api/v3/coins/";

const llamarMoneda = async (nombreMoneda) => {

	const resultado = await fetch(URL + nombreMoneda);
	const resultadoParseado = await resultado.json();

    if (typeof resultadoParseado.name === 'undefined') {
        alert("No se ha encontrado la Criptomoneda");
    } else {
        const datosMonedas = [resultadoParseado.name, 
            "ATH: " + resultadoParseado.market_data.ath.eur + "€", 
            "Current: " + resultadoParseado.market_data.current_price.eur + "€", "Rank: " + resultadoParseado.coingecko_rank];

        return datosMonedas;
    }
};

const ponerDatos = async (idCaja, nombreMoneda, titulo) => {

  const caja = document.querySelector(idCaja);
  const arrayDatosMonedas = await llamarMoneda(nombreMoneda);
  
  if (typeof arrayDatosMonedas !== 'undefined') {

      for(let i=0; i<4; i++) {
          const linea = document.createElement("p");
          linea.textContent = arrayDatosMonedas[i];
          caja.appendChild(linea);
      }
               
      document.getElementById(titulo).textContent = arrayDatosMonedas[0];
    
  }
}

ponerDatos("#caja1", "bitcoin", "#titulo1");
ponerDatos("#caja2", "ethereum", "#titulo2");

/*const divTarjeta = document.querySelector(".tarjeta");
const divMuroTarjetas = document.querySelector("#muroDeTarjetas");
const boton = document.querySelector("#agregarCard");

const pedirUsuario = async () => {
  const resultado = await fetch(URL);
  const resultadoParseado = await resultado.json();

  console.log(resultadoParseado);
  return resultadoParseado.results[0];
};

const pedirUsuarioYMostrarEnDom = async () => {
  // 1. pedir usuario
  const usuario = await pedirUsuario();
  // 2. mostrar en la pagina
  const divNombreUsuario = document.createElement("div");
  console.log(divNombreUsuario);
  // 3. meter nombre usuario en el div
  divNombreUsuario.textContent = usuario.name.first;
  // 4. meter div en el DOM
  divTarjeta.appendChild(divNombreUsuario);
};

const crearTarjetaNueva = () => {
  console.log("click");
  // 1. crear el div de la tarjeta
  const tarjeta = crearHTMLTarjeta();
  // 2. insertarlo en el muroDeTarjetas
  divMuroTarjetas.appendChild(tarjeta);
};

const crearHTMLTarjeta = () => {
  // divTarjetaNueva.createElement("div")
  const divTarjetaNueva = document.createElement("div");
  // divTarjetaNueva.classList.add("")
  divTarjetaNueva.className = "tarjeta";

  // 1. crear html del boton
  const divBoton = document.createElement("button");
  divBoton.textContent = "eliminiar";
  // 2. añadirle una funcion al click
  const handleClick = () => borrarDivDelDom(divTarjetaNueva);
  divBoton.onclick = handleClick;
  // 3. borrar div cuando se hace click en el boton
  divTarjetaNueva.appendChild(divBoton);

  return divTarjetaNueva;
};

const borrarDivDelDom = (elemento) => {
  console.log(elemento);
  elemento.remove();
};

boton.addEventListener("click", crearTarjetaNueva);

pedirUsuarioYMostrarEnDom();*/



