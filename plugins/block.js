let handler = async (m, { donwiz, isOwner, command, isCmd, isCmd2, text, runtime, mime, sleep, speed, botNumber, pushname, example, isGroup, groupMetadata, isBotAdmins, isGroupAdmins, isAdmins, reply4 }) => {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.msg.ban)
if (!isOwner) return m.reply(global.msg.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("tag/number"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await donwiz.updateBlockStatus(mem, "block");
if (m.isGroup) donwiz.sendMessage(m.chat, {text: `Successfully blocked @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}

handler.command = ["block","blok"]

module.exports = handler