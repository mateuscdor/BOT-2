let handler = async (m, { command, text }) => { 
if (!text) throw `Lo uso mal, vuelva a intentar.` 
let pp = './Menu2.jpg'
//let id = text.join(' ')

conn.sendHydrated(m.chat, `Respuesta 1`, null, pp, null, null, null, null, [
['Juego 1', `.juego1 whats`],
['Juego 2', `.juego2 whatsat`],
['Juego 3', `juego3 whatsapp`]
], m,)

if (command == 'juego1') {
 if (text == 'whats') {
 m.reply(`Resultado 1`) }
}
  
  if (command == 'juego2') {
 if (text == 'whatsat') {
 m.reply(`Resultado 2`) }
}  
    
    if (command == 'juego3') {
 if (text == 'whatsapp') {
 m.reply(`Resultado 3`) }
}
}
 
//handler.help = handler.command = ['juego1', 'juego2', 'juego3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['juego1', 'juego2', 'juego3']
handler.tags = ['ejemplo']
handler.command = ['go', 'juego1', 'juego2', 'juego3'] //'whats', 'whatsat', 'whatsapp'

export default  handler
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
