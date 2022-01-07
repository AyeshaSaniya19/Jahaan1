var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

if(screen.width<992){
    document.getElementsByTagName("body").style.width="100%";
    document.getElementsByTagName("body").style.height="100%";
}


function playSound(){
	
		x.play();
	
	
}
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();


function next(){

	window.location="clipsindex.html";

	var synth=window.speechSynthesis;
  
    speak_data=" Some moments of jahan to put a smile on your face "

    var utterThis = new SpeechSynthesisUtterance(speak_data);
  
    synth.speak(utterThis);
}
function go(){
    window.location="CARD.HTML";
}
function home(){
    window.location="index.html";
}
