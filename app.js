let input = document.getElementById("side-search")

input.addEventListener("input", search)

function search(e) {
    const filter = e.target.value.toUpperCase();
    const chatItems = document.getElementById("side-chat-area");
    const chats = chatItems.getElementsByTagName("div");

    for (let i = 0; i < chats.length; i++) {
        let match = chats[i].getElementsByTagName("p")[0];
        if (match) {
            let textVal = match.textContent || match.innerHTML
            if (textVal.toUpperCase().indexOf(filter) > -1) {
                chats[i].style.display = ""
            } else {
                chats[i].style.display = "none"

            }
        }

    }
}


// for setting``~
$("#settings").click(() => {
    $(".side-setting-inner").toggle(500)
    
})



// for commSection

let backBtn = document.querySelectorAll(".backBtn");
let statusComm = document.querySelector(".status-window")
let statusBtn = document.getElementById("group-btn")

statusBtn.addEventListener("click", () => {
    statusComm.classList.add("enteryAnimation")
})




// for profile sec
let proBtn = document.querySelector(".profile-sec");
let proBtn1 = document.querySelector(".profile-sec1");
let windowPro = document.querySelector(".window-profile")
let chatProSec = document.querySelector(".chat-sec-profile");




// back btn function



const backB = (para) => {
    backBtn.forEach(item => {
        item.addEventListener("click", () => {
            para.classList.add("backAnimation")
            para.classList.remove("enteryAnimation")
        })
    })
} 


const profileBtn = (para,ele) =>{
        para.addEventListener("click",()=>{
            console.log("clicked")
            ele.classList.add("enteryAnimation")
        })
}

let firstChat = document.getElementById("first-chat-click");
let chatMainCont = document.querySelector(".full-chat-container")
let welcomText = document.querySelector("chat-welcome-text")



firstChat.addEventListener("click",()=>{
    chatMainCont.style.display = "block"
    welcomText.style.display = "none"
})



backB(statusComm);
backB(windowPro)
backB(chatProSec)

profileBtn(proBtn,windowPro)
profileBtn(proBtn1,chatProSec)



