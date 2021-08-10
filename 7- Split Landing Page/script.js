const leftSide=document.querySelector('.left')
const rightSide=document.querySelector('.right')
const container=document.querySelector('.container')


console.log(leftSide,rightSide);




leftSide.addEventListener('mouseover',()=>{
container.classList.remove('hover-right')
container.classList.add('hover-left')
})


rightSide.addEventListener('mouseover',()=>{
container.classList.remove('hover-left')
container.classList.add('hover-right')
})