const bg=document.querySelector('.bg')
const loadingText=document.querySelector('.loading-text')


let count=0
 
    const func=()=>{

        if (count===100) {
            clearInterval(test)
        }
        loadingText.textContent=`${count}%`
        loadingText.style.opacity=`${1-count*0.01}`
        bg.style.filter=`blur(${scale(count,0,100,30,0)})px)`
    
        
        count++
    }

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
  let test=  setInterval( func,30);

       
    

