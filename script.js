// Always put the code in a function

function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error))
        
}

getData();


// Function to append the data to our HTML document.
function displayData(todos){
    for (todo of todos){
        let p = document.createElement("p")
        p.innerText = todo.title

        // append to body
        document.body.append(p)
    }

}