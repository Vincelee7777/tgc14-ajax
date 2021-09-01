window.addEventListener('DOMContentLoaded', async function(){
    let response=await axios.get('https://anapioficeandfire.com/api/books')
    // console.log(response.data)
    let allbooks=response.data
    document.querySelector('#button').addEventListener('click',function(){

        for (let eachbook of allbooks){
            console.log(eachbook)
            document.querySelector('#name').innerHTML+="<li> Book name : "+ eachbook.name + "</li>"
            document.querySelector('#name').innerHTML+= "&nbsp&nbsp&nbsp&nbsp Number of pages :"+ eachbook.numberOfPages 
        }




    })


})