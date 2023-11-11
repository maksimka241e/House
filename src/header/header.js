
let notification;
document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden"){
      notification =  new Notification("House",{
            body: "Вам понравился материал? Поблагодарить легко! Будем весьма признательны, если поделитесь этой статьей в социальных сетях",
            tag: "grgrgegw213",
            icon: "free.png",
        })
    } else {
        notification.close()
    }
})

let modalBlock = document.querySelector('.modalBlock')
let modalBlBtn = document.querySelector('.modalBlBtn')
let modalBl = document.querySelector('.modalBl')
modalBlock.addEventListener('click', function(){
    modalBl.style.display = 'flex';
    modalBlBtn.style.display = 'flex';
})
modalBlBtn.addEventListener('click', function(){
    modalBl.style.display = 'none'
})