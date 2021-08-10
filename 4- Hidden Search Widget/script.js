const searchBtn=document.querySelector('.btn')
const search=document.querySelector('.search')

searchBtn.addEventListener('click',(e)=>{
    if (search.classList.contains('active')) {
        search.classList.remove('active')
    }else{

        search.classList.add('active')
    }
})