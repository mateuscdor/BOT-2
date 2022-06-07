let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}❗ 𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚 ❗ \n\n •𝙀𝗷𝗲𝗺𝗽𝗹𝗼:\n*${usedPrefix + command} el comando ${usedPrefix} (Escribe el reporte)*`
if (text.length < 5) throw `${fg} ✨ *Mínimo 10 caracteres para hacer El Reporte.*\n\n✨ *Minimum 10 characters to make the Report.*`
if (text.length > 9999) throw `${fg} 😼 *Máximo 1000 caracteres para hacer El Reporte.*\n\n😼 *Maximum 1000 characters to make the Report.*`
let teks = `*╭━━[ 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏 ]━━━⬣*\n*┃*\n*┃* *𝙉𝙐𝙈𝙀𝙍𝙊 | 𝙉𝙐𝙈𝘽𝙀𝙍*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *𝙈𝙀𝙉𝙎𝘼𝙅𝙀 | 𝙈𝙀𝙎𝙎𝘼𝙂𝙀*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
conn.reply('51938089515@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n*❗ 𝐑𝐄𝐏𝐎𝐑𝐓𝐄 𝐄𝐗𝐈𝐓𝐎𝐒𝐎 ❗ n\ *• El reporte ha sido enviado a mí Creador.*`)

}

handler.help = ['admin', 'adm'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(admin|adm|)$/i 
export default handler
