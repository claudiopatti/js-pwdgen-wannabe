
const name = prompt("Qual'è il tuo nome ?");
console.log ('Nome: ', name )


const surname = prompt("Qual'è il tuo cognome ?");
console.log ('cognome: ', surname )


const color = prompt("Qual'è il tuo colore preferito ?");
console.log ('colore: ', color )

console.log (name + surname + color + '130')


document.getElementById('Password').innerHTML =  name + surname + color + '130';

