var video = document.getElementById('video');

//Requests camera & microphone access
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // This gets the audio also. If you don't want to retrieve the audio then remove the audio: true attribute.
    navigator.mediaDevices.getUserMedia({ video: true , audio: true}).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}