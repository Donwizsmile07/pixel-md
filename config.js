/*
 * Base By Dᴏɴᴡɪᴢ
 * Created On 10/02/2025
 * Contact Me on wa.me/2349131021928
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.owner = process.env.OWNER_NUMBER || "2349131021928"; // owner number 
global.sudo = process.env.SUDO  || " ";
global.ownername = process.env.OWNER_NAME || "Dᴏɴᴡɪᴢ"; //set bot owner name here 
global.botname = process.env.BOT_NAME || "Pixel md"
global.author = process.env.AUTHOR  || "Donwiz";
global.packname = process.env.PACK_NAME  || "Pixel md•Donwiz";
global.thumb = process.env.THUMB_IMAGE || 'https://files.catbox.moe/8fyknb.jpg';
global.footer = process.env.FOOTER || '©𝓢𝓾𝓬𝓮𝓼𝓼 𝓫𝔂 𝓟𝓲𝔁𝓮𝓵 𝔀𝓪 𝓫𝓸𝓽';
global.onlypc = process.env.ONLYPC_MSG  || "Bot set to work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Bot set to work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || "";// Input your  SESSION_ID 
global.simbol = process.env.SYMBOL || '✎'
global.menutype = process.env.MENU_TYPE  || "v2";
global.warn = process.env.WARN || "3"
global.goodbye = process.env.GOODBYE === 'false'
global.welcome = process.env.WELCOME === 'false'
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.startup = process.env.START_MSG === 'false'
global.scan = 'https://pixel-md.onrender.com'
global.api = ''


//======= Don't touch =======\\
global.msg = {
    succes: '✅ Success!',
owner: '⚠️ Only the bot owner can use this command.',
admin: '⚠️ This command is restricted to group admins.',
BotAdmin: '⚠️ Bot needs to be an admin to run this command.',
group: '⚠️ This command works only in group chats.',
private: '⚠️ This command can only be used in private chats.',
bot: '⚠️ Only the bot number is allowed to use this command.',
wait: '⏳ Please wait, processing...',
linkm: '⚠️ Please include a valid link.',
ban: '❌ You’re banned from using commands. Contact the owner to remove the ban.'
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
