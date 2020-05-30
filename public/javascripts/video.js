let smartphone = false;
let medias;

if(smartphone){
    medias = {
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    };
}else{
    medias = {
        audio : false,
        video : true
    };
}

const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
    .catch(errorCallback);

function successCallback(stream) {
    video.srcObject = stream;
    console.log("stream :" + stream);
    console.log("video :" + video.width);
    console.log("video :" + video.height);
};

function errorCallback(err) {
    alert(err);
};