const wordList = require('./words.json');

let wcg = {
  active: false,
  chatId: null,
  players: [],
  currentIndex: 0,
  currentLetter: '',
  currentLength: 4,
  usedWords: [],
  timeout: null,
  started: false,
};

function getRandomLetter() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return letters[Math.floor(Math.random() * letters.length)];
}

function isValidWord(word) {
  return wordList.includes(word.toLowerCase());
}

function startGame(chatId, bot, starterId, starterName) {
  wcg = {
    active: true,
    chatId,
    players: [{ id: starterId, name: starterName }], // Starter auto-joins
    currentIndex: 0,
    currentLetter: '',
    currentLength: 4,
    usedWords: [],
    timeout: null,
    started: false,
  };

  bot.sendMessage(chatId, {
    text: `🎮 *Who Can Guess (WCG)* has started!\n\n✅ @${starterId.split('@')[0]} joined as the first player!\nType *join* to join the game.\nPlayers allowed: 2–30\n\n⏳ Game starts in 30 seconds!`,
    mentions: [starterId],
  });

  const countdowns = [
    { delay: 10000, msg: '⏳ Game starts in 20 seconds! Type *join* to join.' },
    { delay: 20000, msg: '⏳ Game starts in 10 seconds! Type *join* to join.' },
    { delay: 25000, msg: '⏳ Game starts in 5 seconds! Type *join* to join.' },
  ];

  countdowns.forEach(({ delay, msg }) => {
    setTimeout(() => {
      if (!wcg.active || wcg.started) return;
      bot.sendMessage(chatId, { text: msg });
    }, delay);
  });

  wcg.timeout = setTimeout(() => beginGame(bot), 30000);
}

function joinGame(sender, name, bot) {
  if (!wcg.active || wcg.started) return;
  if (wcg.players.find((p) => p.id === sender)) return;
  if (wcg.players.length >= 30) return;

  wcg.players.push({ id: sender, name });

  let joinedList = wcg.players.map((p) => `@${p.id.split('@')[0]}`).join(', ');

  bot.sendMessage(wcg.chatId, {
    text: `✅ @${sender.split('@')[0]} joined the WCG game!\n👥 Players: ${joinedList}`,
    mentions: wcg.players.map((p) => p.id),
  });
}

function beginGame(bot) {
  if (wcg.players.length < 2) {
    return endGame(wcg.chatId, bot, '⚠️ Not enough players to start.');
  }

  wcg.started = true;
  wcg.currentLetter = getRandomLetter();
  sendTurn(bot);
}

function sendTurn(bot) {
  if (!wcg.active) return;

  if (wcg.players.length === 1) {
    const winner = wcg.players[0];
    bot.sendMessage(wcg.chatId, {
      text: `🏆 *@${winner.id.split('@')[0]}* is the winner of WCG!`,
      mentions: [winner.id],
    });
    return endGame(wcg.chatId, bot);
  }

  const player = wcg.players[wcg.currentIndex];
  const next = wcg.players[(wcg.currentIndex + 1) % wcg.players.length];

  bot.sendMessage(wcg.chatId, {
    text:
      `🎯 *Word Challenge!*\n\n` +
      `👤 Player: @${player.id.split('@')[0]}\n` +
      `⏭️ Next: @${next.id.split('@')[0]}\n\n` +
      `📝 *Word must start with:* ${wcg.currentLetter.toUpperCase()}\n` +
      `🔢 *Must be ${wcg.currentLength} letters*\n` +
      `📕 Words used: ${wcg.usedWords.length}\n` +
      `⏱️ Time: 15s`,
    mentions: [player.id, next.id],
  });

  wcg.timeout = setTimeout(() => {
    bot.sendMessage(wcg.chatId, {
      text: `⏱️ Time’s up! @${player.id.split('@')[0]} is out.`,
      mentions: [player.id],
    });
    wcg.players.splice(wcg.currentIndex, 1);
    if (wcg.currentIndex >= wcg.players.length) wcg.currentIndex = 0;
    sendTurn(bot);
  }, 15000);
}

function handleAnswer(m, bot) {
  if (!wcg.active || !wcg.started) return;
  const user = m.sender;
  const player = wcg.players[wcg.currentIndex];
  if (user !== player.id) return;

  const word = m.text.trim().toLowerCase();
  clearTimeout(wcg.timeout);

  if (
    word.length !== wcg.currentLength ||
    !word.startsWith(wcg.currentLetter) ||
    wcg.usedWords.includes(word) ||
    !isValidWord(word)
  ) {
    bot.sendMessage(wcg.chatId, {
      text: `❌ Invalid, used or unknown word. @${user.split('@')[0]} is out!`,
      mentions: [user],
    });
    wcg.players.splice(wcg.currentIndex, 1);
    if (wcg.currentIndex >= wcg.players.length) wcg.currentIndex = 0;
    return sendTurn(bot);
  }

  wcg.usedWords.push(word);
  wcg.currentIndex = (wcg.currentIndex + 1) % wcg.players.length;

  if (wcg.currentIndex === 0 && wcg.currentLength < 20) {
    wcg.currentLength++;
    wcg.currentLetter = getRandomLetter();
  }

  bot.sendMessage(wcg.chatId, {
    text: `✅ Good job @${user.split('@')[0]}! Word accepted: *${word.toUpperCase()}*`,
    mentions: [user],
  });

  sendTurn(bot);
}

function endGame(chatId, bot, reason = '🏁 WCG game ended.') {
  wcg.active = false;
  wcg.chatId = null;
  wcg.players = [];
  wcg.currentIndex = 0;
  wcg.currentLetter = '';
  wcg.currentLength = 4;
  wcg.usedWords = [];
  clearTimeout(wcg.timeout);
  wcg.started = false;

  bot.sendMessage(chatId, { text: reason });
}

module.exports = {
  wcgGame: {
    startGame,
    joinGame,
    endGame,
    handleAnswer,
    active: wcg,
  },
};