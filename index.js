const { fork } = require('child_process');
const chalk = require('chalk');
const express = require('express');

// === Express Web Server ===
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🟢 Pixel-MD is running...');
});

app.listen(PORT, () => {
  console.log(chalk.green(`🌐 Pixel Web Server listening on port ${PORT}`));
});

// === Bot Process Manager ===
async function start() {
  const child = fork('./main.js');

  child.on('message', (msg) => {
    console.log('child to parent =>', msg);
  });

  child.on('close', () => {
    console.log(chalk.black(chalk.bgRed(`Pixel Wa Ai is restarting..`)));
    start();
  });

  child.on('exit', () => {});
}

start();
