

const jokeArea=document.querySelector('#joke')
const jokeBtn=document.querySelector('#jokeBtn')


generateJoke=async function () {
   const res=await fetch('https://icanhazdadjoke.com',{
        headers:{
            'Accept':'application/json'
        }
    })
    const data=await res.json()
    jokeArea.textContent=data.joke 
}

// generateJoke= function () {
//     fetch('https://icanhazdadjoke.com',{
//         headers:{
//             'Accept':'application/json'
//         }
//     }).then((res)=>res.json()).then((val)=>jokeArea.textContent=val.joke)
// }



generateJoke()



jokeBtn.addEventListener('click',(e)=>{
    
    generateJoke()
    
})




