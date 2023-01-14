function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Jaime', 'Oscar', 'Ana', 'Ulises', 'Jennyfer']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
