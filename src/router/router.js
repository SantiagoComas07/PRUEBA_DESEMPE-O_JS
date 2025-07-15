 import { renderLogin } from "../js/login.js";
 import {renderProducts} from "../js/products.js";
 import {renderWelcome} from "../js/welcome.js";
 import {renderRegister} from "../js/register.js";
 import { notFound } from "../js/404.js";
 


 //Here i try to organize the routes
const routes ={
"/": {showView: renderWelcome(),
    afterRender: "settingsWelcome",
    private: false 
},
"/login":{showView: renderLogin(),
    afterRender: "settingsLogin",
    private: false 
},
"/register": {showView: renderRegister(),
    afterRender: "settingsRegister",
    private: false 
},

"/products":{showView: renderProducts(),
    afterRender: "settingsProducts",
    private: true 
}
}

 export function router(){
  const path = window.location.pathname || "/";
  // Path is important to navegate on the page
  console.log(path);
  const app = document.getElementById("app");

  const currentRoute = routes[path];
  console.log("Current route", currentRoute)

     if(currentRoute){
             app.innerHTML= currentRoute.showView;
             if(typeof currentRoute.afterRender == 'function'){
                 currentRoute.afterRender()
             }
     }else{
         app.innerHTML=notFound(); 

     }


 }