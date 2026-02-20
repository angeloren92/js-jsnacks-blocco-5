const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const risultato = nums.filter(num => num % 2 === 0)
console.log(risultato)

const risultato2 = nums.filter(num => {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(risultato2)


//Prova riscotruziuone filtro manuale per ripassare la logica
function myFilter(arr) {
    result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result;
}
const risultato3 = myFilter(nums)
console.log(risultato3)