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
const fontx = (text, style = 1) => {
            var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
            var ehz = {
                1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
            };
            var replacer = [];
            abc.map((v, i) =>
                replacer.push({
                    original: v,
                    convert: ehz[style].split('')[i]
                })
            );
            var str = text.toLowerCase().split('');
            var output = [];
            str.map((v) => {
                const find = replacer.find((x) => x.original == v);
                find ? output.push(find.convert) : output.push(v);
            });
            return output.join('');
        };
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
let pixelmenu = `Hi ${m.pushName} 👋 I'm Pixel,here to help! Check out all my features and commands below

alive — check if bot is running
device — show device info
jid — get your WhatsApp JID
owner — show bot owner's contact
ping — measure bot latency
repo — show bot's GitHub repo
runtime — show bot uptime
test — run a basic test command
update — check for bot updates

autoreact — toggle auto reaction
ban — ban a user from using bot
block — block a user
broadcast — send message to all groups
delete — delete a replied message
delppbot — remove bot profile picture
delsudo — remove a sudo user
getsudo — list all sudo users
join — join a group via invite
left — bot leaves the group
listblock — show blocked users
listgroup — list all joined groups
logout — logout from WhatsApp
private — set bot to private mode
public — set bot to public mode
restart — restart the bot
save — save settings
setbio — set bot bio
setppbot — set bot profile picture
setsudo — add a sudo user
status — show current bot status
unban — unban a user
unblock — unblock a user

pixelai — access Pixel AI
chatpgt — chat with ChatGPT
gemini — chat with Gemini AI
chatbot — toggle AI chatbot mode

fact — get a random fact
joke — get a random joke
quote — get a motivational quote
pickupline — get a random smooth pick-up line
tonguetwister — get a random tongue twister challenge

ttt — play Tic Tac Toe
wcg — play Who Can Guess
dare — get a dare challenge
flag — play Flag Guessing Game
never — play Never Have I Ever
truth — ask a truth question
wouldyou — play Would You Rather

githubsearch — search GitHub repositories
npmsearch — search NPM packages
stickersearch — search for WhatsApp stickers

delcmd — delete custom command
delfilter — delete word filter
filter — add a word filter
listfilter — show all filters
setcmd — set a custom command
update — update custom commands

anticall — auto block calls
antidelete — show deleted messages
autobio — set auto bio update
autolevelup — enable auto level up
autoread — auto read messages
autorecording — show recording status
autosend — send automated messages
autostatus — auto post WhatsApp status
autostatuslike — auto like bot status
autotyping — show typing status
online — set bot online
unavailable — set bot unavailable

play — download audio from YouTube
video — download video from YouTube
instagram — download Instagram media
facebook — download Facebook video
tiktok — download TikTok video
tiktokmp3 — download TikTok audio
mediafire — download from Mediafire
github — download from GitHub
ytmp4 — YouTube to MP4
ytmp3 — YouTube to MP3
image — download image by keyword
yts — search YouTube videos
shortlink-dl — download from shortened links
twitter — download Twitter video

add — add a member to group
antibot — block other bots
antilink — block links in group
antitag — block @tag usage
approve — approve user to group
ban — ban user from group
closetime — auto close group at time
delwarn — delete user warnings
demote — remove admin rights
gcinfo — get group info
goodbye — toggle goodbye message
invite — generate group invite
kick — remove user from group
kickall — remove all users
mute — mute the group
opentime — auto open group at time
pdm — ping don’t mention
promote — make user admin
request — request something
reset — reset group settings
resetwarn — reset all warnings
setgoodbye — set goodbye message
setwelcome — set welcome message
stoptime — stop group timer
tag — tag random members
tagadmin — tag all admins
tagall — tag everyone
unban — unban group user
unmute — unmute the group
warn — warn a user
welcome — toggle welcome message

bass — apply bass effect to audio
blown — blown speaker effect
deep — make voice deeper
earrape — loud distorted effect
fast — speed up audio
fat — make voice fatter
img — convert sticker to image
mp3 — convert video to MP3
mp4 — convert audio to video
nightcore — apply nightcore effect
reverse — reverse audio
robot — robot voice effect
shorturl — shorten a URL
slow — slow down audio
smooth — smooth voice effect
squirrel — squirrel voice effect
ssweb — take website screenshot
sticker — create sticker
url — convert media to URL
vn — send as voice note
vvnew — enhanced video-to-voice
write — draw text into image

1917 — text style generator
advanced — advanced text effect
blackpink — blackpink text effect
cartoon — cartoon style text
clouds — clouds text background
deleting — delete animation text
flag — flag-style text
flag3d — 3D flag text
freecreate — free-style text
galaxy — galaxy theme text
galaxywallpaper — galaxy background
glowing — glowing neon text
gradient — gradient text effect
light — glowing light text
luxurygold — luxury gold text
multicolored — colorful text
making — make cool text styles
neon — neon style text
papercut — paper cutout style
pixelglitch — pixel glitch effect
royal — royal gold text
sandsummer — sand effect text
summerbeach — beach theme text
typography — custom typography
underwater — underwater effect
watercolor — watercolor style
write — draw text into image

blackpinklogo — generate blackpink logo
logomaker — create custom logo

charge — show battery/charge status
fancy — style your text
get — fetch media by URL
lyrics — find song lyrics
pp — show profile picture
readmore — add read more break
say — bot says your text
support — get support info
take — take sticker pack info
trackip — track IP address
translate — translate text
vv — convert view-once to media
vvdm — view-once to DM media
weather — show weather info


©𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽`  
if (menutype === 'v1') {
                    donwiz.sendMessage(m.chat, {
                        text: fontx(pixelmenu),
                        contextInfo: {
                            externalAdReply: {
                              showAdAttribution: true,
                                title: botname,
                                body: 'menu list',
                                thumbnailUrl: `${global.thumb}`,
                                sourceUrl: '',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }), {
                        quoted: m
                    }
} else if (menutype === 'v2' ) {
                    donwiz.sendMessage(m.chat, { text:fontx(pixelmenu) }, {
                        quoted: m
                    })
 } else if (menutype === 'v3' )
 {
reply4(fontx(pixelmenu))
}
}

handler.command = ["list","help"]

module.exports = handler
