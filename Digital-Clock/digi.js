let div = document.getElementById("clock");

setInterval(()=>{
    div.textContent = `Time: ${new Date().toLocaleTimeString('en-US',{
    hour12: true
})}`;
},1000);

