



function searchProduct(array) {

    let buscador = document.getElementById("search_product").value.toLowerCase()
    
    

    let result = []


    array.forEach(element => {
        const a = element.name.toLowerCase()
        const b = element.index
         result.push(a, b)
    
         if (buscador == undefined || nombreProducto.includes(buscador)) {
            console.log(result)
            showProducts(array)
         }
    });

}


/*

funcion buscar(api){

    int buscardor
    
    para api buscar producto[
        int productos = nombre de producto. convertir nombre en minuscula
        si
            buscador == productos. incluye ( buscador)
        entonces
        imprimir productos en pantalla
    ]
}


document.addEventListener("keyup", e=>{

        let result = []


        products.forEach(element => {
            result.push(element.name.toLowerCase(), element.index)
    
        });

        console.log(result)

        if (result.includes(e.target.value.toLowerCase()) == true) {
            document.getElementById("show_products").innerHTML = "";
            console.log(products.filter(result))
            
            
        }

        
      
    });

*/

document.addEventListener("DOMContentLoaded", async () =>{

    const products = await fetchJson("api/products.json");

    const category = await fetchJson("api/products_category.json");
    
    
    showProducts(products);

    let a = document.querySelectorAll(".card")

console.log(a)



    //Clear filters
    document.getElementById("clear_filter").addEventListener("click", () =>{
        document.getElementById("show_products").innerHTML = "";
        showProducts(products);
    });

    document.getElementById("higher_price").addEventListener("click", () =>{
        document.getElementById("show_products").innerHTML = "";
        higherPrice(products);
    });

    document.getElementById("lower_price").addEventListener("click", () =>{
        document.getElementById("show_products").innerHTML = "";
        lowerPrice(products);
    });

    

});



/*

const searchImput = document.getElementById("search_product").value.toLocaleLowerCase()
    const filteredProducts = array.filter(product => product.price);

    document.addEventListener("keyup", () =>{
        
        array.forEach(element => {
            const nameProduct = element.name.toLocaleLowerCase()
        

            if (nameProduct.includes(searchImput)) {
                document.getElementById("show_products").innerHTML = "";
                showProducts(array)
            }

        });
    });

*/