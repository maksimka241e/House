let basketCards2 = document.querySelector('.basketProduct') 
// GrCards1
let GermanyCard1Counter = localStorage.getItem('Gr1Counter') || 0
let GermanyCard1Button = document.querySelector('.GermanyCard1Button')
// buy Cards and No buy Cards
let Gr1Yes = document.querySelector('.Gr1Yes')
let Gr2Yes = document.querySelector('.Gr2Yes')
let Gr3Yes = document.querySelector('.Gr3Yes')
let Gr4Yes = document.querySelector('.Gr4Yes')
let Gr5Yes = document.querySelector('.Gr5Yes')
let Gr6Yes = document.querySelector('.Gr6Yes')
function Gr1BuyYes(){
  setTimeout( function(){
   Gr1Yes.innerHTML = 'Успешно' 
  },1)
}
function Gr1BuyNo(){
  setTimeout( function(){
   Gr1Yes.innerHTML = 'В Корзину' 
  },1)
}
function Gr2BuyYes(){
  setTimeout( function(){
   Gr2Yes.innerHTML = 'Успешно' 
  },1)
}
function Gr2BuyNo(){
  setTimeout( function(){
   Gr2Yes.innerHTML = 'В Корзину' 
  },1)
}
function Gr3BuyYes(){
  setTimeout( function(){
   Gr3Yes.innerHTML = 'Успешно' 
  },1)
}
function Gr3BuyNo(){
  setTimeout( function(){
   Gr3Yes.innerHTML = 'В Корзину' 
  },1)
}
function Gr4BuyYes(){
  setTimeout( function(){
   Gr4Yes.innerHTML = 'Успешно' 
  },1)
}
function Gr4BuyNo(){
  setTimeout( function(){
   Gr4Yes.innerHTML = 'В Корзину' 
  },1)
}
function Gr5BuyYes(){
  setTimeout( function(){
   Gr5Yes.innerHTML = 'Успешно' 
  },1)
}
function Gr5BuyNo(){
  setTimeout( function(){
   Gr5Yes.innerHTML = 'В Корзину' 
  },1)
}
function Gr6BuyYes(){
  setTimeout( function(){
   Gr6Yes.innerHTML = 'Успешно' 
  },1)
}
function Gr6BuyNo(){
  setTimeout( function(){
   Gr6Yes.innerHTML = 'В Корзину' 
  },1)
}
// so that the card was on reboot
let GermanyCards1Div = localStorage.getItem('GrCards1')
if(localStorage.getItem('GrCards1') === null){
    console.log("пусто");
}else if(localStorage.getItem('GrCards1') !== ''){
  basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards1'))
  Gr1BuyYes()
  let divCards = document.querySelector('.CreateGermanyCard1')
    let GermanyCard1ButtonNet = document.querySelector('.CreateGermanyCard1Button')
    GermanyCard1ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard1Counter--
    localStorage.setItem('Gr1Counter', `${GermanyCard1Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards1')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Gr1BuyNo()
    })
}
// create cards and remove card
GermanyCard1Button.addEventListener('click', CreateGermanyCard1)
function CreateGermanyCard1(){
if(GermanyCard1Counter < 1){
  if(sm < 18){
    sm++
    GermanyCard1Counter++
    localStorage.setItem('Gr1Counter', `${GermanyCard1Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let GrCards1 = `
    <div class="CreateGermanyCard1">
            <img src="images/products/products-image/GrCard1.jpg" class="CreateGermanyCard1Img">
            <h4 class="CreateGermanyCard1Titles">Над городом</h4>
            <p class="CreateGermanyCard1Text2">Цветная литография(40х60)</p>
            <p class="CreateGermanyCard1result">16 000 руб</p>
            <button class="CreateGermanyCard1Button">X</button>
          </div>
    `
    Gr1BuyYes()
    localStorage.setItem('GrCards1',`${GrCards1}`)
    basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards1')) 
    let divCards = document.querySelector('.CreateGermanyCard1')
    let GermanyCard1ButtonNet = document.querySelector('.CreateGermanyCard1Button')
    GermanyCard1ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard1Counter--
    localStorage.setItem('Gr1Counter', `${GermanyCard1Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards1')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr1BuyNo()
   })
}}
}

// GrCards2
let GermanyCard2Counter = localStorage.getItem('Gr2Counter') || 0
let GermanyCard2Button = document.querySelector('.GermanyCard2Button')
// so that the card was on reboot
let GermanyCards2Div = localStorage.getItem('GrCards2')
if(localStorage.getItem('GrCards2') === null){
    console.log("пусто");
}else if(localStorage.getItem('GrCards2') !== ''){
  basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards2'))
  Gr2BuyYes()
  let divCards = document.querySelector('.CreateGermanyCard2')
    let GermanyCard2ButtonNet = document.querySelector('.CreateGermanyCard2Button')
    GermanyCard2ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard2Counter--
    localStorage.setItem('Gr2Counter', `${GermanyCard2Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards2')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr2BuyNo() 
    })
}
// create cards and remove card
GermanyCard2Button.addEventListener('click', CreateGermanyCard2)
function CreateGermanyCard2(){
if(GermanyCard2Counter < 1){
  if(sm < 18){
    sm++
    GermanyCard2Counter++
    localStorage.setItem('Gr2Counter', `${GermanyCard2Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let GrCards2 = `
    <div class="CreateGermanyCard2">
            <img src="images/products/products-image/GrCard2.jpg" class="CreateGermanyCard2Img">
            <h4 class="CreateGermanyCard2Titles">Птенцы</h4>
            <p class="CreateGermanyCard2Text2">Холст, масло(50х80)</p>
            <p class="CreateGermanyCard2result">14 500 руб</p>
            <button class="CreateGermanyCard2Button">X</button>
          </div>
    `
    Gr2BuyYes()
    localStorage.setItem('GrCards2',`${GrCards2}`)
    basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards2')) 
    let divCards = document.querySelector('.CreateGermanyCard2')
    let GermanyCard2ButtonNet = document.querySelector('.CreateGermanyCard2Button')
    GermanyCard2ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard2Counter--
    localStorage.setItem('Gr2Counter', `${GermanyCard2Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards2')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr2BuyNo()
   })
}}
}

// GrCards3
let GermanyCard3Counter = localStorage.getItem('Gr3Counter') || 0
let GermanyCard3Button = document.querySelector('.GermanyCard3Button')
// so that the card was on reboot
let GermanyCards3Div = localStorage.getItem('GrCards3')
if(localStorage.getItem('GrCards3') === null){
    console.log("пусто");
}else if(localStorage.getItem('GrCards3') !== ''){
  basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards3'))
  Gr3BuyYes()
  let divCards = document.querySelector('.CreateGermanyCard3')
    let GermanyCard3ButtonNet = document.querySelector('.CreateGermanyCard3Button')
    GermanyCard3ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard3Counter--
    localStorage.setItem('Gr3Counter', `${GermanyCard3Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards3')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Gr3BuyNo()
    })
}
// create cards and remove card
GermanyCard3Button.addEventListener('click', CreateGermanyCard3)
function CreateGermanyCard3(){
if(GermanyCard3Counter < 1){
  if(sm < 18){
    sm++
    GermanyCard3Counter++
    localStorage.setItem('Gr3Counter', `${GermanyCard3Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let GrCards3 = `
    <div class="CreateGermanyCard3">
            <img src="images/products/products-image/GrCard3.jpg" class="CreateGermanyCard3Img">
            <h4 class="CreateGermanyCard3Titles">Среди листьев</h4>
            <p class="CreateGermanyCard3Text2">Цветная литография(40х60)</p>
            <p class="CreateGermanyCard3result">20 000 руб</p>
            <button class="CreateGermanyCard3Button">X</button>
          </div>
    `
    Gr3BuyYes()
    localStorage.setItem('GrCards3',`${GrCards3}`)
    basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards3')) 
    let divCards = document.querySelector('.CreateGermanyCard3')
    let GermanyCard3ButtonNet = document.querySelector('.CreateGermanyCard3Button')
    GermanyCard3ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard3Counter--
    localStorage.setItem('Gr3Counter', `${GermanyCard3Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards3')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr3BuyNo()
   })
}}
}

// GrCards4
let GermanyCard4Counter = localStorage.getItem('Gr4Counter') || 0
let GermanyCard4Button = document.querySelector('.GermanyCard4Button')
// so that the card was on reboot
let GermanyCards4Div = localStorage.getItem('GrCards4')
if(localStorage.getItem('GrCards4') === null){
    console.log("пусто");
}else if(localStorage.getItem('GrCards4') !== ''){
  basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards4'))
  Gr4BuyYes()
  let divCards = document.querySelector('.CreateGermanyCard4')
    let GermanyCard4ButtonNet = document.querySelector('.CreateGermanyCard4Button')
    GermanyCard4ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard4Counter--
    localStorage.setItem('Gr4Counter', `${GermanyCard4Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards4')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`
    Gr4BuyNo()  
    })
}
// create cards and remove card
GermanyCard4Button.addEventListener('click', CreateGermanyCard4)
function CreateGermanyCard4(){
if(GermanyCard4Counter < 1){
  if(sm < 18){
    sm++
    GermanyCard4Counter++
    localStorage.setItem('Gr4Counter', `${GermanyCard4Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let GrCards4 = `
    <div class="CreateGermanyCard4">
            <img src="images/products/products-image/GrCard4.jpg" class="CreateGermanyCard4Img">
            <h4 class="CreateGermanyCard4Titles">Яркая птица</h4>
            <p class="CreateGermanyCard4Text2">Цветная литография(40х60)</p>
            <p class="CreateGermanyCard4result">13 000 руб</p>
            <button class="CreateGermanyCard4Button">X</button>
          </div>
    `
    Gr4BuyYes()
    localStorage.setItem('GrCards4',`${GrCards4}`)
    basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards4')) 
    let divCards = document.querySelector('.CreateGermanyCard4')
    let GermanyCard4ButtonNet = document.querySelector('.CreateGermanyCard4Button')
    GermanyCard4ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard4Counter--
    localStorage.setItem('Gr4Counter', `${GermanyCard4Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards4')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr4BuyNo()
   })
}}
}

// GrCards5
let GermanyCard5Counter = localStorage.getItem('Gr5Counter') || 0
let GermanyCard5Button = document.querySelector('.GermanyCard5Button')
// so that the card was on reboot
let GermanyCards5Div = localStorage.getItem('GrCards5')
if(localStorage.getItem('GrCards5') === null){
    console.log("пусто");
}else if(localStorage.getItem('GrCards5') !== ''){
  basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards5'))
  Gr5BuyYes()
  let divCards = document.querySelector('.CreateGermanyCard5')
    let GermanyCard5ButtonNet = document.querySelector('.CreateGermanyCard5Button')
    GermanyCard5ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard5Counter--
    localStorage.setItem('Gr5Counter', `${GermanyCard5Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards5')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr5BuyNo() 
    })
}
// create cards and remove card
GermanyCard5Button.addEventListener('click', CreateGermanyCard5)
function CreateGermanyCard5(){
if(GermanyCard5Counter < 1){
  if(sm < 18){
    sm++
    GermanyCard5Counter++
    localStorage.setItem('Gr5Counter', `${GermanyCard5Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let GrCards5 = `
    <div class="CreateGermanyCard5">
            <img src="images/products/products-image/GrCard5.jpg" class="CreateGermanyCard5Img">
            <h4 class="CreateGermanyCard5Titles">Дятлы</h4>
            <p class="CreateGermanyCard5Text2">Бумага, акрил(50х80)</p>
            <p class="CreateGermanyCard5result">22 000 руб</p>
            <button class="CreateGermanyCard5Button">X</button>
          </div>
    `
    Gr5BuyYes()
    localStorage.setItem('GrCards5',`${GrCards5}`)
    basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards5')) 
    let divCards = document.querySelector('.CreateGermanyCard5')
    let GermanyCard5ButtonNet = document.querySelector('.CreateGermanyCard5Button')
    GermanyCard5ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard5Counter--
    localStorage.setItem('Gr5Counter', `${GermanyCard5Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards5')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr5BuyNo()
   })
}}
}

// GrCards6
let GermanyCard6Counter = localStorage.getItem('Gr6Counter') || 0
let GermanyCard6Button = document.querySelector('.GermanyCard6Button')
// so that the card was on reboot
let GermanyCards6Div = localStorage.getItem('GrCards6')
if(localStorage.getItem('GrCards6') === null){
    console.log("пусто");
}else if(localStorage.getItem('GrCards6') !== ''){
  basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards6'))
  Gr6BuyYes()
  let divCards = document.querySelector('.CreateGermanyCard6')
    let GermanyCard6ButtonNet = document.querySelector('.CreateGermanyCard6Button')
    GermanyCard6ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard6Counter--
    localStorage.setItem('Gr6Counter', `${GermanyCard6Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards6')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    Gr6BuyNo()
    })
}
// create cards and remove card
GermanyCard6Button.addEventListener('click', CreateGermanyCard6)
function CreateGermanyCard6(){
if(GermanyCard6Counter < 1){
  if(sm < 18){
    sm++
    GermanyCard6Counter++
    localStorage.setItem('Gr6Counter', `${GermanyCard6Counter}`)
    localStorage.setItem('sm', `${sm}`)
    backetInfo.innerHTML = `${localStorage.getItem('sm')}`  
    let GrCards6 = `
    <div class="CreateGermanyCard6">
            <img src="images/products/products-image/GrCard6.jpg" class="CreateGermanyCard6Img">
            <h4 class="CreateGermanyCard6Titles">Большие воды</h4>
            <p class="CreateGermanyCard6Text2">Бумага, акрил(50х80)</p>
            <p class="CreateGermanyCard6result">23 000 руб</p>
            <button class="CreateGermanyCard6Button">X</button>
          </div>
    `
    Gr6BuyYes()
    localStorage.setItem('GrCards6',`${GrCards6}`)
    basketCards2.insertAdjacentHTML('beforeend', localStorage.getItem('GrCards6')) 
    let divCards = document.querySelector('.CreateGermanyCard6')
    let GermanyCard6ButtonNet = document.querySelector('.CreateGermanyCard6Button')
    GermanyCard6ButtonNet.addEventListener('click', function(){
    sm--  
    GermanyCard6Counter--
    localStorage.setItem('Gr6Counter', `${GermanyCard6Counter}`)
    localStorage.setItem('sm', `${sm}`) 
    basketCards2.removeChild(divCards)
    localStorage.removeItem('GrCards6')
    backetInfo.innerHTML = `${localStorage.getItem('sm')}` 
    Gr6BuyNo()
   })
}}
}