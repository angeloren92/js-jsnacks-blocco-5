const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let risultato = people.map(element => {
  const {name} = element;
  const result = `'${name}'`
  return result;
})
risultato = risultato.join(', ')
console.log(risultato)


const risultato2 = people.map(({name}) => `'${name}'`).join(', ');
console.log(risultato2);