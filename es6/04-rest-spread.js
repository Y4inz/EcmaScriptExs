// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(fruits[0]);
console.log(fruits[1]);

// Object destructuring

let user = {
    username: 'Oscar',
    age: 32
}
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

// Spread operator

let person = {
    name: 'Oscar',
    age: 28
};
let country = 'MX';
let data = {id: 1, ...person, country};
console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num+ values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);

