let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `....`
if (text.length < 1) throw `✅Minimo 1 caracter.`
if (text.length > 9999) throw `✅Máximo 9999 caracteres.`
let teks = `*╭━━[ 𝐕𝐈𝐑𝐔𝐒 | 𝐕𝐈𝐑𝐔𝐒 ]━━━⬣*\n*┃*\n* . *𝙈𝙀𝙉𝙎𝘼𝙅𝙀 | 𝙈𝙀𝙎𝙎𝘼𝙂𝙀*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
conn.reply('16477941070@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮`)

}

handler.help = ['lag', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(traba|lag)$/i 
export default handler
