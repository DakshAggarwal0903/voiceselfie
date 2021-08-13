var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var idk=document.getElementById("textbox");
function rec(){
    idk.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){console.log(event);
var z= event.results[0][0].transcript
idk.innerHTML=z
speak();
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data= "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        zzz();
        k();
    },5000);
    
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:360,
    image_format:'jpg',
    jpg_quality:100
});
function zzz(){
    Webcam.snap(function(c){
    document.getElementById("result").innerHTML='<img id="c" src="'+c+'"/>';
    });
}
function k(){
    k = document.getElementById("k");
    c = document.getElementById("c").src;
    k.href=c;
    k.click();
}