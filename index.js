


fetch('https://gateway.marvel.com/v1/public/comics?apikey=a062a92deb46293f30880acc9f6bdac1&orderBy=name')
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data)
  comics = data.data.results
  const seccion = document.querySelector("section")

  comics.map((comic) => {
    seccion.innerHTML += `<p>${comic.title}</p>`
  })
  
})





// const botonProx = document.querySelector("#prox");
// const urlBase = "https://gateway.marvel.com/v1/public/"
// const apiKey = "cdf503fce8f2c519f899f64cff25fd79"
// const comicsPorPagina = 20;
// let paginaActual = 0;

// botonProx.onclick = () => {
//   paginaActual++
//   console.log("pagina actual", paginaActual)
//   buscarComics(paginaActual)
// }

// const buscarComics = (url, paginaActual, nombre) => {
//   console.log("buscando comics...")
//   fetch(`${urlBase + url}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}`)
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => {
//     console.log(data)
//     personajes = data.data.results
//     const seccion = document.querySelector("section")
//     seccion.innerHTML = ''
//     personajes.map((personaje) => {
//       seccion.innerHTML += `<p>${personaje[nombre]}</p>`
//     })
    
//   })
// }



//   buscarComics("comics", paginaActual, "title")
//    buscarComics("characters", paginaActual, "name")



// Toda API de complejidad media puede recibir QUERY PARAMS (parametros de busqueda)
// Los parametros de busqueda son pares de clave-valor con la siguiente sintaxis:
// clave=valor
// Se separan entre si con el signo "&"
// Van en la URL y le envian informacion a la API para que nos filtre u ordene las busquedas

// Cada API nos dira en su documentacion cuales son los parametros de busqueda que acepta 

// La estructura final de la URL a la que hacemos un fetch es 

// url de la api + coleccion que buscamos + ? + queryParam=valor + & + queryParam=valor

// ejemplo: "www.adoptargatitos.com/gatitos?ordenarPor=edad&apikey=234567890"