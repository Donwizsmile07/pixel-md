const run  = function(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " d " : " d ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
let { getDevice } = require('@whiskeysockets/baileys')
let fs = require("fs")
let os = require('os');
let speed = require('performance-now');
let moment = require('moment-timezone');
let nou = require("node-os-utils");
let { sizeFormatter } = require('human-readable');
const timestamp = speed()
const welDate = moment.tz(`${global.timezone}`).format('DD/MM/YYYY')
const mark = "0@s.whatsapp.net"
var tot = nou.drive.info();
const getTime = (format, date) => {
	if (date) {
		return moment(date).locale('en').format(format)
	} else {
		return moment.tz(`${global.timezone}`).locale('en').format(format)
	}
}
const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { donwiz, donwizdev, reply4 }) => {
let timestampe = speed()
let latensi = speed() - timestampe
let me = m.sender
let { getDevice } = require('@whiskeysockets/baileys')
  if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.msg.ban)
let pixelmenu = `┏━〔 ${botname} 〕━┓
┃ 〄 Prefix: ${global.prefix}
┃ 〄 Owner : ${global.ownername}
┃ 〄 Ping  : ${latensi.toFixed(4)} ms
┃ 〄 Time  : ${getTime().split("T")[1].split("+")[0]}
┃ 〄 Date  : ${welDate}
┃ 〄 Day   : ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}
┃ 〄 RAM   : ${formatp(os.totalmem() - os.freemem())}
┃ 〄 Alive : ${run(process.uptime())}
┃ 〄 Device: ${getDevice(m.quoted ? m.quoted.id : m.key.id)}
┗━━━━━━━━━━━━━━━━━┛

@${m.sender.split("@")[0]} — welcome to ${botname} ♥︎

➤ STATUS MENU
• ${global.simbol} ${global.prefix}Alive
• ${global.simbol} ${global.prefix}device
• ${global.simbol} ${global.prefix}jid
• ${global.simbol} ${global.prefix}owner
• ${global.simbol} ${global.prefix}Ping
• ${global.simbol} ${global.prefix}Repo
• ${global.simbol} ${global.prefix}Runtime
• ${global.simbol} ${global.prefix}Test
• ${global.simbol} ${global.prefix}update

➤ BOT CONTROL MENU
• ${global.simbol} ${global.prefix}Autoreact
• ${global.simbol} ${global.prefix}Ban
• ${global.simbol} ${global.prefix}Block
• ${global.simbol} ${global.prefix}Broadcast 
• ${global.simbol} ${global.prefix}Delete
• ${global.simbol} ${global.prefix}delppbot
• ${global.simbol} ${global.prefix}Delsudo
• ${global.simbol} ${global.prefix}Getsudo
• ${global.simbol} ${global.prefix}Join
• ${global.simbol} ${global.prefix}Left
• ${global.simbol} ${global.prefix}Listblock
• ${global.simbol} ${global.prefix}listgroup
• ${global.simbol} ${global.prefix}Logout
• ${global.simbol} ${global.prefix}mode
• ${global.simbol} ${global.prefix}Restart
• ${global.simbol} ${global.prefix}save
• ${global.simbol} ${global.prefix}Setbio
• ${global.simbol} ${global.prefix}setppbot
• ${global.simbol} ${global.prefix}Setsudo
• ${global.simbol} ${global.prefix}status
• ${global.simbol} ${global.prefix}Unban
• ${global.simbol} ${global.prefix}Unblock

➤ AI MENU
• ${global.simbol} ${global.prefix} PixelAi
• ${global.simbol} ${global.prefix}ChatPgt
• ${global.simbol} ${global.prefix}Gemini
• ${global.simbol} ${global.prefix}chatbot


➤ FUN MENU
• ${global.simbol} ${global.prefix}Truth
• ${global.simbol} ${global.prefix}dare
• ${global.simbol} ${global.prefix}never 
• ${global.simbol} ${global.prefix}fact
• ${global.simbol} ${global.prefix}joke
• ${global.simbol} ${global.prefix}quote
• ${global.simbol} ${global.prefix}thisorthat
• ${global.simbol} ${global.prefix}wouldyou

➤ SEARCH MENU
• ${global.simbol} ${global.prefix}githubsearch
• ${global.simbol} ${global.prefix}npmsearch 
• ${global.simbol} ${global.prefix}stickersearch 
• ${global.simbol} ${global.prefix}tiktoksearch  

➤ CUSTOM MENU
• ${global.simbol} ${global.prefix}delcmd
• ${global.simbol} ${global.prefix}delfilter
• ${global.simbol} ${global.prefix}filter
• ${global.simbol} ${global.prefix}listfilter
• ${global.simbol} ${global.prefix}setcmd
• ${global.simbol} ${global.prefix}update

➤ AUTO MENU
• ${global.simbol} ${global.prefix}anticall
• ${global.simbol} ${global.prefix}antidelete
• ${global.simbol} ${global.prefix}autobio
• ${global.simbol} ${global.prefix}autolevelup
• ${global.simbol} ${global.prefix}autoread
• ${global.simbol} ${global.prefix}autorecording
• ${global.simbol} ${global.prefix}autosend
• ${global.simbol} ${global.prefix}autostatus
• ${global.simbol} ${global.prefix}autostatuslike
• ${global.simbol} ${global.prefix}autotyping
• ${global.simbol} ${global.prefix}online
• ${global.simbol} ${global.prefix}unavailable

➤ GROUP MENU
• ${global.simbol} ${global.prefix}Add
• ${global.simbol} ${global.prefix}Antibot
• ${global.simbol} ${global.prefix}Antilink
• ${global.simbol} ${global.prefix}Antitag
• ${global.simbol} ${global.prefix}approve
• ${global.simbol} ${global.prefix}ban
• ${global.simbol} ${global.prefix}Closetime
• ${global.simbol} ${global.prefix}Delwarn
• ${global.simbol} ${global.prefix}Demote
• ${global.simbol} ${global.prefix}gcinfo
• ${global.simbol} ${global.prefix}Goodbye
• ${global.simbol} ${global.prefix}invite
• ${global.simbol} ${global.prefix}Kick
• ${global.simbol} ${global.prefix}kickall
• ${global.simbol} ${global.prefix}Mute
• ${global.simbol} ${global.prefix}Opentime
• ${global.simbol} ${global.prefix}pdm
• ${global.simbol} ${global.prefix}Promote
• ${global.simbol} ${global.prefix}Request
• ${global.simbol} ${global.prefix}Reset
• ${global.simbol} ${global.prefix}resetwarn
• ${global.simbol} ${global.prefix}setgoodbye
• ${global.simbol} ${global.prefix}setwelcome
• ${global.simbol} ${global.prefix}Stoptime
• ${global.simbol} ${global.prefix}Tag
• ${global.simbol} ${global.prefix}Tagadmin
• ${global.simbol} ${global.prefix}Tagall
• ${global.simbol} ${global.prefix}Unban
• ${global.simbol} ${global.prefix}Unmute
• ${global.simbol} ${global.prefix}warn
• ${global.simbol} ${global.prefix}Welcome

➤ PARSE MENU
• ${global.simbol} ${global.prefix}bass
• ${global.simbol} ${global.prefix}blown
• ${global.simbol} ${global.prefix}deep
• ${global.simbol} ${global.prefix}earrape
• ${global.simbol} ${global.prefix}fast
• ${global.simbol} ${global.prefix}fat
• ${global.simbol} ${global.prefix}img
• ${global.simbol} ${global.prefix}mp3
• ${global.simbol} ${global.prefix}mp4
• ${global.simbol} ${global.prefix}nightcore
• ${global.simbol} ${global.prefix}reverse
• ${global.simbol} ${global.prefix}robot
• ${global.simbol} ${global.prefix}shorturl
• ${global.simbol} ${global.prefix}slow
• ${global.simbol} ${global.prefix}smooth
• ${global.simbol} ${global.prefix}squirrel
• ${global.simbol} ${global.prefix}Ssweb
• ${global.simbol} ${global.prefix}sticker
• ${global.simbol} ${global.prefix}url
• ${global.simbol} ${global.prefix}vn
• ${global.simbol} ${global.prefix}vvnew
• ${global.simbol} ${global.prefix}Write

➤ TEXT MENU
• ${global.simbol} ${global.prefix}1917
• ${global.simbol} ${global.prefix}advanced
• ${global.simbol} ${global.prefix}blackpink
• ${global.simbol} ${global.prefix}cartoon
• ${global.simbol} ${global.prefix}clouds
• ${global.simbol} ${global.prefix}deleting
• ${global.simbol} ${global.prefix}flag 
• ${global.simbol} ${global.prefix}flag3d
• ${global.simbol} ${global.prefix}freecreate
• ${global.simbol} ${global.prefix}galaxy
• ${global.simbol} ${global.prefix}galaxywallpaper 
• ${global.simbol} ${global.prefix}glowing
• ${global.simbol} ${global.prefix}gradient
• ${global.simbol} ${global.prefix}light
• ${global.simbol} ${global.prefix}luxurygold
• ${global.simbol} ${global.prefix}multicolored
• ${global.simbol} ${global.prefix}making
• ${global.simbol} ${global.prefix}neon
• ${global.simbol} ${global.prefix}papercut
• ${global.simbol} ${global.prefix}pixelglitch
• ${global.simbol} ${global.prefix}royal
• ${global.simbol} ${global.prefix}sandsummer
• ${global.simbol} ${global.prefix}summerbeach
• ${global.simbol} ${global.prefix}typography
• ${global.simbol} ${global.prefix}underwater
• ${global.simbol} ${global.prefix}watercolor
• ${global.simbol} ${global.prefix}write

➤ LOGO MENU
• ${global.simbol} ${global.prefix}blackpinklogo
• ${global.simbol} ${global.prefix}logomaker

➤ UTILITY MENU
• ${global.simbol} ${global.prefix}Charge
• ${global.simbol} ${global.prefix}Fancy
• ${global.simbol} ${global.prefix}Get
• ${global.simbol} ${global.prefix}Lyrics 
• ${global.simbol} ${global.prefix}pp
• ${global.simbol} ${global.prefix}readmore
• ${global.simbol} ${global.prefix}Say
• ${global.simbol} ${global.prefix}Support
• ${global.simbol} ${global.prefix}Take
• ${global.simbol} ${global.prefix}Trackip
• ${global.simbol} ${global.prefix}Translate
• ${global.simbol} ${global.prefix}Vv
• ${global.simbol} ${global.prefix}Vvdm
• ${global.simbol} ${global.prefix}Weather`
if (menutype === 'v1') {
                    donwiz.sendMessage(m.chat, {
                        text: pixelmenu,
                        contextInfo: {
                            externalAdReply: {
                              showAdAttribution: true,
                                title: botname,
                                body: 'Dᴏɴᴡɪᴢ 〄',
                                thumbnailUrl: `${global.thumb}`,
                                sourceUrl: ' ',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
} else if (menutype === 'v2' ) {
                    donwiz.sendMessage(m.chat, { text: pixelmenu }, {
                        quoted: m
                    })
 } else if (menutype === 'v3' )
 {
donwiz.sendMessage(m.chat, { image: { url: `${global.thumb}` }, caption: pixelmenu }, { quoted: m })
}
}

handler.command = ["menu"]

module.exports = handler
