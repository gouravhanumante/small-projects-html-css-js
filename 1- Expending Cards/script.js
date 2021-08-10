const panelNode=document.querySelectorAll('.panel')
console.log(panelNode);



//funtion to add active class


const addActiveClass=function (num) {
    
    panelNode[num].addEventListener('click',(e)=>{
        panelNode.forEach((el)=>{
            el.classList.remove('active')
        })
        panelNode[num].classList.add('active')
    })
}


addActiveClass(0)
addActiveClass(1)
addActiveClass(2)
addActiveClass(3)
addActiveClass(4)


