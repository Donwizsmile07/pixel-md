const flags = require('./flags.json');

let game = {
  active: false,
  chatId: null,
  players: [],
  currentIndex: 0,
  currentFlag: null,
  timeout: null,
  started: false,
};

function startGame(chatId, bot) {
  game.active = true;
  game.chatId = chatId;
  game.players = [];
  game.currentIndex = 0;
  game.started = false;

  const msg = `🎮 *Flag Game Starting!*\n\nType *.join* to join the game.\nPlayers: 1–20 max.\nGuess the country name from the flag shown.\n\n⏳ Game starts in 30 seconds!`;
  bot.sendMessage(chatId, { text: msg });

  let intervals = [20000, 10000, 5000];
  intervals.forEach((delay) => {
    setTimeout(() => {
      if (!game.active || game.started) return;
      bot.sendMessage(chatId, {
        text: `⏳ Game starts in ${delay / 1000} seconds! Type *.join* to participate.`,
      });
    }, 30000 - delay);
  });

  game.timeout = setTimeout(() => beginGame(bot), 30000);
}

function addPlayer(id, name, bot) {
  if (!game.active || game.players.find(p => p.id === id)) return;
  if (game.players.length >= 20) return;
  game.players.push({ id, name });

  bot.sendMessage(game.chatId, {
    text: `✅ @${id.split('@')[0]} joined the game!`,
    mentions: [id],
  });
}

function beginGame(bot) {
  if (game.players.length < 1) {
    return endGame(game.chatId, bot, '⚠️ Not enough players to start the game.');
  }

  game.started = true;
  game.currentIndex = 0;
  sendTurn(bot);
}

function sendTurn(bot) {
  if (!game.active) return;

  if (game.players.length === 1) {
    const winner = game.players[0];

    bot.sendMessage(game.chatId, {
      text: `🎉 Congratulations @${winner.id.split('@')[0]}! 🏆\nYou're the last one standing and won the Flag Game! 👏👏`,
      mentions: [winner.id],
    });

    bot.sendMessage(game.chatId, {
      sticker: { url: 'https://files.catbox.moe/8yvrym.webp' }, // Trophy sticker
    });

    return endGame(game.chatId, bot);
  }

  const player = game.players[game.currentIndex];
  const nextPlayer = game.players[(game.currentIndex + 1) % game.players.length];
  game.currentFlag = flags[Math.floor(Math.random() * flags.length)];

  bot.sendMessage(game.chatId, {
    text: `🎌 *Flag Time!*\n\n👤 Turn: @${player.id.split('@')[0]}\n➡️ Next: @${nextPlayer.id.split('@')[0]}\n📝 Guess the country for the flag below:\n🏃 Players Left: ${game.players.length}\n🕒 Time: 45s\n\nFlag: ${game.currentFlag.emoji}`,
    mentions: [player.id, nextPlayer.id],
  });

  game.timeout = setTimeout(() => {
    bot.sendMessage(game.chatId, {
      text: `⏱️ Time's up! ❌ @${player.id.split('@')[0]} is out!`,
      mentions: [player.id],
    });
    game.players.splice(game.currentIndex, 1);
    if (game.currentIndex >= game.players.length) game.currentIndex = 0;
    sendTurn(bot);
  }, 45000); // 45 seconds
}

async function handleAnswer(m, bot) {
  if (!game.active || !game.started) return;

  const player = game.players[game.currentIndex];
  const user = m.sender;
  const answer = m.text.toLowerCase().trim();
  const correct = game.currentFlag.country.toLowerCase();

  if (user !== player.id) return;

  clearTimeout(game.timeout);

  if (answer === correct) {
    await bot.sendMessage(game.chatId, {
      text: `✅ Correct! 🎉 @${user.split('@')[0]}`,
      mentions: [user],
    });
    await bot.sendMessage(game.chatId, { react: { text: "✅", key: m.key } });

    game.currentIndex = (game.currentIndex + 1) % game.players.length;
    sendTurn(bot);
  } else {
    await bot.sendMessage(game.chatId, {
      text: `❌ Wrong! @${user.split('@')[0]} is out!`,
      mentions: [user],
    });
    await bot.sendMessage(game.chatId, { react: { text: "❌", key: m.key } });

    game.players.splice(game.currentIndex, 1);
    if (game.currentIndex >= game.players.length) game.currentIndex = 0;
    sendTurn(bot);
  }
}

function endGame(chatId, bot, reason = '🏁 Game ended.') {
  game.active = false;
  game.chatId = null;
  game.players = [];
  game.currentIndex = 0;
  game.currentFlag = null;
  clearTimeout(game.timeout);
  game.started = false;
  bot.sendMessage(chatId, { text: reason });
}

module.exports = {
  flagGame: {
    startGame,
    addPlayer,
    endGame,
    handleAnswer,
    active: game,
  },
};
