const config = require("../../settings/config.json");

const menu = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
    return `
╔══════════════════════════╗
║   🤖  MELIODAS BOT  🤖    ║
╚══════════════════════════╝
 
〔 INFO USER 〕
olá senhor: ${pushname || 'user'}, 
seja bem-vindo ao ${nomebot || 'meliodas-bot'}! 
nome do dono: ${dono || 'gaspar-devs'} 
número do dono: ${numerodono || '351924423740'} 
hora: ${hora || 'indefinido'}
é vip: ${Isvip || 'indefinido'}
Aproveite as funcionalidades do bot e divirta-se!

〔 Diversos menus 〕

${prefix}menu        📋 mostrar este menu
${prefix}menuadm     👮 menu do adm 
${prefix}menudono    👑 menu do dono

〔 🛠️ SUPORTE 〕
${prefix}ping        🏓 testar velocidade
${prefix}relatarbug  🐞 reportar um bug
${prefix}sugerir     💡 dar sugestão
${prefix}avaliar     ⭐ avaliar o bot
${prefix}criador     👨‍💻 criador do bot
${prefix}dono        👑 dono do bot
 
〔 🎵 MÚSICA 〕
${prefix}play        🎵 tocar audio
${prefix}play2       🎶 tocar video
${prefix}ytplay3     🎼 baixar audio por link

 
〔 🌟 MEMBROS 〕
${prefix}clima       ☁️ ver o clima
${prefix}calculadora 🧮 calculadora
${prefix}biblia      📖 frases bíblicas
${prefix}frases      💪 motivacionais
${prefix}roleta      🎰 roleta de nomes
${prefix}totalcases  🗂️ mostra total de cases
 
━━━━━━━━━━━━━━━━━━━━━━━━━


`;
};

exports.menu = menu;

const menuadm = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
return `
╔══════════════════════════╗
║   👮  MENU DE ADMIN  👮    ║
╚══════════════════════════╝

〔 INFO USER 〕
olá adm: ${pushname || 'user'}, 
seja bem-vindo ao ${nomebot || 'meliodas-bot'}! 
nome do dono: ${dono || 'gaspar-devs'} 
número do dono: ${numerodono || '351924423740'} 
hora: ${hora || 'indefinido'}
é vip: ${Isvip || 'indefinido'}
Aproveite as funcionalidades do bot e divirta-se!
 
〔 🔒 PROTEÇÕES 〕
${prefix}antilink    🚫 anti link
${prefix}antifake    👻 anti fake
${prefix}antispam    📵 anti spam
${prefix}antipalavra 🛑 anti palavrão
${prefix}antivideo   📹 anti vídeo
${prefix}antimeme    🖼️ anti meme
${prefix}antisticker 📌 anti figurinha
${prefix}antivoice   🎙️ anti áudio
${prefix}antiporn    🔞 anti pornografia
${prefix}antidoc     📄 anti documento
${prefix}bemvindo    👋 1/0
${prefix}saida       👋 1/0
 
〔 👥 GESTÃO 〕
${prefix}banir       ⛔ banir membro
${prefix}mutar       🔇 mutar grupo
${prefix}desmutar    🔊 desmutar grupo
${prefix}adv         ⚠️ dar advertência
${prefix}remadv      ♻️ tira advertência
${prefix}del         🗑️ apagar mensagem
${prefix}promover    👮 tornar admin
${prefix}rebaixar    👶 remover admin
${prefix}msgbv       👋 msg bem vindo
${prefix}msgsaida    👋 mensagem saida
${prefix}statusgp    📊 mostra ativos

━━━━━━━━━━━━━━━━━━━━━━━━━`;
};

exports.menuadm = menuadm;

const menudono = (prefix, pushname, dono, numerodono, nomebot, hora, Isvip) => {
return `
╔══════════════════════════╗
║    👑  MENU DO DONO  👑    ║
╚══════════════════════════╝

〔 INFO USER 〕
olá dono: ${pushname || 'user'}, 
seja bem-vindo ao ${nomebot || 'meliodas-bot'}! 
nome do dono: ${dono || 'gaspar-devs'} 
número do dono: ${numerodono || '351924423740'} 
hora: ${hora || 'indefinido'}
é vip: ${Isvip || 'indefinido'}
Aproveite as funcionalidades do bot e divirta-se!
 
〔 ⚙️ CONFIGURAÇÕES 〕
${prefix}setprefix    🔧 mudar prefixo
${prefix}setnomebot   🤖 mudar nome do bot
${prefix}setdono      👑 definir dono
${prefix}setnumero    📱 mudar número
${prefix}setfotomenu  🖼️ muda a foto do menu
${prefix}setsubdono   🛡️ adiciona subdono 1 a 6
 
〔 🤖 BOT 〕
${prefix}botoff      🔌 desligar bot
${prefix}boton       🔋 ligar bot
${prefix}reiniciar   🔄 reiniciar
${prefix}broadcast   📢 avisar todos
 
〔 💎 VIP 〕
${prefix}addvip      💎 adicionar VIP
${prefix}remvip      💎 remover VIP
${prefix}listvip     📋 listar VIPs
 
〔 🧪 AVANÇADO 〕
${prefix}cases       🗂️ mostra as cases
${prefix}eval        🧪 executar código
${prefix}bangp       💥 banir em grupo
${prefix}unbangp     💥 desbanir em grupo
${prefix}blockcmd    🚫 bloquear comando
${prefix}unblockcmd  ✅ desbloquear comando

━━━━━━━━━━━━━━━━━━━━━━━━━
`;
};

exports.menudono = menudono;