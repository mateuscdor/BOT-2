let handler = async m => m.reply(`
*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*

*LA CALABERA MALDITA - CHICA BOT* 

💥 𝐑𝐄𝐐𝐔𝐈𝐒𝐈𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 💥
➤ Termux  
➤ 1 GB de memoria en el teléfono
➤ Aconsejable un WhatsApp secundario
➤ Aconsejable un numero secundario
➤ 2 teléfonos o un 1 teléfono y una PC (es temporal - solo para escanear un código QR)

💥 𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 💥
➤ EJEMPLO:  git clone https://github.com/Fxmods/FX-SELF-BOT-v83.2

💥 𝐀𝐑𝐄𝐀 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 💥
➤ Termux: https://f-droid.org/en/packages/com.termux/
➤ WhatsApp recomendado: https://download853.mediafire.com/xawpdplr7wvg/u133oxjqtiry52t/%E2%9E%A2+SOLITARIO+BUSINESS+%E2%9E%A2_2.21.19.21.apk
   
💥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 𝐕𝐈𝐀 𝐆𝐈𝐓𝐇𝐔𝐁 💥
> termux-setup-storage
➤ apt update && apt upgrade -y -y
➤ apt install git -y
➤ apt install nodejs -y
➤ apt install ffmpeg -y
➤ apt install imagemagick -y
➤ git clone "Aquí ponen el link de su bot"
➤ cd ShadowBotV3
➤ npm install
➤ npm install -g npm@8.5.4
➤ npm update
➤ npm start
° Escaneas el código QR tienes 30 segundos para hacerlo

💥 INFO EXTRA 💥
➤ Se sugiere leer el archivo README.md  
➤ Para habilitar el /añadir y el /sacar usa #enable autoread
- Puede ocasionar que el numero se vaya a soporte 
➤ PayPal para apoyo voluntario: romansystem.3786@gmail.com
➤ Numero de ayuda durante la instalacion: wa.me/51926328073 (No Bot, solo ayuda durante la instalación)

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
