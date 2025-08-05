/*
 * Base By Donwiz
 * Created On 10/02/2025
 * Contact Me on wa.me/2349131021928
*/
require("./config.js")
const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
makeInMemoryStore,
jidDecode,
downloadContentFromMessage,
delay
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const {delArrSave} = require('./lib/arrfunction.js')
const fs = require('fs')
const path = require('path')
const { Boom } = require("@hapi/boom");
const yargs = require('yargs/yargs')
const _ = require('lodash')
const colors = require('@colors/colors/safe')
const chalk = require("chalk")
const moment = require('moment-timezone')
const PhoneNumber = require("awesome-phonenumber");
const FileType = require('file-type')
const readline = require("readline");
const { smsg, imageToWebp, videoToWebp, sleep, writeExif, toPTT, toAudio, toVideo } = require("./all/myfunc")
const { getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture } = require('./all/function.js')
const axios = require("axios")
const {
    color
} = require('./all/color');
const moji = ['📚', '💭', '💫', '🌌', '🌏', '✨', '🌷', '🍁', '🪻'];
const randomemoji = moji[Math.floor(Math.random() * moji.length)];
const listcolor = ['aqua', 'red', 'blue', 'purple', 'magenta'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor2 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor3 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor4 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor5 = listcolor[Math.floor(Math.random() * listcolor.length)];


const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
const DataBase = require('./lib/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			groups: {},
			database: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 3500)
})();

require("events").EventEmitter.defaultMaxListeners = 600;


const deleteFolderRecursive = function (pathsesi) {
  if (fs.existsSync(pathsesi)) {
    fs.readdirSync(pathsesi).forEach(function (file, index) {
      const curPath = pathsesi + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pathsesi);
  }
}
// const pairingCode = true
// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

const startBotz = async() => {
const { state, saveCreds } = await useMultiFileAuthState('./tmp/session/')
const donwiz = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: false,
auth: state,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});


store.bind(donwiz.ev);

/* if (!donwiz.authState.creds.registered) {
const phoneNumber = await question('input your number for pair code sir in 234 format :\n');
let code = await donwiz.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`𝒉𝒆𝒓𝒆𝒔 𝒚𝒐𝒖𝒓 𝒑𝒂𝒊𝒓 𝒄𝒐𝒅𝒆 :`, code);
}
*/


donwiz.ev.on("messages.upsert", async (chatUpdate) => {
try {
mek = chatUpdate.messages[0];
if (!mek.message) return;
mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
if (mek.key && mek.key.remoteJid === "status@broadcast") return;
if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
m = smsg(donwiz, mek, store);
require("./donwiz.js")(donwiz, m, chatUpdate, mek, store);
} catch (err) {
console.log(err);
}
});

donwiz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

donwiz.getName = (jid, withoutContact = false) => {
id = donwiz.decodeJid(jid);
withoutContact = donwiz.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = donwiz.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === donwiz.decodeJid(donwiz.user.id)
? donwiz.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

donwiz.serializeM = (m) => smsg(donwiz, m, store);
//read messages
donwiz.ev.on("connection.update",async  (koneksi) => {
  const {connection, lastDisconnect} = koneksi
 
 


if (connection === "connecting") {
  // console.log("Connecting to WhatsApp!");
}

  if(connection == "open"){console.log(color(`╔══════════════════════════════════════╗`, `${randomcolor}`));

console.log(color(`║     ✨️  Whatsapp Connecting..        ║`, `${randomcolor}`));

console.log(color(`╚══════════════════════════════════════╝`, `${randomcolor}`));
  console.log(color(`🟢   Welcome to pixel database 🧬`));
    console.log(color(`📡   Establishing secure link with Pixel Core 🔐`));

console.log(color(`🛰️   Syncing with Pixel data stream...`));

console.log(color(`🧠   Initializing Pixel intelligence protocol...`));

console.log(color(`📂   Accessing encrypted Pixel archives 🔍`));

console.log(color(`🔗   Linking Pixel network nodes...`));

console.log(color(`⚙️   Pixel system boot sequence completed ✅`));
  console.log(color('👀   Connected to ' + JSON.stringify(donwiz.user.id, null, 2)));
  await sleep(2000);
    if (global.startup === true) {
      donwiz.sendMessage(donwiz.user.id.split(":")[0] + "@s.whatsapp.net", { text: `\`\`\`Connection established: Pixel MD is now online and fully operational.All systems ready. Type your command below to begin—try /menu, /help, /ping, or /runtime.\`\`\`\n\n\`\`\`prefix:-  ${global.prefix}\`\`\`\n\n\`\`\`𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :- https://chat.whatsapp.com/GoJQ2iZkPWSBLvoHE9Qhh7\n\n⚠️ If the bot isn't responding, restart it from the console.\n\nNeed help? Contact the owner:\n𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦: https://t.me/donwiz_smile07\n𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: https://wa.me/+2349131021928\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: https://instagram.com/donwiz__smile\n𝐘𝐨𝐮𝐭𝐮𝐛𝐞: https://youtube.com/@donwiz_smile\n𝐆𝐢𝐭𝐡𝐮𝐛: https://github.com/Donwizsmile07\n\nThanks for using Pixel-MD! 🚀😊\n 〄Dᴏɴᴡɪᴢ\`\`\`` })
      
    }
}

  if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401){
  startBotz()
  }
  })
  
