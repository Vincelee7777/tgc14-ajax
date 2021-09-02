window.addEventListener('DOMContentLoaded', async function(){
    let response=await axios.get('https://anapioficeandfire.com/api/books')
    // console.log(response.data)
    let allbooks=response.data
    document.querySelector('#button').addEventListener('click', async function(){

        for (let eachbook of allbooks){
            // console.log(eachbook)
            document.querySelector('#name').innerHTML+="<li> Book name : "+ eachbook.name + "</li>"
            document.querySelector('#name').innerHTML+= "&nbsp&nbsp&nbsp&nbsp Number of pages :"+ eachbook.numberOfPages 
            
            for (let within of eachbook.povCharacters){
                // for(let pov of within){
                //     let response2=await axios.get(pov);
                //     console.log(response2);
                // }//
                
                let character = (await axios.get(within)).data;
                // console.log(character.name); 
                let eachcharacter=[]
                eachcharacter.push(character.name)
                console.log(eachcharacter)
                         
                document.querySelector('#name').innerHTML+=`<p>&nbsp&nbsp&nbsp&nbsp Character names: ${eachcharacter} </p>`

                
            }


        }


    })


})