let smartphone = false;
const medias = {
    audio: false,
    video: {
        facingMode: {
            exact: "environment"
        }
    }
};

const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
    .catch(errorCallback);

function errorCallback(err) {
    const medias_2 = {
        audio : false,
        video : true
    };
    const promise = navigator.mediaDevices.getUserMedia(medias_2);
    promise.then(successCallback)
        .catch(errorCallback2);
};

function successCallback(stream) {
    video.srcObject = stream;
    console.log("stream :" + stream);
    console.log("video :" + video.width);
    console.log("video :" + video.height);
};

function errorCallback2(err) {
    alert(err);
}