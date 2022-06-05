let handler = async (m, { command, text }) => { 
if (!text) throw `Lo uso mal, vuelva a intentar.` 


if (command == 'juego1') {
 m.reply(`Resultado 1`) 
}
  
  if (command == 'juego2') {
    m.reply(`Resultado 2`) 
    
  }   
    
    if (command == 'juego3') {
       m.reply(`Resultado 3`) 
      
    }}
 
//handler.help = handler.command = ['juego1', 'juego2', 'juego3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['juego1', 'juego2', 'juego3']
handler.tags = ['ejemplo']
handler.command = ['juego1', 'juego2', 'juego3'] //'whats', 'whatsat', 'whatsapp'

export default  handler
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
