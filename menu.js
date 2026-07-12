const config = require("../../settings/config.json");

const menu = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
    return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃  ⚡ 𝗠𝗘𝗟𝗜𝗢𝗗𝗔𝗦 - 𝗕𝗢𝗧 ⚡                
┃   「 𝙋𝙊𝘿𝙀𝙍 • 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀 • 𝙄𝙉𝙏𝙀𝙇𝙄𝙂Ê𝙉𝘾𝙄𝘼 」               
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━

╭─「 👤 𝗜𝗡𝗙𝗢 𝗗𝗢 𝗨𝗦𝗨Á𝗥𝗜𝗢 」
│ 🌟 Olá, *${pushname || 'Guerreiro'}*!
│ 🤖 Bot: *${nomebot || 'Meliodas Bot'}*
│ 👑 Dono: *${dono || 'Gaspar Devs'}*
│ 📱 Número: *${numerodono || '351924423740'}*
│ 🕐 Hora: *${hora || '--:--'}*
│ 💎 VIP: *${Isvip ? '✅ Sim' : '❌ Não'}*
╰──────────────────────────

╭─「 📋 𝗠𝗘𝗡𝗨𝗦 」
│ ⚡ ${prefix}menu        » menu principal
│ 👮 ${prefix}menuadm     » menu de admin
│ 👑 ${prefix}menudono    » menu do dono
│ 🔞 ${prefix}menu18      » menu 18
│ 📥 ${prefix}menudown    » menu downloads
╰──────────────────────────

╭─「 🛠️ 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 」
│ 🏓 ${prefix}ping        » testar velocidade
│ 🐞 ${prefix}relatarbug  » reportar um bug
│ 💡 ${prefix}sugerir     » dar sugestão
│ ⭐ ${prefix}avaliar     » avaliar o bot
│ 👨‍💻 ${prefix}criador     » ver o criador
│ 👑 ${prefix}dono        » ver o dono
╰──────────────────────────

╭─「 🌟 𝗠𝗘𝗠𝗕𝗥𝗢𝗦 」
│ ☁️ ${prefix}clima       » ver o clima
│ 🧮 ${prefix}calculadora » calculadora
│ 📖 ${prefix}biblia      » frases bíblicas
│ 💪 ${prefix}frases      » frases motivacionais
│ 🎰 ${prefix}roleta      » roleta de nomes
│ 🗂️ ${prefix}totalcases  » total de cases
│ 🌙 ${prefix}afk         » fica afk
│ ✅ ${prefix}on          » fica on
│ 📱 ${prefix}termuxhelp  » ajuda com termux
│ 📌 ${prefix}admins      » lista de admins
╰──────────────────────────

╭─「 🖼️ FIGURINHA 」
│ 🌀 ${prefix}s           » cria figurinha
│ 🖼️ ${prefix}toimg       » reverte figurinha
╰──────────────────────────


⚡ *𝗠𝗘𝗟𝗜𝗢𝗗𝗔𝗦 𝗕𝗢𝗧* — 𝙊 𝙢𝙚𝙡𝙝𝙤𝙧 𝙗𝙤𝙩 𝙙𝙤 𝙯𝙖𝙥! ⚡
`;
};
exports.menu = menu;

const menudown = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
    return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃    📥 𝗠𝗘𝗡𝗨 𝗗𝗘 DOWNLOAD 📥    
┃   「 𝙋𝙊𝘿𝙀𝙍 • 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀 • 𝙄𝙉𝙏𝙀𝙇𝙄𝙂Ê𝙉𝘾𝙄𝘼 」              
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━

╭─「 👤 𝗜𝗡𝗙𝗢 𝗗𝗢 𝗨𝗦𝗨Á𝗥𝗜𝗢 」
│ 🌟 Olá, *${pushname || 'Guerreiro'}*!
│ 🤖 Bot: *${nomebot || 'Meliodas Bot'}*
│ 👑 Dono: *${dono || 'Gaspar Devs'}*
│ 📱 Número: *${numerodono || '351924423740'}*
│ 🕐 Hora: *${hora || '--:--'}*
│ 💎 VIP: *${Isvip ? '✅ Sim' : '❌ Não'}*
╰──────────────────────────

╭─「 🎵 𝗠Ú𝗦𝗜𝗖𝗔 」
│ 🎵 ${prefix}play        » tocar áudio
│ 🎬 ${prefix}play2       » tocar vídeo
│ 🎼 ${prefix}ytplay3     » baixar por link
╰──────────────────────────

╭─「 📥 REDES SOCIAIS 」
│ 📥 ${prefix}tiktok        » baixa video do tiktok
│ 📥 ${prefix}instagram      » baixa video do instagram
╰──────────────────────────

⚡ *𝗠𝗘𝗟𝗜𝗢𝗗𝗔𝗦 𝗕𝗢𝗧* — 𝙊 𝙢𝙚𝙡𝙝𝙤𝙧 𝙗𝙤𝙩 𝙙𝙤 𝙯𝙖𝙥! ⚡
`;
};
exports.menudown = menudown;

