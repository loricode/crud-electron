
let tabla = document.getElementById("tabla")
let idNombre = document.getElementById("nombre")
let idEdicion = document.getElementById("edicion")
let listaLibro = []

 function getLibros(){
    fetch('http://localhost/apilibro/')
    .then( response => { return response.json() })
    .then( libros => { listalibro = libros  }) 
    .then( () => {
        let plantilla = '';
        listalibro.forEach( item => {
           plantilla+=`<tr>
                         <td>${ item.id }</td>
                         <td>${ item.nombre }</td>
                         <td>${ item.edicion }</td>
                        <tr>
                      `; }) //fin del forEach
       tabla.innerHTML = plantilla 
    })
}

getLibros();

function guardar(){
  let nombre = idNombre.value
  let edicion = idEdicion.value
  const obj = { nombre, edicion }
  fetch('http://localhost/apilibro/', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(obj), // data can be `string` or {object}!
    headers:{ 'Content-Type': 'application/json' }})
   .then(res => res.json())
   .catch(error => console.error('Error:', error))
   .then(response => { console.log('Success:', response)
    getLibros()
    idEdicion.value=''
    idNombre.value=''});
   
}
