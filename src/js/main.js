import { getInfo, postInfo, updatedInfo, deleteInfo} from './API.js'
import {router} from '../router/router.js'
import {Auth} from './auth.js'


// Es para que las direcionales del navegador nos permitan avanzar y retroceder
window.addEventListener('popstate', router);
// Pra que se renderize el contenido dinamico la primera vez
window.addEventListener('load', router);

document.addEventListener("click", (event) =>{
    if(event.target.matches('[data-link'))
        event.preventDefault()
            history.pushState(null, null, event.target.href);
            router();

});


//Elementos HTML
const $form = document.getElementById("form");
const $nameProduct = document.getElementById("productName");
const $categoryProduct = document.getElementById("categoryProduct");
const $costProduct = document.getElementById("costProduct");
let selectedMethod;
let menuNumber;

// Seleccion del metodo HTTP


$form.addEventListener('click', (e)=>{
if(e.target.tagName === "BUTTON" && e.target.dataset.method){
    selectedMethod = e.target.dataset.method
    // console.log(selectedMethod);
}
switch(selectedMethod){
    case "GET":
        $nameProduct.style.display="block";
        $categoryProduct.style.display="none";
        $costProduct.style.display="none";
        menuNumber=1;
        break;
    case "POST":
        $nameProduct.style.display="block";
        $categoryProduct.style.display="block";
        $costProduct.style.display="block";
        menuNumber=2;
        break;
    case "PUT":
        $nameProduct.style.display="block";
        $categoryProduct.style.display="block";
        $costProduct.style.display="block";
        menuNumber=3;
        break;
    case "DELETE":
        $nameProduct.style.display="block";
        $categoryProduct.style.display="none";
        $costProduct.style.display="none";
        menuNumber=4;
        break;

}


});



    $form.addEventListener('submit', (e)=>{
        e.preventDefault();
        switch(menuNumber){

            case 1:
                getInfo($nameProduct.value.trim());
                break;
            case 2:
                postInfo($nameProduct.value, $categoryProduct.value, $costProduct.value);
                break;
            case 3:
                updatedInfo($nameProduct.value, $categoryProduct.value, $costProduct.value);
                break;
            case 4:
                deleteInfo($nameProduct.value);
                break;
            default:
                 console.warn("This function don't avaiable");

        }
    });
