// Get data
function getData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error=>console.log(error))
}


// Append the data to our HTML
function displayData(photos){
    for (photo of photos){
        let p = document.createElement('p')
        p.innerHTML = `<img src = ${photo}>`
        document.body.append(p)
    }
}

getData()