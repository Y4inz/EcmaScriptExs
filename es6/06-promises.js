const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey lo logramos');
        } else{
            reject('No funciono');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));