import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'Aqui tienes el link del grupo\n\nhttps://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
body: '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙',         
previewType: 0, thumbnail: fs.readFileSync("./Menulink.jpg"),
sourceUrl: null}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^(link)$/i
handler.group = true
handler.botAdmin = true
export default handler
