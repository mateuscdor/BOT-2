const fs = require('npm i fs');
let handler = async (m, { command, text }) => { 
//if (!text) throw `Lo uso mal, vuelva a intentar.` 
let pp = './Menu2.jpg'
if (command == 'abc') {
//let id = text.join(' ')
let ejemplo = `Respuesta 1`

conn.sendHydrated(m.chat, ejemplo, null, pp, null, null, null, null, [
['Caterpie', `.nido1 caterpie1`],
['Ekans', `.juego22 whatsat1`],
['Pikachu', `.juego3 whatsapp33`]
], m,) }

if (command == 'nido1') {
 if (text == 'caterpie1') {
 await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐍𝐈𝐃𝐎𝐒.',
body: '✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}})
 await m.reply(`Resultado 2`)
 await m.reply(`hola`) }
}
  
  if (command == 'juego22') {
 if (text == 'whatsat1') {
 m.reply(`Resultado 2`) }
}  
    
    if (command == 'juego3') {
 if (text == 'whatsapp33') {
 m.reply(`Resultado 3`) }
}
}
 
//handler.help = handler.command = ['NIDO', 'juego2', 'juego3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['abc', 'NIDO1', 'juego22', 'juego3']
handler.tags = ['ejemplo']
handler.command = ['abc', 'nido1', 'juego22', 'juego3'] //'ABRA', 'whatsat', 'whatsapp'

export default  handler
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
