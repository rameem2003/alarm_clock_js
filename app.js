const selectMenu = document.querySelectorAll("select");
const mainClockPanel = document.querySelector("h1");
const setTimePanel = document.querySelector(".set_time")
const setAlaremBtn = document.getElementById("setBtn");
const clearBtn = document.getElementById("clearBtn");

let alarmTime;
let alarmTone = new Audio("./assets/ring_tone.mp3")

for(let i = 12; i > 0; i--){
    if(i < 10){
        i = `0${i}`
    }
    let option = `<option value="${i}">${i}</option>`

    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

for(let i = 59; i > 0; i--){
    if(i < 10){
        i = `0${i}`
    }
    let option = `<option value="${i}">${i}</option>`

    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

for(let i = 2; i > 0; i--){
    let ampm;

    if(i == 1){
        ampm = "AM"
    }else{
        ampm = "PM"
    }
    let option = `<option value="${ampm}">${ampm}</option>`

    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}


// main clock panel
setInterval(() => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let ap = "AM";

    if(h >= 12){
        ap = "PM"
    }else{
        ap = "AM"
    }

    if(h > 12){
        h = h - 12;
    }

    if(h < 10){
        h = `0${h}`;
    }

    if(m < 10){
        m = `0${m}`;
    }

    if(s < 10){
        s = `0${s}`;
    }

    

    mainClockPanel.innerHTML = `${h} : ${m} : ${s} ${ap}`;

    if(alarmTime == `${h} : ${m} ${ap}`){
        alarmTone.play();
        console.log("Alarm");
    }
}, 1000)

const setAlarm = () => {
    let setTime = `${selectMenu[0].value} : ${selectMenu[1].value} ${selectMenu[2].value}`

    if(setTime.includes("Hour") || setTime.includes("Minite") || setTime.includes("am/pm")){
        alert("Please select a valid time")
    }

    setTimePanel.classList.add("disable");
    setAlaremBtn.style.display = "none";
    clearBtn.style.display = "initial"
    alarmTime = setTime;


}

setAlaremBtn.addEventListener("click", setAlarm);
clearBtn.addEventListener("click", () => {
    window.location.reload();
})