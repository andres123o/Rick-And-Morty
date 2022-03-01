
const response = await fetch('https://jsonplaceholder.typicode.com/users/')
     .then( async response => await response.json());

console.log(response[0].name)