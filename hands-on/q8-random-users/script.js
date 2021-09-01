let url = "https://randomuser.me/api/?results=10"


window.addEventListener('DOMContentLoaded', async function(){
    let response=await axios.get('https://randomuser.me/api/?results=10')
    console.log(response.data)

    let abc=response.data

    document.querySelector('#button').addEventListener('click', function(){
        for(random of abc.results){
            
            let fn=random.name.first
            // console.log(fn)
            let ln=random.name.last
            console.log(ln)
            let city=random.location.city
            console.log(city)
            let img=random.picture.medium
            console.log(img)

            document.querySelector('#pages').innerHTML+="<li> Name: "+ fn +' ' + ln +"</li>"+"<p> City :" +ln+"</p>"+ `<img src='${img}' + />`
            
            
         }
        



    })
    

})
