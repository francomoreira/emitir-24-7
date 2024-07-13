const { exec } = require('child_process');
const path = require('path');
const fs = require('fs').promises;

const videoPath = path.join('D:', 'hidog', 'Documents', 'GitHub', 'emitir-24-7', 'video', 'sample-video.mp4');
const audioPath = path.join('D:', 'hidog', 'Documents', 'GitHub', 'emitir-24-7', 'audio');
const directoryAudioPath = path.join(__dirname, 'audio');


// obtener un array con los nombres de todos los archivos de la carpeta audio

let arraySongs = [];

// Función para actualizar el array de nombres de archivos periódicamente
async function updateAudioFiles() {
    try {
        const files = await fs.readdir(directoryAudioPath);
        arraySongs = files;
        console.log('Updated audio files:', arraySongs);
    } catch (err) {
        console.log(`Unable to scan directory: ${err}`);
    }
}

// Actualizar los nombres de los archivos cada minuto
setInterval(updateAudioFiles, 60000); // Actualizar cada 60 segundos
updateAudioFiles(); // Actualización inicial


// Función para obtener un nuevo archivo de audio y construir el comando ffmpeg
function getNextAudioFile() {
    if (arraySongs.length === 0) {
        console.log('No audio files found in the directory.');
        return null;
    }

    // Selecciona el primer archivo (puedes cambiar la lógica si lo deseas)
    const audioFile = path.join(audioPath, arraySongs[0]);
    return audioFile;
}

// Función para ejecutar ffmpeg con el archivo de audio actual
function startFfmpeg() {
    const newAudio = getNextAudioFile();
    if (!newAudio) return;

    const comando = `ffmpeg -stream_loop -1 -re -i ${videoPath} -re -i ${newAudio} -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -f flv -rtmp_buffer 100 rtmp://a.rtmp.youtube.com/live2/${API_KEY}`

    // Ejecutar el comando ffmpeg
    const ffmpegProcess = exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return;
        }
        console.log(`Salida estándar: ${stdout}`);
        console.error(`Salida de error: ${stderr}`);
    });

    // Manejar la terminación del proceso ffmpeg
    ffmpegProcess.on('exit', (code, signal) => {
        console.log(`FFmpeg process exited with code ${code} and signal ${signal}`);
        startFfmpeg(); // Reiniciar ffmpeg después de que termine
    });
}

// Iniciar ffmpeg
startFfmpeg();