var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; // Global - Function scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()