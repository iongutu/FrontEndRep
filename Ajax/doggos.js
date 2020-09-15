const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos")
function insertDogg(){
    const promise = fetch(DOG_URL);
    promise
        .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
        .then(function(processingResponese){
            const img= document.createElement("img");
            img.src = processingResponese.message;
            img.alt = "cute doggo";
            doggos.appendChild(img)
        });
}
document.querySelector("button").addEventListener("click",insertDogg);