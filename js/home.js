const CATALOGE_URL = 'https://pucciarelli21.github.io/testing2024/api/products.json';

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))


// Fetch
async function fetchJson(url) {
    let crud = await fetch(url)
    if (crud.ok) {
        let users = await crud.json()
        return users;
    }
}

document.addEventListener('DOMContentLoaded', async () =>{

    let products = await fetchJson(CATALOGE_URL);

    for (let i = 0; i < products.length; i++) {
        const element = products[i].Producto;
        console.log(element)
        
    }

})