const menuadm = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃    👮 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗗𝗠𝗜𝗡 👮    
┃   「 𝙋𝙊𝘿𝙀𝙍 • 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀 • 𝙄𝙉𝙏𝙀𝙇𝙄𝙂Ê𝙉𝘾𝙄𝘼 」   
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━

╭─「 👤 𝗜𝗡𝗙𝗢 𝗗𝗢 𝗔𝗗𝗠𝗜𝗡 」
│ 🌟 Olá, Admin *${pushname || 'Guerreiro'}*!
│ 🤖 Bot: *${nomebot || 'Meliodas Bot'}*
│ 👑 Dono: *${dono || 'Gaspar Devs'}*
│ 📱 Número: *${numerodono || '351924423740'}*
│ 🕐 Hora: *${hora || '--:--'}*
│ 💎 VIP: *${Isvip ? '✅ Sim' : '❌ Não'}*
╰──────────────────────────

╭─「 🔒 𝗣𝗥𝗢𝗧𝗘ÇÕ𝗘𝗦 」
│ 🚫 ${prefix}antilink    » anti link
│ 🔗 ${prefix}antilinkgp  » anti link de grupos
│ 🚷 ${prefix}antilinkhard» anti link hard (ban)
│ 👻 ${prefix}antifake    » anti fake
│ 🛑 ${prefix}antipalavra » anti palavrão
│ 📵 ${prefix}antispam    » anti spam
│ 📹 ${prefix}antivideo   » anti vídeo
│ 📌 ${prefix}antisticker » anti figurinha
│ 🎙️ ${prefix}antivoice   » anti áudio
│ 📄 ${prefix}antidoc     » anti documento
╰──────────────────────────

╭─「 👥 𝗚𝗘𝗦𝗧Ã𝗢 𝗗𝗢 𝗚𝗥𝗨𝗣𝗢 」
│ ⛔ ${prefix}banir       » banir membro
│ 🔇 ${prefix}mutar       » mutar grupo
│ 🔊 ${prefix}desmutar    » desmutar grupo
│ ⚠️ ${prefix}adv         » dar advertência
│ ♻️ ${prefix}remadv      » remover advertência
│ 🗑️ ${prefix}del         » apagar mensagem
│ 👮 ${prefix}promover    » tornar admin
│ 👶 ${prefix}rebaixar    » remover admin
│ 👋 ${prefix}bemvindo    » boas-vindas on/off
│ 🚪 ${prefix}saida       » saída on/off
│ ✏️ ${prefix}msgbv       » mensagem boas-vindas
│ ✏️ ${prefix}msgsaida    » mensagem de saída
│ 📊 ${prefix}statusgp    » proteções ativos
╰──────────────────────────

⚡ *𝗠𝗘𝗟𝗜𝗢𝗗𝗔𝗦 𝗕𝗢𝗧* — 𝙊 𝙢𝙚𝙡𝙝𝙤𝙧 𝙗𝙤𝙩 𝙙𝙤 𝙯𝙖𝙥! ⚡
`;
};
exports.menuadm = menuadm;

const menudono = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃    👑 𝗠𝗘𝗡𝗨 𝗗𝗢 𝗗𝗢𝗡𝗢 👑    
┃   「 𝙋𝙊𝘿𝙀𝙍 • 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀 • 𝙄𝙉𝙏𝙀𝙇𝙄𝙂Ê𝙉𝘾𝙄𝘼 」   
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━

╭─「 👤 𝗜𝗡𝗙𝗢 𝗗𝗢 𝗗𝗢𝗡𝗢 」
│ 👑 Olá, Dono *${pushname || 'Guerreiro'}*!
│ 🤖 Bot: *${nomebot || 'Meliodas Bot'}*
│ 👑 Dono: *${dono || 'Gaspar Devs'}*
│ 📱 Número: *${numerodono || '351924423740'}*
│ 🕐 Hora: *${hora || '--:--'}*
│ 💎 VIP: *${Isvip ? '✅ Sim' : '❌ Não'}*
╰──────────────────────────

╭─「 ⚙️ 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔Ç Õ𝗘𝗦 」
│ 🔧 ${prefix}setprefix   » mudar prefixo
│ 🤖 ${prefix}setnomebot  » mudar nome do bot
│ 👑 ${prefix}setdono     » definir dono
│ 📱 ${prefix}setnumero   » mudar número
│ 🖼️ ${prefix}setfotomenu » mudar foto do menu
│ 🛡️ ${prefix}setsubdono  » adicionar subdono (1-6)
╰──────────────────────────

╭─「 🤖 𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗘 𝗗𝗢 𝗕𝗢𝗧 」
│ 🔌 ${prefix}botoff      » desligar bot
│ 🔋 ${prefix}boton       » ligar bot
│ 🔄 ${prefix}reiniciar   » reiniciar bot
│ 📢 ${prefix}broadcast   » avisar todos os grupos
╰──────────────────────────

╭─「 💎 𝗩𝗜𝗣 」
│ ➕ ${prefix}addvip      » adicionar VIP
│ ➖ ${prefix}remvip      » remover VIP
│ 📋 ${prefix}listvip     » listar VIPs
╰──────────────────────────

╭─「 🧪 𝗔𝗩𝗔𝗡Ç𝗔𝗗𝗢 」
│ 🗂️ ${prefix}cases       » ver todas as cases
│ 🧪 ${prefix}eval        » executar código
│ 💥 ${prefix}bangp       » banir de grupo
│ 💥 ${prefix}unbangp     » desbanir de grupo
│ 🚫 ${prefix}blockcmd    » bloquear comando
│ ✅ ${prefix}unblockcmd  » desbloquear comando
╰──────────────────────────

⚡ *𝗠𝗘𝗟𝗜𝗢𝗗𝗔𝗦 𝗕𝗢𝗧* — 𝙊 𝙢𝙚𝙡𝙝𝙤𝙧 𝙗𝙤𝙩 𝙙𝙤 𝙯𝙖𝙥! ⚡
`;
};
exports.menudono = menudono;

