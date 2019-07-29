//const url = 'https://pokeapi.co/api/v2/pokemon/1/'
const url = 'https://api-employee.herokuapp.com/dogi/100'

fetch(url)
.then(response => response.json() )
.then(data =>{
  let element = document.getElementById('elem')

  element.innerHTML = `
     <p>${data.id}</p>
     <p>${data.name}</p>
     <p>${data.salary}</p>

  `
  console.log(data)

})
.catch(err=>console.log(err));
