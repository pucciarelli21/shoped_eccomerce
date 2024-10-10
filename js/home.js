const CATALOGE_URL = 'https://pucciarelli21.github.io/testing2024/api/products.json';


// Fetch
async function fetchJson(url) {
    let crud = await fetch(url)
    if (crud.ok) {
        let users = await crud.json()
        return users;
    }
}


document.addEventListener("DOMContentLoaded", async () =>{
    const a = await fetchJson("https://pucciarelli21.github.io/testing2024/api/products.json");

    console.log(a)

    for (let i = 0; i < a.vestimenta.length; i++) {
        const element = a.vestimenta[i];
        console.log(element.index)
    }

    a.vestimenta.forEach(element => {
        console.log(element)
    });
})