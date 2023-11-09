let sm = localStorage.getItem('sm') || 0;
let basketCards1 = document.querySelector('.basketProduct') 
let BasketDalieTitles = document.querySelector('.BasketDalieTitles')
let backetInfo = document.querySelector('.backetInfo')
backetInfo.innerHTML = `${localStorage.getItem('sm') || 0}`
// buy Cards and No buy Cards
let Fr1Yes = document.querySelector('.Fr1Yes')
let Fr2Yes = document.querySelector('.Fr2Yes')
let Fr3Yes = document.querySelector('.Fr3Yes')
let Fr4Yes = document.querySelector('.Fr4Yes')
let Fr5Yes = document.querySelector('.Fr5Yes')
let Fr6Yes = document.querySelector('.Fr6Yes')
function Fr1BuyYes(){
  setTimeout( function(){
   Fr1Yes.innerHTML = 'Успешно' 
  },1)
}
function Fr1BuyNo(){
  setTimeout( function(){
   Fr1Yes.innerHTML = 'В Корзину' 
  },1)
}
function Fr2BuyYes(){
  setTimeout( function(){
   Fr2Yes.innerHTML = 'Успешно' 
  },1)
}
function Fr2BuyNo(){
  setTimeout( function(){
   Fr2Yes.innerHTML = 'В Корзину' 
  },1)
}
function Fr3BuyYes(){
  setTimeout( function(){
   Fr3Yes.innerHTML = 'Успешно' 
  },1)
}
function Fr3BuyNo(){
  setTimeout( function(){
   Fr3Yes.innerHTML = 'В Корзину' 
  },1)
}
function Fr4BuyYes(){
  setTimeout( function(){
   Fr4Yes.innerHTML = 'Успешно' 
  },1)
}
function Fr4BuyNo(){
  setTimeout( function(){
   Fr4Yes.innerHTML = 'В Корзину' 
  },1)
}
function Fr5BuyYes(){
  setTimeout( function(){
   Fr5Yes.innerHTML = 'Успешно' 
  },1)
}
function Fr5BuyNo(){
  setTimeout( function(){
   Fr5Yes.innerHTML = 'В Корзину' 
  },1)
}
function Fr6BuyYes(){
  setTimeout( function(){
   Fr6Yes.innerHTML = 'Успешно' 
  },1)
}
function Fr6BuyNo(){
  setTimeout( function(){
   Fr6Yes.innerHTML = 'В Корзину' 
  },1)
}
// FrCards1
let FranceCard1Counter = localStorage.getItem('fr1Counter') || 0
let FranceCard1Button = document.querySelector('.FranceCard1Button')
// so that the card was on reboot
let francCards1Div = localStorage.getItem('FrCards1')
if(localStorage.getItem('FrCards1') === null){
    console.log("пусто");
}else if(localStorage.getItem('FrCards1') !== ''){
  basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards1'))
  Fr1BuyYes()
  let divCards = document.querySelector('.CreateFranceCard1')
    let FranceCard1ButtonNet = document.querySelector('.CreateFranceCard1Button')
    FranceCard1ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard1Counter--
    localStorage.setItem('fr1Counter', `${FranceCard1Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards1')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`
    Fr1BuyNo()  
    })
}
// create cards and remove card
FranceCard1Button.addEventListener('click', CreateFranceCard1)
function CreateFranceCard1(){
if(FranceCard1Counter < 1){
  if(sm < 18){
    sm++
    FranceCard1Counter++
    localStorage.setItem('fr1Counter', `${FranceCard1Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let FrCards1 = `
    <div class="CreateFranceCard1">
            <img src="images/products/products-image/frCard1.jpg" class="CreateFranceCard1Img">
            <h4 class="CreateFranceCard1Titles">Охота Амура</h4>
            <p class="CreateFranceCard1Text2">Холст, масло(50х80)</p>
            <p class="CreateFranceCard1result">14 500 руб</p>
            <button class="CreateFranceCard1Button">X</button>
          </div>
    `
    Fr1BuyYes()
    localStorage.setItem('FrCards1',`${FrCards1}`)
    basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards1')) 
    let divCards = document.querySelector('.CreateFranceCard1')
    let FranceCard1ButtonNet = document.querySelector('.CreateFranceCard1Button')
    FranceCard1ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard1Counter--
    localStorage.setItem('fr1Counter', `${FranceCard1Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards1')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr1BuyNo()
   })
  }}
// }}else if(FranceCard1Counter == 1){СДЕЛАТЬ КНОПКУ ПРИ ПОВТОРНОМ НАЖАТИ И ЧТО БПРИ НАЖАТИИ БЫЛО НАДПИСЬ УСПЕШНО}
}

