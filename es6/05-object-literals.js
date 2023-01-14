// enhanced object literals

function newUser(user, age, country, uId){
    return{
        user, // antes era: user = user,
        age, // antes era: age = age,
        country, // antes era country = country,
        id: uId // Asi era una variable tambien.
    }
}

console.log(newUser('Yainz', 29, 'Mex', 1));