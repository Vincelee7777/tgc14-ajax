const API_BASE_URL="https://openlibrary.org/search.json?"

window.addEventListener('DOMContentLoaded', async function(){
    document.querySelector('#search').addEventListener('click', async function(){
        let searchTerms = document.querySelector('#text2').value
    let response=await axios.get(API_BASE_URL + 'title=' +searchTerms)
    console.log(response)
    // alert('abc')
        for(let s of response.data.docs){
            console.log(s)
            document.querySelector('#name').innerHTML+=`<li><h5>Book Title: ${s.title}</li></h5><h5> Edition Count: ${s.edition_count}</h5><h5> Author Name: ${s.author_name[0]}</h5>`
            
        
        }

    })
})