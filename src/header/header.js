
let notification;
document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden"){
      notification =  new Notification("House",{
            body: "Пожалуйста, вернитесь на сайт",
            tag: "grgrgegw213",
            icon: "free.png",
        })
    } else {
        notification.close()
    }
})

