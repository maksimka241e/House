let basketCards3 = document.querySelector('.basketProduct') 
// EdCards1
let EnglandCard1Counter = localStorage.getItem('Ed1Counter') || 0
let EnglandCard1Button = document.querySelector('.EnglandCard1Button')
// buy Cards and No buy Cards
let Ed1Yes = document.querySelector('.Ed1Yes')
let Ed2Yes = document.querySelector('.Ed2Yes')
let Ed3Yes = document.querySelector('.Ed3Yes')
let Ed4Yes = document.querySelector('.Ed4Yes')
let Ed5Yes = document.querySelector('.Ed5Yes')
let Ed6Yes = document.querySelector('.Ed6Yes')
function Ed1BuyYes(){
  setTimeout( function(){
    Ed1Yes.innerHTML = 'Успешно' 
  },1)
}
function Ed1BuyNo(){
  setTimeout( function(){
    Ed1Yes.innerHTML = 'В Корзину' 
  },1)
}
function Ed2BuyYes(){
  setTimeout( function(){
    Ed2Yes.innerHTML = 'Успешно' 
  },1)
}
function Ed2BuyNo(){
  setTimeout( function(){
    Ed2Yes.innerHTML = 'В Корзину' 
  },1)
}
function Ed3BuyYes(){
  setTimeout( function(){
    Ed3Yes.innerHTML = 'Успешно' 
  },1)
}
function Ed3BuyNo(){
  setTimeout( function(){
    Ed3Yes.innerHTML = 'В Корзину' 
  },1)
}
function Ed4BuyYes(){
  setTimeout( function(){
    Ed4Yes.innerHTML = 'Успешно' 
  },1)
}
function Ed4BuyNo(){
  setTimeout( function(){
    Ed4Yes.innerHTML = 'В Корзину' 
  },1)
}
function Ed5BuyYes(){
  setTimeout( function(){
    Ed5Yes.innerHTML = 'Успешно' 
  },1)
}
function Ed5BuyNo(){
  setTimeout( function(){
    Ed5Yes.innerHTML = 'В Корзину' 
  },1)
}
function Ed6BuyYes(){
  setTimeout( function(){
    Ed6Yes.innerHTML = 'Успешно' 
  },1)
}
function Ed6BuyNo(){
  setTimeout( function(){
    Ed6Yes.innerHTML = 'В Корзину' 
  },1)
}
// so that the card was on reboot
let EnglandCards1Div = localStorage.getItem('EdCards1')
if(localStorage.getItem('EdCards1') === null){
    console.log("пусто");
}else if(localStorage.getItem('EdCards1') !== ''){
  basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards1'))
  Ed1BuyYes()
  let divCards = document.querySelector('.CreateEnglandCard1')
    let EnglandCard1ButtonNet = document.querySelector('.CreateEnglandCard1Button')
    EnglandCard1ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard1Counter--
    localStorage.setItem('Ed1Counter', `${EnglandCard1Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards1')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Ed1BuyNo()
    })
}
// create cards and remove card
EnglandCard1Button.addEventListener('click', CreateEnglandCard1)
function CreateEnglandCard1(){
if(EnglandCard1Counter < 1){
  if(sm < 18){
    sm++
    EnglandCard1Counter++
    localStorage.setItem('Ed1Counter', `${EnglandCard1Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let EdCards1 = `
    <div class="CreateEnglandCard1">
            <img src="images/products/products-image/EdCard1.jpg" class="CreateEnglandCard1Img">
            <h4 class="CreateEnglandCard1Titles">Дикий зверь</h4>
            <p class="CreateEnglandCard1Text2">Акварель, бумага(50х80)</p>
            <p class="CreateEnglandCard1result">19 500 руб</p>
            <button class="CreateEnglandCard1Button">X</button>
          </div>
    `
    Ed1BuyYes()
    localStorage.setItem('EdCards1',`${EdCards1}`)
    basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards1')) 
    let divCards = document.querySelector('.CreateEnglandCard1')
    let EnglandCard1ButtonNet = document.querySelector('.CreateEnglandCard1Button')
    EnglandCard1ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard1Counter--
    localStorage.setItem('Ed1Counter', `${EnglandCard1Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards1')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed1BuyNo()
}) 
}}
}

// EdCards2
let EnglandCard2Counter = localStorage.getItem('Ed2Counter') || 0
let EnglandCard2Button = document.querySelector('.EnglandCard2Button')
// so that the card was on reboot
let EnglandCards2Div = localStorage.getItem('EdCards2')
if(localStorage.getItem('EdCards2') === null){
    console.log("пусто");
}else if(localStorage.getItem('EdCards2') !== ''){
  basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards2'))
  Ed2BuyYes()
  let divCards = document.querySelector('.CreateEnglandCard2')
    let EnglandCard2ButtonNet = document.querySelector('.CreateEnglandCard2Button')
    EnglandCard2ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard2Counter--
    localStorage.setItem('Ed2Counter', `${EnglandCard2Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards2')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed2BuyNo() 
    })
}
// create cards and remove card
EnglandCard2Button.addEventListener('click', CreateEnglandCard2)
function CreateEnglandCard2(){
if(EnglandCard2Counter < 1){
  if(sm < 18){
    sm++
    EnglandCard2Counter++
    localStorage.setItem('Ed2Counter', `${EnglandCard2Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let EdCards2 = `
    <div class="CreateEnglandCard2">
            <img src="images/products/products-image/EdCard2.jpg" class="CreateEnglandCard2Img">
            <h4 class="CreateEnglandCard2Titles">Скалистый берег</h4>
            <p class="CreateEnglandCard2Text2">Цветная литография(40х60)</p>
            <p class="CreateEnglandCard2result">17 500 руб</p>
            <button class="CreateEnglandCard2Button">X</button>
          </div>
    `
    Ed2BuyYes()
    localStorage.setItem('EdCards2',`${EdCards2}`)
    basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards2')) 
    let divCards = document.querySelector('.CreateEnglandCard2')
    let EnglandCard2ButtonNet = document.querySelector('.CreateEnglandCard2Button')
    EnglandCard2ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard2Counter--
    localStorage.setItem('Ed2Counter', `${EnglandCard2Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards2')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed2BuyNo()
   })
}}
}

// EdCards3
let EnglandCard3Counter = localStorage.getItem('Ed3Counter') || 0
let EnglandCard3Button = document.querySelector('.EnglandCard3Button')
// so that the card was on reboot
let EnglandCards3Div = localStorage.getItem('EdCards3')
if(localStorage.getItem('EdCards3') === null){
    console.log("пусто");
}else if(localStorage.getItem('EdCards3') !== ''){
  basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards3'))
  Ed3BuyYes()
  let divCards = document.querySelector('.CreateEnglandCard3')
    let EnglandCard3ButtonNet = document.querySelector('.CreateEnglandCard3Button')
    EnglandCard3ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard3Counter--
    localStorage.setItem('Ed3Counter', `${EnglandCard3Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards3')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`
    Ed3BuyNo()  
    })
}
// create cards and remove card
EnglandCard3Button.addEventListener('click', CreateEnglandCard3)
function CreateEnglandCard3(){
if(EnglandCard3Counter < 1){
  if(sm < 18){
    sm++
    EnglandCard3Counter++
    localStorage.setItem('Ed3Counter', `${EnglandCard3Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let EdCards3 = `
    <div class="CreateEnglandCard3">
            <img src="images/products/products-image/EdCard3.jpg" class="CreateEnglandCard3Img">
            <h4 class="CreateEnglandCard3Titles">Река  и горы</h4>
            <p class="CreateEnglandCard3Text2">Акварель, бумага(50х80)</p>
            <p class="CreateEnglandCard3result">20 500 руб</p>
            <button class="CreateEnglandCard3Button">X</button>
          </div>
    `
    Ed3BuyYes()
    localStorage.setItem('EdCards3',`${EdCards3}`)
    basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards3')) 
    let divCards = document.querySelector('.CreateEnglandCard3')
    let EnglandCard3ButtonNet = document.querySelector('.CreateEnglandCard3Button')
    EnglandCard3ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard3Counter--
    localStorage.setItem('Ed3Counter', `${EnglandCard3Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards3')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed3BuyNo()
   })
}}
}

// EdCards4
let EnglandCard4Counter = localStorage.getItem('Ed4Counter') || 0
let EnglandCard4Button = document.querySelector('.EnglandCard4Button')
// so that the card was on reboot
let EnglandCards4Div = localStorage.getItem('EdCards4')
if(localStorage.getItem('EdCards4') === null){
    console.log("пусто");
}else if(localStorage.getItem('EdCards4') !== ''){
  basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards4'))
  Ed4BuyYes()
  let divCards = document.querySelector('.CreateEnglandCard4')
    let EnglandCard4ButtonNet = document.querySelector('.CreateEnglandCard4Button')
    EnglandCard4ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard4Counter--
    localStorage.setItem('Ed4Counter', `${EnglandCard4Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards4')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Ed4BuyNo()
    })
}
// create cards and remove card
EnglandCard4Button.addEventListener('click', CreateEnglandCard4)
function CreateEnglandCard4(){
if(EnglandCard4Counter < 1){
  if(sm < 18){
    sm++
    EnglandCard4Counter++
    localStorage.setItem('Ed4Counter', `${EnglandCard4Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let EdCards4 = `
    <div class="CreateEnglandCard4">
            <img src="images/products/products-image/EdCard4.jpg" class="CreateEnglandCard4Img">
            <h4 class="CreateEnglandCard4Titles">Белый попугай</h4>
            <p class="CreateEnglandCard4Text2">Цветная литография(40х60)</p>
            <p class="CreateEnglandCard4result">15 500 руб</p>
            <button class="CreateEnglandCard4Button">X</button>
          </div>
    `
    Ed4BuyYes()
    localStorage.setItem('EdCards4',`${EdCards4}`)
    basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards4')) 
    let divCards = document.querySelector('.CreateEnglandCard4')
    let EnglandCard4ButtonNet = document.querySelector('.CreateEnglandCard4Button')
    EnglandCard4ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard4Counter--
    localStorage.setItem('Ed4Counter', `${EnglandCard4Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards4')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed4BuyNo()
   })
}}
}

// EdCards5
let EnglandCard5Counter = localStorage.getItem('Ed5Counter') || 0
let EnglandCard5Button = document.querySelector('.EnglandCard5Button')
// so that the card was on reboot
let EnglandCards5Div = localStorage.getItem('EdCards5')
if(localStorage.getItem('EdCards5') === null){
    console.log("пусто");
}else if(localStorage.getItem('EdCards5') !== ''){
  basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards5'))
  Ed5BuyYes()
  let divCards = document.querySelector('.CreateEnglandCard5')
    let EnglandCard5ButtonNet = document.querySelector('.CreateEnglandCard5Button')
    EnglandCard5ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard5Counter--
    localStorage.setItem('Ed5Counter', `${EnglandCard5Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards5')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Ed5BuyNo()
    })
}
// create cards and remove card
EnglandCard5Button.addEventListener('click', CreateEnglandCard5)
function CreateEnglandCard5(){
if(EnglandCard5Counter < 1){
  if(sm < 18){
    sm++
    EnglandCard5Counter++
    localStorage.setItem('Ed5Counter', `${EnglandCard5Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let EdCards5 = `
    <div class="CreateEnglandCard5">
            <img src="images/products/products-image/EdCard5.jpg" class="CreateEnglandCard5Img">
            <h4 class="CreateEnglandCard5Titles">Ночная рыба</h4>
            <p class="CreateEnglandCard5Text2">Бумага, акрил(50х80)</p>
            <p class="CreateEnglandCard5result">12 500 руб</p>
            <button class="CreateEnglandCard5Button">X</button>
          </div>
    `
    Ed5BuyYes()
    localStorage.setItem('EdCards5',`${EdCards5}`)
    basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards5')) 
    let divCards = document.querySelector('.CreateEnglandCard5')
    let EnglandCard5ButtonNet = document.querySelector('.CreateEnglandCard5Button')
    EnglandCard5ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard5Counter--
    localStorage.setItem('Ed5Counter', `${EnglandCard5Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards5')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed1BuyNo()
   })
}}
}

// EdCards6
let EnglandCard6Counter = localStorage.getItem('Ed6Counter') || 0
let EnglandCard6Button = document.querySelector('.EnglandCard6Button')
// so that the card was on reboot
let EnglandCards6Div = localStorage.getItem('EdCards6')
if(localStorage.getItem('EdCards6') === null){
    console.log("пусто");
}else if(localStorage.getItem('EdCards6') !== ''){
  basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards6'))
  Ed6BuyYes()
  let divCards = document.querySelector('.CreateEnglandCard6')
    let EnglandCard6ButtonNet = document.querySelector('.CreateEnglandCard6Button')
    EnglandCard6ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard6Counter--
    localStorage.setItem('Ed6Counter', `${EnglandCard6Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards6')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`
    Ed6BuyNo()  
    })
}
// create cards and remove card
EnglandCard6Button.addEventListener('click', CreateEnglandCard6)
function CreateEnglandCard6(){
if(EnglandCard6Counter < 1){
  if(sm < 18){
    sm++
    EnglandCard6Counter++
    localStorage.setItem('Ed6Counter', `${EnglandCard6Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let EdCards6 = `
    <div class="CreateEnglandCard6">
            <img src="images/products/products-image/EdCard6.jpg" class="CreateEnglandCard6Img">
            <h4 class="CreateEnglandCard6Titles">Рыжий кот</h4>
            <p class="CreateEnglandCard6Text2">Цветная литография(40х60)</p>
            <p class="CreateEnglandCard6result">21 000 руб</p>
            <button class="CreateEnglandCard6Button">X</button>
          </div>
    `
    Ed6BuyYes()
    localStorage.setItem('EdCards6',`${EdCards6}`)
    basketCards3.insertAdjacentHTML('beforeend', localStorage.getItem('EdCards6')) 
    let divCards = document.querySelector('.CreateEnglandCard6')
    let EnglandCard6ButtonNet = document.querySelector('.CreateEnglandCard6Button')
    EnglandCard6ButtonNet.addEventListener('click', function(){
    sm--  
    EnglandCard6Counter--
    localStorage.setItem('Ed6Counter', `${EnglandCard6Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards3.removeChild(divCards)
    localStorage.removeItem('EdCards6')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Ed6BuyNo()
   })
}}
}
