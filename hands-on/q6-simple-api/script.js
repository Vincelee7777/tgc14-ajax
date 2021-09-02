
// let url = " https://api.kanye.rest/" 


// window.addEventListener("DOMContentLoaded", async function(){
//     let response=await axios.get("https://pokeapi.co/api/v2/pokemon")

//     // console.log(response.data)
//     document.querySelector('#load').addEventListener('click', function(){
        
//         for(n=0;n<10;n++){
//             // for(let name of response.data.results){
//                 let name=response.data.results[n]
            
//             console.log(response.data.results
//                 )
                
//          document.querySelector('#content').innerHTML+=`<li>${name.name}</li>`
        
//         }

        


// })
// })




window.addEventListener("DOMContentLoaded", async function(){
    let response=await axios.get("https://api.kanye.rest/")

    // console.log(response.data)
    document.querySelector('#load').addEventListener('click', function(){
        
        console.log(response.data)
                
         document.querySelector('#content').innerHTML+=`<li>${response.data.quote}</li>`
        
        

        


})
})