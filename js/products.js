
function productCategory(array, category){

    array.find((product) => product.category = category)

};

function setId(){
    let a = document.querySelectorAll(".card")

console.log(a)
    for (let i = 0; i < a.length; i++) {
            
        
        
    }
}



document.addEventListener("DOMContentLoaded", async ()=>{

    const products = await fetchJson("api/products.json");
    showProducts(products)
    higherPrice|(products)
    lowerPrice(products)
    setId()
});


console.log()