// FrCards2
let FranceCard2Counter = localStorage.getItem('fr2Counter') || 0
let FranceCard2Button = document.querySelector('.FranceCard2Button')
// so that the card was on reboot
let francCards2Div = localStorage.getItem('FrCards2')
if(localStorage.getItem('FrCards2') === null){
    console.log("пусто");
}else if(localStorage.getItem('FrCards2') !== ''){
  basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards2'))
  Fr2BuyYes()
  let divCards = document.querySelector('.CreateFranceCard2')
    let FranceCard2ButtonNet = document.querySelector('.CreateFranceCard2Button')
    FranceCard2ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard2Counter--
    localStorage.setItem('fr2Counter', `${FranceCard2Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards2')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Fr2BuyNo()
    })
}
// create cards and remove card
FranceCard2Button.addEventListener('click', CreateFranceCard2)
function CreateFranceCard2(){
if(FranceCard2Counter < 1){
  if(sm < 18){
    sm++
    FranceCard2Counter++
    localStorage.setItem('fr2Counter', `${FranceCard2Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let FrCards2 = `
    <div class="CreateFranceCard2">
            <img src="images/products/products-image/frCard2.jpg" class="CreateFranceCard2Img">
            <h4 class="CreateFranceCard2Titles">Дама с собачкой</h4>
            <p class="CreateFranceCard2Text2">Акрил, бумага(50х80)</p>
            <p class="CreateFranceCard2result">16 500 руб</p>
            <button class="CreateFranceCard2Button">X</button>
          </div>
    `
    Fr2BuyYes()
    localStorage.setItem('FrCards2',`${FrCards2}`)
    basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards2')) 
    let divCards = document.querySelector('.CreateFranceCard2')
    let FranceCard2ButtonNet = document.querySelector('.CreateFranceCard2Button')
    FranceCard2ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard2Counter--
    localStorage.setItem('fr2Counter', `${FranceCard2Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards2')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr2BuyNo()
   })
}}
}

// FrCards3
let FranceCard3Counter = localStorage.getItem('fr3Counter') || 0
let FranceCard3Button = document.querySelector('.FranceCard3Button')
// so that the card was on reboot
let francCards3Div = localStorage.getItem('FrCards3')
if(localStorage.getItem('FrCards3') === null){
    console.log("пусто");
}else if(localStorage.getItem('FrCards3') !== ''){
  basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards3'))
  Fr3BuyYes()
  let divCards = document.querySelector('.CreateFranceCard3')
    let FranceCard3ButtonNet = document.querySelector('.CreateFranceCard3Button')
    FranceCard3ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard3Counter--
    localStorage.setItem('fr3Counter', `${FranceCard3Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards3')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr3BuyNo() 
    })
}
// create cards and remove card
FranceCard3Button.addEventListener('click', CreateFranceCard3)
function CreateFranceCard3(){
if(FranceCard3Counter < 1){
  if(sm < 18){
    sm++
    FranceCard3Counter++
    localStorage.setItem('fr3Counter', `${FranceCard3Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let FrCards3 = `
    <div class="CreateFranceCard3">
            <img src="images/products/products-image/frCard3.jpg" class="CreateFranceCard3Img">
            <h4 class="CreateFranceCard3Titles">Процедура</h4>
            <p class="CreateFranceCard3Text2">Цветная литография(40х60)</p>
            <p class="CreateFranceCard3result">20 000 руб</p>
            <button class="CreateFranceCard3Button">X</button>
          </div>
    `
    Fr3BuyYes()
    localStorage.setItem('FrCards3',`${FrCards3}`)
    basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards3')) 
    let divCards = document.querySelector('.CreateFranceCard3')
    let FranceCard3ButtonNet = document.querySelector('.CreateFranceCard3Button')
    FranceCard3ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard3Counter--
    localStorage.setItem('fr3Counter', `${FranceCard3Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards3')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr3BuyNo()
   })
}}
}

// FrCards4
let FranceCard4Counter = localStorage.getItem('fr4Counter') || 0
let FranceCard4Button = document.querySelector('.FranceCard4Button')
// so that the card was on reboot
let francCards4Div = localStorage.getItem('FrCards4')
if(localStorage.getItem('FrCards4') === null){
    console.log("пусто");
}else if(localStorage.getItem('FrCards4') !== ''){
  basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards4'))
  Fr4BuyYes()
  let divCards = document.querySelector('.CreateFranceCard4')
    let FranceCard4ButtonNet = document.querySelector('.CreateFranceCard4Button')
    FranceCard4ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard4Counter--
    localStorage.setItem('fr4Counter', `${FranceCard4Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards4')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Fr4BuyNo()
    })
}
// create cards and remove card
FranceCard4Button.addEventListener('click', CreateFranceCard4)
function CreateFranceCard4(){
if(FranceCard4Counter < 1){
  if(sm < 18){
    sm++
    FranceCard4Counter++
    localStorage.setItem('fr4Counter', `${FranceCard4Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let FrCards4 = `
    <div class="CreateFranceCard4">
            <img src="images/products/products-image/frCard4.jpg" class="CreateFranceCard4Img">
            <h4 class="CreateFranceCard4Titles">Роза</h4>
            <p class="CreateFranceCard4Text2">Бумага, акрил(50х80)</p>
            <p class="CreateFranceCard4result">12 000 руб</p>
            <button class="CreateFranceCard4Button">X</button>
          </div>
    `
    Fr4BuyYes()
    localStorage.setItem('FrCards4',`${FrCards4}`)
    basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards4')) 
    let divCards = document.querySelector('.CreateFranceCard4')
    let FranceCard4ButtonNet = document.querySelector('.CreateFranceCard4Button')
    FranceCard4ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard4Counter--
    localStorage.setItem('fr4Counter', `${FranceCard4Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards4')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr4BuyNo()
   })
}}
}

// FrCards5
let FranceCard5Counter = localStorage.getItem('fr5Counter') || 0
let FranceCard5Button = document.querySelector('.FranceCard5Button')
// so that the card was on reboot
let francCards5Div = localStorage.getItem('FrCards5')
if(localStorage.getItem('FrCards5') === null){
    console.log("пусто");
}else if(localStorage.getItem('FrCards5') !== ''){
  basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards5'))
  Fr5BuyYes()
  let divCards = document.querySelector('.CreateFranceCard5')
    let FranceCard5ButtonNet = document.querySelector('.CreateFranceCard5Button')
    FranceCard5ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard5Counter--
    localStorage.setItem('fr5Counter', `${FranceCard5Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards5')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Fr5BuyNo()
    })
}
// create cards and remove card
FranceCard5Button.addEventListener('click', CreateFranceCard5)
function CreateFranceCard5(){
if(FranceCard5Counter < 1){
  if(sm < 18){
    sm++
    FranceCard5Counter++
    localStorage.setItem('fr5Counter', `${FranceCard5Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let FrCards5 = `
    <div class="CreateFranceCard5">
            <img src="images/products/products-image/frCard5.jpg" class="CreateFranceCard5Img">
            <h4 class="CreateFranceCard5Titles">Птичья трапеза</h4>
            <p class="CreateFranceCard5Text2">Цветная литография(40х60)</p>
            <p class="CreateFranceCard5result">22 500 руб</p>
            <button class="CreateFranceCard5Button">X</button>
          </div>
    `
    Fr5BuyYes()
    localStorage.setItem('FrCards5',`${FrCards5}`)
    basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards5')) 
    let divCards = document.querySelector('.CreateFranceCard5')
    let FranceCard5ButtonNet = document.querySelector('.CreateFranceCard5Button')
    FranceCard5ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard5Counter--
    localStorage.setItem('fr5Counter', `${FranceCard5Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards5')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr5BuyNo()
   })
}}
}

// FrCards6
let FranceCard6Counter = localStorage.getItem('fr6Counter') || 0
let FranceCard6Button = document.querySelector('.FranceCard6Button')
// so that the card was on reboot
let francCards6Div = localStorage.getItem('FrCards6')
if(localStorage.getItem('FrCards6') === null){
    console.log("пусто");
}else if(localStorage.getItem('FrCards6') !== ''){
  basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards6'))
  Fr6BuyYes()
  let divCards = document.querySelector('.CreateFranceCard6')
    let FranceCard6ButtonNet = document.querySelector('.CreateFranceCard6Button')
    FranceCard6ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard6Counter--
    localStorage.setItem('fr6Counter', `${FranceCard6Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards6')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Fr6BuyNo()
    })
}
// create cards and remove card
FranceCard6Button.addEventListener('click', CreateFranceCard6)
function CreateFranceCard6(){
if(FranceCard6Counter < 1){
  if(sm < 18){
    sm++
    FranceCard6Counter++
    localStorage.setItem('fr6Counter', `${FranceCard6Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let FrCards6 = `
    <div class="CreateFranceCard6">
            <img src="images/products/products-image/frCard6.jpg" class="CreateFranceCard6Img">
            <h4 class="CreateFranceCard6Titles">Пейзаж с рыбой</h4>
            <p class="CreateFranceCard6Text2">Цветная литография(40х60)</p>
            <p class="CreateFranceCard6result">20 500 руб</p>
            <button class="CreateFranceCard6Button">X</button>
          </div>
    `
    Fr6BuyYes()
    localStorage.setItem('FrCards6',`${FrCards6}`)
    basketCards1.insertAdjacentHTML('beforeend', localStorage.getItem('FrCards6')) 
    let divCards = document.querySelector('.CreateFranceCard6')
    let FranceCard6ButtonNet = document.querySelector('.CreateFranceCard6Button')
    FranceCard6ButtonNet.addEventListener('click', function(){
    sm--  
    FranceCard6Counter--
    localStorage.setItem('fr6Counter', `${FranceCard6Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards1.removeChild(divCards)
    localStorage.removeItem('FrCards6')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Fr6BuyNo()
   })
}}
}
