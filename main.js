let whenCkickDate = new Date() 
let on_spot_enter_time
let checkingEnterObj = {
    value : "block"
}

let counterBg = document.querySelector('.counter-bg')
let EnterButton = document.querySelector('.counter-btn')
let screenValue = document.querySelector('.screen h1')
let Toolkit1H2 =  document.querySelector('.progress-tolkit-1 h2')
let Toolkit1 =  document.querySelector('.progress-tolkit-1')
let progressValue = document.querySelector('.progress-value') 
let progressPercentage = document.querySelector('.progress-percentage h1')
let styleBtn = document.querySelector('.style-btn')
let dateMenu = document.querySelector('.date h2')
let WhenClickH3 = document.querySelector('.when-click-bg h3')
let WhenClickH4 = document.querySelector('.currentTime h4')


let moneyCounter = 0
let daysCounter = 0

setInterval( ()=> {
    let date = new Date(); 
    dateMenu.innerText = date.toLocaleDateString('en-GB', { timeZone: 'Asia/Karachi' })
})

function progressPercentageFn() {
    progressPercentage.innerText =`${(daysCounter / 1460 * 100).toFixed(2)}%`
}

function Getting_local_storage_Value () {
    moneyCounter = parseInt(localStorage.getItem("moneyCounter")) || 0
    daysCounter = parseInt(localStorage.getItem("daysCounter")) || 0 

    WhenClickH3.innerText = localStorage.getItem("whenClickH3") || 0
    WhenClickH4.innerText = localStorage.getItem("WhenClickH4") || 0 

    let getting_enter_appere_localStorage = JSON.parse(localStorage.getItem("CheckingEnterObj")) || "block"

    if (getting_enter_appere_localStorage.value == "none") {
        RemovingElement()
    }else if (getting_enter_appere_localStorage.value == "block"){ 
        AddingElement()
    }
}
Getting_local_storage_Value() 


function setting_local_storage_Value_On_Screen() {
    screenValue.innerText = `${moneyCounter}RS`
    Toolkit1H2.innerText = `${daysCounter} Days` 

    progressValue.style.width = `${daysCounter / 1460 * 100}%`
    Toolkit1.style.marginLeft = `${daysCounter / 1460 * 100}%` 

    progressPercentage.innerText = `${(daysCounter / 1460 * 100).toFixed(2)}%`

    WhenClickH3.innerText =  whenCkickDate.toDateString()  
}
setting_local_storage_Value_On_Screen()

function Checking_Date_To_press_Enter() { 
    let getting_exect_date_to_Cmpre_Click_date_OBJECT =  new Date()
    let getting_exect_date_to_Cmpre_Click_date = getting_exect_date_to_Cmpre_Click_date_OBJECT.getUTCDate() 
    
    if (ClickTimerFun() + 1 == getting_exect_date_to_Cmpre_Click_date) {
        AddingElement()
    } 
}
Checking_Date_To_press_Enter()


EnterButton.addEventListener("click" , ()=> {
    screenValueFun()
    Toolkit1H2Fun()
    progressFun()
    progressPercentageFn()
    ClickTimerFun()
    RemovingElement()
    Enter_apperance_LocalStorage()

})

function screenValueFun() {
    moneyCounter += 50 
    screenValue.innerText = `${moneyCounter}RS`
    localStorage.setItem("moneyCounter" , moneyCounter)
} 

function Toolkit1H2Fun() {
    daysCounter += 1 
    Toolkit1H2.innerText = `${daysCounter} Days` 
    localStorage.setItem("daysCounter" , daysCounter)
}

function progressFun() {
    progressValue.style.width = `${daysCounter / 1460 * 100}%`
    Toolkit1.style.marginLeft = `${daysCounter / 1460 * 100}%`

    localStorage.setItem(" progressValueLocal" , progressValue.style.width)
    localStorage.setItem(" Toolkit1Local" ,  Toolkit1.style.marginLeft)
}

function ClickTimerFun() {
    whenCkickDate = new Date()

    WhenClickH3.innerText =  whenCkickDate.toLocaleDateString('en-GB', { timeZone: 'Asia/Karachi' })
    localStorage.setItem("whenClickH3" , whenCkickDate.toDateString())

    WhenClickH4.innerText = whenCkickDate.toLocaleTimeString()
    localStorage.setItem("WhenClickH4" , whenCkickDate.toLocaleTimeString())
    
    return on_spot_enter_time = whenCkickDate.getUTCDate() 
}

function RemovingElement() {
    EnterButton.classList.add("display-none")
    EnterButton.classList.remove("display-block")
}

function AddingElement() {
    EnterButton.classList.add("display-block")
    EnterButton.classList.remove("display-none")
} 

function Enter_apperance_LocalStorage() {
    if (EnterButton.classList.contains("display-none")) { 
        checkingEnterObj.value = "none"
        localStorage.setItem("CheckingEnterObj" , JSON.stringify(checkingEnterObj)) 
    }else if(EnterButton.classList.contains("display-block")){
        checkingEnterObj.value = "block"
        localStorage.setItem("CheckingEnterObj" , JSON.stringify(checkingEnterObj))
    }
}

