const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const outputPath = 'rtmp://a.rtmp.youtube.com/live2/rrvp-58tm-yx1c-v45d-0qw6';

ffmpeg()
    .setFfmpegPath(ffmpegPath)
    .input('https://av.alarabiya.net/alarabiapublish/alhadath.smil/playlist.m3u8')
    .inputOptions([
        '-f avfoundation',
        '-framerate 30',])
    .output(outputPath)
    .outputOptions([
        '-c:v libx264',
        '-preset ultrafast',
        '-acodec libmp3lame',
        '-f flv'
    ])
    .on('start', function (commandLine) {
    console.log('[' + new Date() + '] Vedio is Pushing !');
    console.log('commandLine: ' + commandLine);
})

    .on('error', function (err, stdout, stderr) {
        console.log('error: ' + err.message);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    })
    .on('end', function () {
        console.log('[' + new Date() + '] Vedio Pushing is Finished !');
    })
    .run();




