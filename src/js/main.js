
import {router} from '../../src/router/router.js'
import '../css/styles.css';

import { alertError, alertSuccess } from './alerts.js';




// It is so that the browser addresses allow us to move forward and backward.
window.addEventListener('popstate', router);
// For dynamic content to render the first time
window.addEventListener('load', router);

// document.addEventListener("click", (event) =>{
//     if(event.target.matches('[data-link]'))
//         event.preventDefault()
//             history.pushState(null, null, event.target.href);
            

// });
router();

const endPoint = "http://localhost:4000";

export async function postInfo(nameE, placeE, descriptionE){

    try{
        const response  = await fetch(`${endPoint}/events`, {

            method:"POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: nameE,
                place: placeE,
                description: descriptionE
            })

        });
        const nuevoPost = await response.json();
        console.log(nuevoPost);
        alertSuccess("Nuevo evento creado")

    }catch(error){
    console.log("Hay un error ", error);
    alertError("Hubo un error")

    }


}




// html elements


const  $send = document.getElementById("send");
const  $eventName= document.getElementById("eventName");
const $placeName= document.getElementById("placeName");
const $passwordName= document.getElementById("passwordName");



//Here i try to up information 
$send.addEventListener('submit', (e)=>{
    e.preventDefault();

postInfo($eventName.value,$placeName.value,$passwordName.value);
console.log("Click en boton");



});






