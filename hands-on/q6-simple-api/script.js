
let url = " https://inspiration.goprogram.ai/" 


window.addEventListener("DOMContentLoaded", async function(){
    let response=await axios.get("https://pokeapi.co/api/v2/pokemon")

    console.log(response.data)
    document.querySelector('#load').addEventListener('click', function(){
        for(let name of response.data.results){
            // console.log(name)
    document.querySelector('#content').innerHTML+=`<li>${name.name}</li>`

        }


})
})