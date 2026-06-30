function updateClock(){
    const now =new Date();

    
    const hours=now.getHours();
    const meridiem=hours >= 12 ? "PM":"AM"
    const minutes=now.getMinutes();
    const secondes=now.getSeconds();
    const timeString=`${hours}:${minutes}:${secondes}:${meridiem}`;


    document.querySelector(".clock").textContent=timeString;

}
updateClock()
setInterval(updateClock, 1000);
