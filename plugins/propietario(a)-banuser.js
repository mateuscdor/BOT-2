let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}  ❗𝙀𝙏𝙄𝙌𝙐𝗘𝗧𝘼𝗥 𝗔 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙋𝘼𝙍𝘼 𝘽𝘼𝙉𝙀𝘼𝙍.\n|n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg} ❗𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔𝗥 𝗔 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗣𝗔𝗥𝗔 𝗕𝗔𝗡𝗘𝗔𝗥.\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
let users = global.db.data.users

let username = conn.getName(who)
conn.reply(m.chat, `${eg}❗ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗕𝗔𝗡𝗘𝗔𝗗𝗢 ❗\n\n➖Registrado en blocklist .\n➖No accede a comandos .\n➖BOT ignora a :\n ${who}. \n\n*𝙰𝚃𝚃𝙴: 𝗕𝗢𝗧 ${gt}*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.group = true
handler.admin = true 
export default handler
