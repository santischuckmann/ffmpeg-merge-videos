const { spawn } = require('child_process');

const [nodeParam, fileExecuteParam, firstParams, secondParams] = process.argv;

const concatFirstVideos = (processFileName) => {
  let whatIsReturned  = 0;
  const principalCommand = 'ffmpeg';
  const args = [
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    `${processFileName}`,
    '-c',
    'copy',
    'quintoVideo.mp4'];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.log(`LogLevel: ${data}`);
  });

  child.on('close', (code) => {
    whatIsReturned = code;
  });
  return whatIsReturned
}

module.exports = concatFirstVideos;