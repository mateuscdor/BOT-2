let handler = async (m, { command, text }) => { 
if (!text) throw `Lo uso mal, vuelva a intentar.` 

if (command == 'juego1 whats') {
 m.reply(`Resultado 1`) 
}
  
  if (command == 'juego2 whatsat') {
    m.reply(`Resultado 2`) 
    
  }   
    
    if (command == 'juego3 whatsapp') {
       m.reply(`Resultado 3`) 
      
    }}
  
handler.help = ['juego1 whats', 'juego2 whatsat', 'juego3 whatsapp'].map(v => v + ' Texto')
handler.tags = ['ejemplo']
handler.command = ['juego1 whats', 'juego2 whatsat', 'juego3 whatsapp']

export default  handler
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
