let tttGames = {};

function renderBoard(board) {
  return `
${board[0]} | ${board[1]} | ${board[2]}
${board[3]} | ${board[4]} | ${board[5]}
${board[6]} | ${board[7]} | ${board[8]}
  `;
}

function checkWinner(board) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of winPatterns) {
    if (board[a] !== '⬜' && board[a] === board[b] && board[a] === board[c]) return true;
  }
  return false;
}

async function handleTicTacToe(m, command, donwiz) {
  const user = m.sender;
  const chat = m.chat;
  const cmd = command.toLowerCase();
  const isNumberMove = /^[1-9]$/.test(cmd);

  // START MENU
  if (cmd === 'ttt' || cmd === '.ttt') {
    return donwiz.sendMessage(chat, {
      text: `🎮 *Tic-Tac-Toe Game*\n\nChoose mode:\n• *.ttt ai* – Play vs Pixel AI 🤖\n• *.ttt multi @user* – Play with a friend 👥\n• *.ttt end* – End your game`,
    }, { quoted: m });
  }

  // END
  if (cmd === 'ttt end' || cmd === 'tttend') {
    if (tttGames[user]) {
      const opponent = tttGames[user].opponent;
      if (opponent) delete tttGames[opponent];
      delete tttGames[user];
      return donwiz.sendMessage(chat, { text: '🛑 Game ended.' }, { quoted: m });
    }
    return donwiz.sendMessage(chat, { text: '⚠️ You’re not in any game.' }, { quoted: m });
  }

  // AI MODE
  if (cmd === 'ttt ai' || cmd === 'tttai') {
    tttGames[user] = {
      board: Array(9).fill('⬜'),
      mode: 'ai',
      currentPlayer: 'X'
    };
    return donwiz.sendMessage(chat, {
      text: `🤖 *Pixel AI Mode Started!*\nYou're ❌\n\n${renderBoard(['1','2','3','4','5','6','7','8','9'])}\n\nType 1–9 to make a move.`,
    }, { quoted: m });
  }

  // MULTI MODE
  if (cmd === 'ttt multi' || cmd === 'tttmulti') {
    const tagged = m.mentionedJid?.[0];
    if (!tagged) {
      return donwiz.sendMessage(chat, {
        text: `👥 *To start multiplayer game, tag someone!*\n\nExample: *.ttt multi @user*`,
      }, { quoted: m });
    }

    if (tagged === user) {
      return donwiz.sendMessage(chat, { text: '🙅‍♂️ You cannot play against yourself.' }, { quoted: m });
    }

    if (tttGames[user] || tttGames[tagged]) {
      return donwiz.sendMessage(chat, { text: '⚠️ One of the players is already in a game.' }, { quoted: m });
    }

    tttGames[user] = tttGames[tagged] = {
      board: Array(9).fill('⬜'),
      players: [user, tagged],
      currentPlayer: user,
      opponent: tagged,
      mode: 'multi'
    };

    const displayBoard = renderBoard(['1','2','3','4','5','6','7','8','9']);
    return donwiz.sendMessage(chat, {
      text: `✅ *Game Started!*\n\n👤 @${user.split('@')[0]} vs 👤 @${tagged.split('@')[0]}\n\n${displayBoard}\n\n🎯 Turn: @${user.split('@')[0]}`,
      mentions: [user, tagged],
    }, { quoted: m });
  }

  // MOVES (1–9)
  if (isNumberMove && tttGames[user]) {
    const game = tttGames[user];
    const index = parseInt(cmd) - 1;

    if (game.board[index] !== '⬜') {
      return donwiz.sendMessage(chat, { text: '❌ That spot is already taken.' }, { quoted: m });
    }

    const isMulti = game.mode === 'multi';
    const symbol = isMulti
      ? (game.players[0] === user ? '❌' : '⭕')
      : '❌';

    if (isMulti && game.currentPlayer !== user) {
      return donwiz.sendMessage(chat, { text: "⏳ It's not your turn!" }, { quoted: m });
    }

    game.board[index] = symbol;

    // Check Win
    if (checkWinner(game.board)) {
      const winMsg = `🎉 *${user.split('@')[0]} wins!*\n\n${renderBoard(game.board)}`;
      if (isMulti) {
        for (let p of game.players) delete tttGames[p];
        return donwiz.sendMessage(chat, { text: winMsg, mentions: game.players }, { quoted: m });
      } else {
        delete tttGames[user];
        return donwiz.sendMessage(chat, { text: winMsg }, { quoted: m });
      }
    }

    // Check Draw
    if (!game.board.includes('⬜')) {
      const drawMsg = `🤝 *It's a draw!*\n\n${renderBoard(game.board)}`;
      if (isMulti) {
        for (let p of game.players) delete tttGames[p];
      } else {
        delete tttGames[user];
      }
      return donwiz.sendMessage(chat, { text: drawMsg }, { quoted: m });
    }

    if (isMulti) {
      game.currentPlayer = game.players.find(p => p !== user);
      return donwiz.sendMessage(chat, {
        text: `🎮 Turn: @${game.currentPlayer.split('@')[0]}\n\n${renderBoard(game.board)}`,
        mentions: game.players,
      }, { quoted: m });
    } else {
      // AI Move
      const empty = game.board.map((v, i) => v === '⬜' ? i : null).filter(v => v !== null);
      const aiMove = empty[Math.floor(Math.random() * empty.length)];
      game.board[aiMove] = '⭕';

      if (checkWinner(game.board)) {
        delete tttGames[user];
        return donwiz.sendMessage(chat, {
          text: `🌟*Pixel wins!*\n\n${renderBoard(game.board)}`,
        }, { quoted: m });
      }

      if (!game.board.includes('⬜')) {
        delete tttGames[user];
        return donwiz.sendMessage(chat, {
          text: `🤝 *It's a draw!*\n\n${renderBoard(game.board)}`,
        }, { quoted: m });
      }

      return donwiz.sendMessage(chat, {
        text: `🤖 Pixel moved.\n\n${renderBoard(game.board)}\n\nYour turn. Type 1–9.`,
      }, { quoted: m });
    }
  }
}

module.exports = handleTicTacToe;
