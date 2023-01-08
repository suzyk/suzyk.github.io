const clock = document.querySelector("h2#clock");
let timelyGreeting = "Hello";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    //const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;

    if (date.getHours() >= 5 && date.getHours() < 12){
        timelyGreeting = "Good morning";
    }else if (date.getHours() < 18) {
        timelyGreeting = "Good afternoon";
    }else {
        timelyGreeting = "Good evening";
    }
    if (document.readyState === "complete"){
        updateGreeting(timelyGreeting);
    }
    

}
getClock();
setInterval(getClock,1000);