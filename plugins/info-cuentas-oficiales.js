let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
ð ð―ððððððððŋð(ðž) ðž ððžð ðūðððððžð ððððūððžððð
ð ððððūððð ðð ððð ðððððūððžð ðžðūðūððððð
Proximamente...
âââââââââââââââââ
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'http://wa.me/+51996089079', 'âĶŌÍĄÍâģðŧðēðĨðŽð°ðąâĒââÍĄÍÛÛÛĢðđ', null, null, [
['ðð§ðŠðĨðĪðĻ ðððððððĄððĻ | ðð§ðĪðŠðĨðĻ ð°', '.grupos'],
['ðūð§ððððĪð§ | ðūð§ðððĐðĪð§ ð°', '#owner'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
