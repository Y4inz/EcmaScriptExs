/* Asignacion de parametros por defecto al pasar usar argumentos en una funcion */
function newUser(name, age, country){
    var name = name || 'Jaime';
    var age = age || 29;
    var country = country || 'Mexico';
    console.log(name, age, country);
}
newUser();
newUser('Roberto', 28, 'Colombia');

function newAdmin(name = 'Jaime', age = 29, country = 'Urugay'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('Zyanya', 27, 'Venezuela');