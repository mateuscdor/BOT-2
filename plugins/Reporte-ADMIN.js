let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}β ππ¨ππ§πππ ππ‘ π§ππ₯π€π§π©π β\n\n β’ππ·π²πΊπ½πΉπΌ:\n*/admin o /adm (Escribe el reporte)*`
if (text.length < 5) throw `${fg} β¨ *MΓ­nimo 5 caracteres para hacer El Reporte.*\n\nβ¨ *Minimum 5 characters to make the Report.*`
if (text.length > 100) throw `${fg}  *MΓ‘ximo 100 caracteres para hacer El Reporte.*\n\n *Maximum 100 characters to make the Report.*`
let teks = `*β­ββ[ πππππππ | ππππππ ]ββββ¬£*\n*β*\n*β* *ππππππ | ππππ½ππ*\nβ β¦ Wa.me/${m.sender.split`@`[0]}\n*β*\n*β* *πππππΌππ | πππππΌππ*\n*β* β¦ ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`
conn.reply('51938089515@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`β»οΈπππππππππππππ. | \n\nβ πππππππ πππππππ β \n *β’ El reporte ha sido enviado a mΓ­ Creador.*`)

}

handler.help = ['admin', 'adm'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(admin|adm|)$/i 
export default handler
