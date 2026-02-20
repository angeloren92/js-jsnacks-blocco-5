const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const risultato = names.map(nome => `'${nome}'`).join(', ')
console.log(risultato)