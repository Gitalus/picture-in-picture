const videoElement = document.getElementById('video');
const buttonStart = document.getElementById('button');

// Prompt to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
        console.log('whoops, error here:', error);
    }
}

buttonStart.addEventListener('click', async () => {
    // Disable Button
    buttonStart.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    buttonStart.disabled = false;
});

// Onload
selectMediaStream();