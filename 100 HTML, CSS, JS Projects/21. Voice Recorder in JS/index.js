const mic_btn = document.querySelector('#mic');
const playback = document.querySelector('.playback');

let can_record = false;
let is_recording = false;

let recorder = null;

let chunks = [];

const setupAudio = () => {
    console.log("Setup");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(setupStream)
            .catch(err => {
                console.log(err);
            })
    }
}

const setupStream = (stream) => {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
        chunks.push(e.data);
    }

    recorder.onstop = (e) => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
        const audioUrl = window.URL.createObjectURL(blob);
        playback.src = audioUrl;
    }
    can_record = true;
}

setupAudio();

mic_btn.addEventListener('click', () => {
    if (!can_record) return;

    is_recording = !is_recording;

    mic_btn.innerText = is_recording ? 'Stop Recording' : 'Start Recording';

    if (is_recording) {
        recorder.start();
    } else {
        recorder.stop();
    }
});