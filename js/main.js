document.addEventListener("DOMContentLoaded", () =>{
    

    document.addEventListener("click", () =>{
        let a = document.querySelector(".hiden");

        console.log(a);

        if (a.classList.contains("hiden") == true) {
            a.classList.remove("hiden");
            a.classList.add("show");
        };
        
    });
});


