"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

const body = document.querySelector("body")
const linebreak = document.createElement("br")
let title = document.createElement("h1")

let card = document.createElement("card")
const bulbasaur = async (rutaArchivo)  => {
    const response = await fetch(rutaArchivo);
    return response.text();
}

bulbasaur("./bulbasaur.json")
    .then(data => {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        
        // console.log(data['name'])
        body.appendChild(linebreak);
        title.textContent = jsonData['name']
        body.appendChild(title)

        let title2 = document.createElement("h2")
        body.appendChild(linebreak);
        title2.textContent = jsonData.types[0].type.name;
        body.appendChild(title2);

        let title3 = document.createElement("h2")
        body.appendChild(linebreak);
        title3.textContent = jsonData['types'][1]['type']['name'];
        body.appendChild(title3);


        jsonData.stats.forEach(stat => {
            const statText = document.createElement("p");
            statText.textContent = `base_stat ${stat.base_stat} effort ${stat.effort}`;
            card.appendChild(statText);
        });

        body.appendChild(card);
        
        // card.textContent = jsonData['stats'];
        // body.appendChild(card);
    })
    .catch(error => console.error(error));
