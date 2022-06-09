let handler = async (m, { command, text }) => { 
//if (!text) throw `Lo uso mal, vuelva a intentar.` 
let pp = './Menu2.jpg'
if (command == 'go') {
//let id = text.join(' ')
let ejemplo = `Respuesta 1`

conn.sendHydrated(m.chat, ejemplo, null, pp, null, null, null, null, [
['Caterpie', `.nido caterpie`],
['Ekans', `.juego2 whatsat`],
['Pikachu', `.juego3 whatsapp`]
], m,) }

if (command == 'nido') {
 if (text == 'caterpie') {
 m.reply(`Resultado 1`) }
 m.reply(`hola`) }
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
 
//handler.help = handler.command = ['NIDO', 'juego2', 'juego3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['go', 'NIDO', 'juego2', 'juego3']
handler.tags = ['ejemplo']
handler.command = ['go', 'nido', 'juego2', 'juego3'] //'ABRA', 'whatsat', 'whatsapp'

export default  handler
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
