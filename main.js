var speed = window.webkitSpeechRecognition;
var recognition = new speed();
function start(){
    document.getElementById("giveAid").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (EVENT){
    console.log(EVENT);
    content = EVENT.results[0][0].transcript
    console.log(content)  
    document.getElementById("giveAid").innerHTML = content 
}
