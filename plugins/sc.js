let handler = async m => m.reply(`
𝙱𝚎𝚕𝚒 𝙻𝚊𝚑 𝙱𝚊𝚗𝚐 𝙰𝚖𝚊 𝙾𝚠𝚗𝚎𝚛 : wa.me/${owner[0]}
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler