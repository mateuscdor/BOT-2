let handler = async (m, { command }) => { 
throw `Lo uso mal, vuelva a intentar.` 

if (command == 'juego1') {
 m.reply(`Resultado 1`) 
}
  
  if (command == 'juego2') {
    m.reply(`Resultado 2`) 
    
  }   
    
    if (command == 'juego3') {
       m.reply(`Resultado 3`) 
      
    }}
  
handler.help = ['juego1', 'juego2', 'juego3'].map(v => v + '@ | nombre')
handler.tags = ['ejemplo']
handler.command = ['juego1', 'juego2', 'juego3']

export default  handler
  
