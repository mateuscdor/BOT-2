import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}ððð¾ððð½ð¼ ðð ðððð½ðð ð¿ð ðððð¼ððð ð¿ð ðððððð ððð ððð¼ð "@"\nððððððð\n*${usedPrefix + command} mundo_dos_animes81*\n\nðððð ðððð ðððððð ðððððð¼ðð ððððððð ððððð "@"\nððð¼ðððð\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `â ðððð ð¿ð ðððððð | ððððððð ððð¾ðððð\nð *${text}*`, m, false)
  
  let info = `ð *InfÃ³rmate sobre las Novedades y recuerda tener la Ãºltima versiÃ³n.*\n\nð *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, 'â¦ÒÍ¡Íâ³ð»ð²ð¥ð¬ð°ð±â¢ââÍ¡ÍÛÛÛ£ð¹', null, null, [
['ððð£ðª ð¿ðð¨ððð§ððð¨ ð', '#descargasmenu'],
['ððð£ðª ð¾ð¤ð¢ð¥ð¡ðð©ð¤ | ððªð¡ð¡ ððð£ðª â¨', '.allmenu'],
['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ | ð½ððð  ð©ð¤ ððð£ðª âï¸', '/menu']
], m,) 

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
export default handler
