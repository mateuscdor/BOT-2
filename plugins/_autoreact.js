let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "🎃", "👻", "🤡", "🤝", "💪", "👑", "🥶", "😚", "🐱", "🐈", "🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🍭", "🍩", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "♓️", "♒️", "♑️", "♐️", "♏️", "♎️", "♍️", "♌️", "♋️", "🔯", "🕎", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "✅", "🌝", "😎", "👻", "🔥", "🖕", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(ghost|bot|nidos|pogo|pokemon|pokémon|adm|admin|gracias|menu - bot md)/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 

