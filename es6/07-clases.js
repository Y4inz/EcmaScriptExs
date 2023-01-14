//Declarando una clase
class User {};

class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};

//Creando una instancia
const yainz = new user();
console.log(yainz.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

class user{
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}
const jaime = new user();

// this hace referencia al elemento padre que lo contiene

class user {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const zyanya = new user('Jaime');
console.log(zyanya.greeting());

// setters and getters
class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
 const bebeloper2 = new user('Jaimes', 29);
 console.log(bebeloper2.uAge);
 console.log(bebeloper2.uAge = 30);