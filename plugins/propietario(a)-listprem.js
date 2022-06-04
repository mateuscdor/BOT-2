import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*╭━[ 𝗟𝗜𝗦𝗧𝗔 | 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙑𝙄𝙋 ]━⬣*\n*┃*\n` + prem.map(v => '*┃* ➥ 💎 @' + v.replace(/@.+/, ' 💎')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
await conn.sendHydrated(m.chat, null, null, null, null, null, null, [
['𝙏𝙤𝙥 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 | 𝙐𝙨𝙚𝙧𝙨 🏆', '.top'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
  
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
