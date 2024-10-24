// Fetch
async function fetchJson(url) {
    let crud = await fetch(url)
    if (crud.ok) {
        let users = await crud.json()
        return users;
    }
}


//Show all products
function showProducts(array) {

    document.getElementById("show_products").innerHTML = "";

    array.forEach(product => {

        document.getElementById("show_products").innerHTML += `
                    <div class="card product" id="${product.index}">
                        <img src="${product.img[0]}" alt="">
                        <div class="card-description">
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                        </div>
                    </div>
                    `
    });
}


//Filter products for higer price
function higherPrice(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        result.push(element)

        result.sort( (a,b) =>{
            if (a.price == b.price) {
                return 0;
            }
            if(a.price > b.price){
                return -1;
            }
            return 1;
        });
        
    };
    showProducts(result);
    
};


//Filter products for lower price
function lowerPrice(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        result.push(element)

        result.sort( (a,b) =>{
            if (a.price == b.price) {
                return 0;
            }
            if(a.price < b.price){
                return -1;
            }
            return 1;
        });
        
    };
    showProducts(result);
};



document.addEventListener("DOMContentLoaded", () =>{

});