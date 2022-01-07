function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});

//   Add one more parameter to ml5.soundClassifier() function which will check if the 1st result which is the sound that model has heard with the highest accuracy has confidence more that 0.7
//   For this use probabilityThreshold and assign it value 0.7
// Note that probabilityThreshold comes under the options parameter so should be passed inside {}
  classifier = ml5.soundClassifier('SpeechCommands18w ',modelReady);
}

function modelReady(){
  var myAudio = new Audio('notification.mp3');
  myAudio.play();
  
  classifier.classify(gotResults);
}


function gotResults(error, results) {
  console.log(results);
}