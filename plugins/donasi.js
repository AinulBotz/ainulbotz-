let handler = async m => m.reply(`
            .✵.𝐃𝐎𝐍𝐀𝐒𝐈.✵.

            𝙳𝚊𝚗𝚊 : 085754202785
            𝙶𝚘𝚙𝚊𝚢 : 08971724481
            𝙿𝚞𝚕𝚜𝚊 : 08971724481 (𝚃𝚛𝚒) 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