donwiz.ev.on("creds.update", saveCreds);

donwiz.sendText = (jid, text, quoted = "", options) => donwiz.sendMessage(jid, { text: text, ...options }, { quoted });

donwiz.sendContact = async (jid, kon, desk = "Developer Bot", quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: botname,
  vcard: 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    `N:;${botname};;;\n` +
    `FN:${botname}\n` +
    'ORG:null\n' +
    'TITLE:\n' +
    `item1.TEL;waid=${i}:${i}\n` +
    'item1.X-ABLabel:Ponsel\n' +
    `X-WA-BIZ-DESCRIPTION:${desk}\n` +
    `X-WA-BIZ-NAME:${botname}\n` +
    'END:VCARD'
})
}
donwiz.sendMessage(jid, { contacts: { displayName: `${list.length} contacts`, contacts: list }, ...opts }, { quoted })
}

donwiz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

donwiz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}
await donwiz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
return buffer;
};

donwiz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}
await donwiz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
return buffer;
};

donwiz.reply = (jid, text = '', quoted, options) => {
        return Buffer.isBuffer(text) ? this.sendFile(jid, text, 'file', '', quoted, false, options) : donwiz.sendMessage(jid, { ...options, text }, { quoted, ...options })
}

donwiz.sendMedia = async (jid, path, quoted, options = {}) => {
        let { ext, mime, data } = await donwiz.getFile(path)
        messageType = mime.split("/")[0]
        pase = messageType.replace('application', 'document') || messageType
        return await donwiz.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
}

donwiz.getFile = async (PATH, save) => {
  let res
  let data = Buffer.isBuffer(PATH) 
    ? PATH 
    : /^data:.*?\/.*?;base64,/i.test(PATH) 
      ? Buffer.from(PATH.split(',')[1], 'base64') 
      : /^https?:\/\//.test(PATH) 
        ? await (res = await getBuffer(PATH)) 
        : fs.existsSync(PATH) 
          ? (filename = PATH, fs.readFileSync(PATH)) 
          : typeof PATH === 'string' 
            ? PATH 
            : Buffer.alloc(0)
  
  let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' }
  
  filename = path.join(__dirname, './tmp/' + new Date().getTime() + '.' + type.ext)
  
  if (data && save) fs.promises.writeFile(filename, data)
  
  return { res, filename, size: await getSizeMedia(data), ...type, data }
}

   donwiz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await donwiz.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await donwiz.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await donwiz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}

donwiz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.m ? message.m : message
        let mime = (message.m || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
return donwiz;
}


async function startBot() {
    try {
        let id = global.session;
        if (!id.includes('Pixel_')) {
            console.error("Session ID invalid, edit in config.js")
            return
        }
        const credsId = id.replace('Pixel_', '');
        const response = await axios.get(`https://gist.githubusercontent.com/Donwizsmile07/${credsId}/raw`);
        const credsPath = __dirname + "/tmp/session/creds.json";
        fs.writeFileSync(credsPath, JSON.stringify(response.data));
        console.log('Login credentials Saved to', credsPath);
        startBotz()
    } catch (error) {
        console.error("Encountered Error", error)
    }
}
startBot();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
