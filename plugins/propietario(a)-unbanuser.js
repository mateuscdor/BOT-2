let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}ā ššš¶š¾šš²šš® š® šš» šššš®šæš¶š¼ š½š®šæš® š±š²ššÆš®š»š²š®šæ.\n šš·š²šŗš½š¹š¼:\n *${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}āššš¶š¾šš²šš® š® šš» šššš®šæš¶š¼ š½š®šæš® š±š²ššÆš®š»š²š®šæ.\nšš·š²šŗš½š¹š¼:\n *${usedPrefix + command} @tag*`
let users = global.db.data.users

let username = conn.getName(who)
conn.reply(m.chat, `${eg}ā šØš¦šØšš„šš¢ ššš¦ššš”šššš¢ ā\n\n *ā Acceso al BOT .*\n *ā Grupos y chat pv.*\n *ā Disfrute del BOT:*\n      ${username}. \n\n*š°ššš“: šš¢š§ ${gt}*`, m)
}

handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.group = true
handler.admin = true
export default handler
