const prevBtn=document.querySelector('#prev')
const nextBtn=document.querySelector('#next')

const progressLine=document.querySelector('#progress')

const circles=document.querySelectorAll('.circle')

let width=0;
let count=0;

const settingUpBtn=()=>{
    prevBtn.disabled=false
    nextBtn.disabled=false
}



nextBtn.addEventListener('click',(e)=>{
    
    settingUpBtn()
    if (count<3 && width<=100) {
        
        if (count===2) {
            nextBtn.disabled=true
        }
        circles.forEach((el)=>{
            el.classList.remove('active')
        })
        
        count++;
        width=width+33;
        progressLine.style.width=`${width}%`
        circles[count].classList.add('active')
        
    }
    
})


prevBtn.addEventListener('click',(e)=>{
    
    if (count>=1 && width>=0) {
       settingUpBtn()
        if (count===1) {
            prevBtn.disabled=true
        }
        circles.forEach((el)=>{
            el.classList.remove('active')
    })
      
    count--;
    width=width-33;
    progressLine.style.width=`${width}%`
    circles[count].classList.add('active')
    }

})