const menu18 = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃    🔞 MENU +18 🔞    
┃   「 𝙋𝙊𝘿𝙀𝙍 • 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀 • 𝙄𝙉𝙏𝙀𝙇𝙄𝙂Ê𝙉𝘾𝙄𝘼 」   
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━

╭─「 👤 INFO DO BOT 」
│ 👑 Olá, Dono *${pushname || 'Guerreiro'}*!
│ 🤖 Bot: *${nomebot || 'Meliodas Bot'}*
│ 👑 Dono: *${dono || 'Gaspar Devs'}*
│ 📱 Número: *${numerodono || '351924423740'}*
│ 🕐 Hora: *${hora || '--:--'}*
│ 💎 VIP: *${Isvip ? '✅ Sim' : '❌ Não'}*
╰──────────────────────────

╭─「 🔥 GIFS +18 🔥 」
│ 🔞 ${prefix}gif  
│ 🔞 ${prefix}gif1  
│ 🔞 ${prefix}gif2     
│ 🔞 ${prefix}gif3   
│ 🔞 ${prefix}gif4 
│ 🔞 ${prefix}gif5  
│ 🔞 ${prefix}gif6  
│ 🔞 ${prefix}gif7  
│ 🔞 ${prefix}gif8 
│ 🔞 ${prefix}gif9  
│ 🔞 ${prefix}gif10  
╰──────────────────────────

╭─「 🔥 ATRIZ VIDEOS 🔥 」
│ 🔞 ${prefix}lilix   » Lilixx
│ 🔞 ${prefix}katty   » Katty Soarez
│ 🔞 ${prefix}yasmina » Yasmina Khan
│ 🔞 ${prefix}maya    » Maya Portugal
│ 🔞 ${prefix}julia   » juliafit
│ 🔞 ${prefix}eva     » Eva Keks
│ 🔞 ${prefix}skye    » Skye Young
│ 🔞 ${prefix}erica   » Erica Fontes
│ 🔞 ${prefix}West    » Katty West
│ 🔞 ${prefix}sweetie » Sweetie Fox
│ 🔞 ${prefix}miss    » Missdriada
╰──────────────────────────

╭─「 🔥 FOTOS +18 🔥 」
│ 🔞 ${prefix}foto   
│ 🔞 ${prefix}foto1   
│ 🔞 ${prefix}foto2 
│ 🔞 ${prefix}foto3    
│ 🔞 ${prefix}foto4   
│ 🔞 ${prefix}foto5     
│ 🔞 ${prefix}foto6   
│ 🔞 ${prefix}foto7   
│ 🔞 ${prefix}foto8  
│ 🔞 ${prefix}foto9  
│ 🔞 ${prefix}foto10    
╰──────────────────────────

╭─「🔥 HENTAI 🔥 」
│ 🔞 ${prefix}hentai   
│ 🔞 ${prefix}hentai1   
│ 🔞 ${prefix}hentai2 
│ 🔞 ${prefix}hentai3    
│ 🔞 ${prefix}hentai4   
│ 🔞 ${prefix}hentai5     
│ 🔞 ${prefix}hentai6   
│ 🔞 ${prefix}hentai7   
│ 🔞 ${prefix}hentai8  
│ 🔞 ${prefix}hentai9  
│ 🔞 ${prefix}hentai10    
╰──────────────────────────

⚡ *𝗠𝗘𝗟𝗜𝗢𝗗𝗔𝗦 𝗕𝗢𝗧* — 𝙊 𝙢𝙚𝙡𝙝𝙤𝙧 𝙗𝙤𝙩 𝙙𝙤 𝙯𝙖𝙥! ⚡
`;
};
exports.menu18 = menu18;