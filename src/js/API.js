

//Elaborando un CRUD CON JAVASCRIPT Y JSON-SERVER API REST

// Endpoint -- link del json
const endPoint = "http://localhost:3000";

 export async function getInfo(productN){
    let flag=false;
try{

    const response = await fetch(`${endPoint}/products`);
    const info = await response.json();
    info.forEach(product => { 
        productN = productN.toLowerCase();
        let nameLower = product.name.toLowerCase(); 
    if(productN == nameLower){
        console.log(" The product is: ", product);
        flag = true;
    }
    });
    if(!flag){
    console.log("The product isn't in the inventary");
    };

}catch(error){
    console.error("La informacion llego mal", error);
}
};


export async function postInfo(nameP,categoryP,costP){

    try{
        const response  = await fetch(`${endPoint}/products`, {

            method:"POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: nameP,
                category: categoryP,
                cost: costP
            })

        });
        const nuevoPost = await response.json();
        console.log(nuevoPost);

    }catch(error){
    console.log("Hay un error ", error);

    }


}

export async function updatedInfo( nameP, categoryP, costP){

const getMethod = await fetch(`${endPoint}/products`);
const res = await getMethod.json();
let idP;

if(!getMethod){
    console.warn("Hay un problema")
    return;
};


res.forEach(product =>{
        let nameLower =product.name.toLowerCase().trim() 
        nameP = nameP.toLowerCase().trim()
        if(nameLower=== nameP ){
            idP = product.id;
        };

});
console.log("El id es: ", idP)

try{
    const response = await fetch(`${endPoint}/products/${idP}`,{

        method:"PUT",
        header:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            name: nameP,
            category: categoryP,
            cost: costP
        })
    });
    const updated = await response.json();
    console.log("Product updated");
    
    
    
    }catch(error){

console.log("Product updated: ", error);

    }
}
export async function deleteInfo(nameP){
try{
const getMethod = await fetch(`${endPoint}/products/`);
const res = await getMethod.json();
console.log(res);
let idP;

if (!getMethod){
    console.warn("There isn't a products in the inventary");
}

res.forEach(product =>{
    let nameLower = product.name.toLowerCase();
    nameP = nameP.toLowerCase();
    if(nameLower === nameP){
        idP= product.id;
      
    }

});
console.log("The id is: ", idP);


    const deleteResponse = await fetch(`${endPoint}/products/${idP}`,{
        method:"DELETE",

    });

    if(deleteResponse.ok){
        console.group("The product has been deleted successfuly ");
    };
}catch(error){
console.error("There is an error ", error);

}};
