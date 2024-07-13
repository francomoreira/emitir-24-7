const { exec } = require('child_process');
const path = require('path');


const videoPath = path.join('D:', 'hidog', 'Documents', 'GitHub', 'emitir-24-7-stream', 'video', 'sample-video.mp4');
const audioPath = path.join('D:', 'hidog', 'Documents', 'GitHub', 'emitir-24-7-stream', 'audio', 'sample-audio.aac');

// comadno a ejecutar

const comando = `ffmpeg -stream_loop -1 -re -i ${videoPath} -re -i ${audioPath} -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -f flv -rtmp_buffer 100 rtmp://a.rtmp.youtube.com/live2/r94z-dy45-hx0d-8m0g-115y`


exec(comando, (error, stdout, stderr) => {
    if (error) { //  maneja cualquier error que pueda ocurrir durante la ejecución del comando.
        console.error(`errosin jeje: ${error}`);
        return;
    } 
    console.log(`salida estandar: ${stdout}`); // captura la salida estándar del comando (si la hay)
    console.error(`salida de error: ${stderr}`); // captura la salida de error del comando (si la hay).
});
