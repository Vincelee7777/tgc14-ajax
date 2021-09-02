
let url = " https://inspiration.goprogram.ai/" 


window.addEventListener("DOMContentLoaded", async function(){
    let response=await axios.get("https://pokeapi.co/api/v2/pokemon")

    console.log(response.data)
    document.querySelector('#load').addEventListener('click', function(){
        
        for(n=0;n<10;n++){
            for(let name of response.data.results){
                // let name=response.data.results[n]
            // for(n=0;n<10;n++){
            console.log(typename)
                
         document.querySelector('#content').innerHTML+=`<li>${name.name}</li>`
        
        }

        }


})
})