const promiseValue = new Promise((resolve, reject) => {

    let result = true;

    if (result) {
        resolve('Data is received')
    }
    else {
        reject("Data is failed to received")
    }
})

promiseValue
    .then(result => console.log(result))
    .catch(error => console.log(error))


//Real-life API Example:
fetch("https://jsonplaceholder.typicode.com/posts/1") // promise
    .then(res => res.json())                          // pending
    .then(data => console.log(data))                  // success
    .catch(err=>console.log(err))                     // rejected

