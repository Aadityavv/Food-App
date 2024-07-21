document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".features,.loginButtons");
    buttons.forEach(buttons=>{
        buttons.addEventListener("mouseover",()=>addHoverEvent(buttons))
        buttons.addEventListener("mouseout",()=>removeHoverEvent(buttons))
    })
    function addHoverEvent(buttons){
        buttons.style.transform="scale(1.2)"
        buttons.style.color="white"
        buttons.style.transition = "transform 0.2s ease-in-out, color 0.2s ease-in-out";
    }
    function removeHoverEvent(buttons){
        buttons.style.transform="scale(1)"
        buttons.style.color="black"
        buttons.style.transition = "transform 0.2s ease-in-out, color 0.2s ease-in-out";
    }
    // 
    const blurCircle = document.querySelector("#bgBlur");
    document.addEventListener("mousemove",(e)=>{
        blurCircle.style.left = `${e.clientX - blurCircle.offsetWidth/2}px`;
        blurCircle.style.top = `${e.clientY - blurCircle.offsetHeight/2}px`
    })

    const products = document.querySelectorAll(".product");
    products.forEach(products=>{
        products.addEventListener("mouseover",()=>increaseSize(products))
        products.addEventListener("mouseout",()=>decreaseSize(products))
    })

    function increaseSize(product){
        product.style.transform = "scale(1.1)";
        product.style.transition = "transform 0.2s ease-in-out"
    }
    function decreaseSize(product){
        product.style.transform = "scale(1)";
        product.style.transition = "transform 0.2s ease-in-out"
    }
})
