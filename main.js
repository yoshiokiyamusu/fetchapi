/*
const url = 'https://pokeapi.co/api/v2/pokemon/1/'

fetch(url)
.then(response => response.json() )
.then(data =>{
  let element = document.getElementById('elem')

  element.innerHTML = `
     <p>${data.name}</p>
     <p>${data.order}</p>
     <p>${data.species.url}</p>

  ` //<p>${data.order}</p>;  `<p>${data.order}</p>`
  console.log(data)

})
.catch(err=>console.log(err));
*/
const url = 'https://pokeapi.co/api/v2/pokemon/1/'
//const url = 'https://api-employee.herokuapp.com/dogi/750'

fetch(url)
.then(response => response.json() )
.then(data =>{
  let element = document.getElementById('elem')

  element.innerHTML = `
     <p>${data.name}</p>
     <p>${data.order}</p>
     <p>${data.species.url}</p>

  ` //<p>${data.order}</p>;  `<p>${data.order}</p>`
  console.log(data)

})
.catch(err=>console.log(err));
