let backet = document.querySelector('.backetYes')
let bockBacket = document.querySelector('.basketDiv')
let backetNet = document.querySelector('.BtnBasketNo')
backet.addEventListener('click', function(){
    bockBacket.style.transform = 'translateX(0px)';
})
backetNet.addEventListener('click', function(){
    bockBacket.style.transform = 'translateX(600px)';
})