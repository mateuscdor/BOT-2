let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "👻", "🤡", "🤝", "💪", "👑", "🥶","🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "♓️", "♒️", "♑️", "♐️", "♏️", "♎️", "♍️", "♌️", "♋️", "🔯", "🕎", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "✅", "🌝", "😎", "👻", "🔥"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(ghost|pogo|pokemon|pokémon|jhonnier|shiny|bot - md)/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 

