let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}ð *ð¿ðð½ð ð¿ð ððð ðð ðððð¼ð¾ð ðððð ð½ð ð¼ ðððð*\nð¼ *Ingrese el enlace de un grupo.*\n*Enter the link of a group.*\n\n*ððððððð | ððð¼ðððð*\n*#unete ${nn}*\n\n*#join ${nnn}*`

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*â¦ÒÍ¡Íâ³ð»ð²ð¥ð¬ð°ð±â¢ââÍ¡ÍÛÛÛ£ð¹ ðð ðð¼ ðððð¿ð ð¼ð ððððð!!â*\n*ððð¾ð¾ðððððððð ðððððð¿ â*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}â­âââ¢ââââââââââââââââ¢âââ®\nâ ð§ *ððððð¾ðððð¿ ðð¼ðð¼ ðð ððððð*\nâ ð§ *ððððð ððððððð*\nâ°âââ¢ââââââââââââââââ¢âââ¯\n\n*ð¤ ððððð¾ððð¼ððð | ð¼ððððð¾ð¼ðð*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*ð® ðððð¼ð¾ð ð¿ðð ððððð | ððððð ðððð*\n ' + link, jid)

m.reply(`${ag}*â Su enlace se enviÃ³ a MÃ­ Propietario(a).*\n*Your link was sent to My Owner.*\nâââââââââââââââââ\nâ ï¸ *Su Grupo serÃ¡ Evaluado y QuedarÃ¡ a decisiÃ³n de MÃ­ Propietario(a) si ${gt} se une o no al Grupo.*\n*Your Group will be Evaluated and it will be up to My Owner if ${gt} joins the Group or not.*\nâââââââââââââââââ\nâ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*Your Application may be Rejected for the following Reasons:*\n*1ï¸â£ El Bot estÃ¡ Saturado.*\n*The Bot is Saturated.*\nâââââââââââââââââ\n2ï¸â£ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\nâââââââââââââââââ\n3ï¸â£ *El Grupo no cumple con las Normativas de ${gt}*\n*The Group does not comply with the Regulations of ${gt}*\nâââââââââââââââââ\n4ï¸â£ *El enlace del grupo se restableciÃ³.*\n*The group link was restored.*\nâââââââââââââââââ\n5ï¸â£ *No se agrega a Grupos segÃºn Mi Propietario(a).*\n*Not added to Groups by My Owner*\nâââââââââââââââââ\nð *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*\n*The request may take hours to be answered. Please be patient. Thank you*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.exp = 50
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
