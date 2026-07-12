<div align="center">

<img src="https://readme-typing-svg.herokuapp.com/?font=mono&size=32&duration=4000&color=FF0000&center=true&vCenter=true&lines=⚔️+MELIODAS+BOT+⚔️;🤖+O+Melhor+Bot;👑+by+Gaspar+Devs+%3C%2F%3E" />

<br>

<img src="foto_meliodas.jpeg" alt="Meliodas Bot" width="80%" height="500">


<br>

<p>
<a href="#"><img src="https://img.shields.io/badge/BOT•MULTI•DEVICE-red?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Baileys-Latest-blue?style=for-the-badge"></a>
<a href="#"><img src="https://img.shields.io/badge/Status-Online-00C853?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
</p>

<p>
<img src="https://img.shields.io/badge/Autor-Gaspar%20Devs-orange?style=for-the-badge&logo=github">
<img src="https://img.shields.io/badge/Versão-1.1-orange?style=for-the-badge">
<img src="https://img.shields.io/badge/Licença-Pessoal-red?style=for-the-badge">
<img src="https://img.shields.io/badge/atualização-recente-red?style=for-the-badge">
</p>

</div>

---

## ⚔️ Sobre o Meliodas Bot

O **Meliodas Bot** é um bot de WhatsApp completo, desenvolvido em **Node.js** com a biblioteca `@whiskeysockets/baileys`. Criado por **Gaspar Devs**, oferece mais de **50 comandos** organizados em categorias: moderação, entretenimento, música, proteções automáticas e muito mais.

---

## ✨ Funcionalidades

| Categoria | Descrição |
|---|---|
| 🛡️ **Proteções** | Antilink, Antifake, Antispam, Antipalavra, Antiporn e muito mais |
| 👥 **Moderação** | Ban, Adv, Promover, Rebaixar, Mutar, Del |
| 🎵 **Música** | Baixar áudio e vídeo do YouTube por nome ou link |
| 🌟 **Membros** | Clima, Calculadora, Bíblia, Frases, Roleta |
| 💎 **VIP** | Sistema VIP completo com comandos exclusivos |
| ⚙️ **Configuração** | Prefixo, nome, foto do menu, subdonos e muito mais |
| 🤖 **Bot** | Ligar/desligar, reiniciar, broadcast, eval |
| 👋 **Boas-vindas** | Mensagens de entrada e saída personalizáveis |

---

## 🚀 Instalação Rápida

### Pré-requisitos
- Node.js **18 ou superior**
- npm
- ffmpeg
- yt-dlp *(para comandos de música)*

### 1. Clonar o repositório
```bash
git clone https://github.com/gaspardevs/meliodas-bot.git
cd meliodas-bot
```

### 2. Instalar dependências automaticamente
```bash
node instalacao.js
```

### 3. Instala o yt-dlp e ffmpeg 

```bash
pkg install python-yt-dlp
```

```bash
pkg install ffmpeg
```

> O script instala todas as dependências, cria as pastas e ficheiros necessários automaticamente.

### 3. Configurar o bot
Edita o ficheiro `settings/config.json`:
```json
{
  "nomebot": "Meliodas Bot",
  "prefix": "+",
  "dono": "O teu nome",
  "numerodono": "351912345678",
  "numerobot": "351987654321",
  "canal": "https://whatsapp.com/channel/..."
}
```

### 4. Iniciar o bot
```bash
npm start
```

---

## 📱 Conexão

Ao iniciar pela primeira vez:

**Opção 1 — QR Code:**
1. Escolhe a opção `1` no terminal
2. Aponta a câmara do WhatsApp para o QR Code
3. `WhatsApp → Aparelhos Conectados → Conectar Aparelho`

**Opção 2 — Código de Pareamento:**
1. Escolhe a opção `2` no terminal
2. Insere o teu número com DDI (ex: `351924423740`)
3. O bot gera um código de 8 dígitos
4. `WhatsApp → Aparelhos Conectados → Conectar com código`

---

## 📋 Comandos

### 📂 Menus
| Comando | Descrição |
|---|---|
| `+menu` | 📋 Menu principal |
| `+menuadm` | 👮 Menu de administrador |
| `+menudono` | 👑 Menu do dono |

### 🛠️ Suporte
| Comando | Descrição |
|---|---|
| `+ping` | 🏓 Testar velocidade |
| `+relatarbug` | 🐞 Reportar um bug |
| `+sugerir` | 💡 Dar sugestão |
| `+avaliar` | ⭐ Avaliar o bot |
| `+criador` | 👨‍💻 Info do criador |
| `+dono` | 👑 Info do dono |

### 🎵 Música
| Comando | Descrição |
|---|---|
| `+play <nome>` | 🎵 Baixar áudio por nome |
| `+play2 <nome>` | 🎶 Baixar vídeo por nome |
| `+ytplay3 <link>` | 🎼 Baixar áudio por link |

### 🌟 Membros
| Comando | Descrição |
|---|---|
| `+clima <cidade>` | ☁️ Ver o clima |
| `+calculadora` | 🧮 Calculadora |
| `+biblia` | 📖 Frases bíblicas |
| `+frases` | 💪 Frases motivacionais |
| `+roleta` | 🎰 Roleta de nomes |
| `+totalcases` | 🗂️ Total de comandos |

### 🔒 Proteções *(Admin)*
| Comando | Descrição |
|---|---|
| `+antilink on/off` | 🚫 Anti link |
| `+antifake on/off` | 👻 Anti fake |
| `+antispam on/off` | 📵 Anti spam |
| `+antipalavra on/off` | 🛑 Anti palavrão |
| `+antivideo on/off` | 📹 Anti vídeo |
| `+antimeme on/off` | 🖼️ Anti meme |
| `+antisticker on/off` | 📌 Anti figurinha |
| `+antivoice on/off` | 🎙️ Anti áudio |
| `+antiporn on/off` | 🔞 Anti pornografia |
| `+antidoc on/off` | 📄 Anti documento |

### 👥 Moderação *(Admin)*
| Comando | Descrição |
|---|---|
| `+ban @user` | ⛔ Banir membro |
| `+adv @user\|motivo` | ⚠️ Advertência (3 = ban) |
| `+remadv @user` | ♻️ Remover advertência |
| `+mutar @user` | 🔇 Mutar utilizador |
| `+desmutar @user` | 🔊 Desmutar utilizador |
| `+promover @user` | 👮 Tornar admin |
| `+rebaixar @user` | 👶 Remover admin |
| `+del` | 🗑️ Apagar mensagem |
| `+bemvindo on/off` | 👋 Msg de boas-vindas |
| `+saida on/off` | 🚪 Msg de saída |
| `+msgbv <texto>` | 💬 Personalizar boas-vindas |
| `+msgsaida <texto>` | 💬 Personalizar saída |
| `+statusgp` | 📊 Status do grupo |

### ⚙️ Configurações *(Dono)*
| Comando | Descrição |
|---|---|
| `+setprefix <prefix>` | 🔧 Mudar prefixo |
| `+setnomebot <nome>` | 🤖 Mudar nome do bot |
| `+setdono <nome>` | 👑 Definir nome do dono |
| `+setnumero <num>` | 📱 Mudar número |
| `+setfotomenu` | 🖼️ Mudar foto do menu |
| `+setsubdono1~6 @user` | 🛡️ Definir subdonos |
| `+bangp` | 🚫 Desligar bot no grupo |
| `+unbangp` | ✅ Ligar bot no grupo |

### 🤖 Bot *(Dono)*
| Comando | Descrição |
|---|---|
| `+botoff` | 🔌 Desligar bot globalmente |
| `+boton` | 🔋 Ligar bot globalmente |
| `+reiniciar` | 🔄 Reiniciar bot |
| `+broadcast <msg>` | 📢 Avisar todos os grupos |
| `+eval <código>` | 🧪 Executar código JS |
| `+cases` | 🗂️ Ver todas as cases |

### 💎 VIP *(Dono)*
| Comando | Descrição |
|---|---|
| `+addvip @user` | 💎 Adicionar VIP |
| `+remvip @user` | 🗑️ Remover VIP |
| `+listvip` | 📋 Listar VIPs |

---

## 📁 Estrutura de Ficheiros depois das instalação.

```
meliodas-bot/
├── 📄 conncts.js            ← Conexão com WhatsApp
├── 📄 meliodas.js           ← Ficheiro principal
├── 📄 instalacao.js         ← Instalador automático
├── 📄 consts.js             ← Funções utilitárias
├── 📄 leia-me               ← texto para informação
├── 📄 README.md             ← readme do bot
├── 📄 package-lock.json     ← parte do modulo da biblioteca baileys
├── 📄 package.json          ← parte do modulo da biblioteca baileys
├── 📄 node_modules          ← biblioteca do baileys
├── 📁 settings/
│   ├── config.json          ← Configurações principais
│   ├── config1.json         ← Subdonos
│   ├── message.json         ← Mensagens do bot
│   ├── ativacoes.json       ← Ativações globais
│   └── reacao.json          ← Reações por comando
├── 📁 database/
│   ├── fotomenu/            ← Foto do menu
│   ├── menus/               ← Ficheiros de menu
│   ├── warns/               ← Advertências por grupo
│   └── configu_gp/          ← Configurações por grupo
└── 📁 meliodas-session/     ← Sessão do WhatsApp
```

---

## ⚠️ Variáveis de Boas-vindas

Nas mensagens de boas-vindas e saída podes usar:

| Variável | Descrição |
|---|---|
| `{user}` | Menção ao utilizador |
| `{grupo}` | Nome do grupo |

Exemplo: `Olá {user}, bem-vindo ao {grupo}! 🎉`

---

## 🌐 Suporte

<div align="center">

| Plataforma | Link |
|---|---|
| 📢 Canal | [Canal WhatsApp](https://whatsapp.com/channel/0029VbBUJVj0gcfO9obTtN04) |
| 👨‍💻 Criador | Gaspar Devs </> |

</div>

---

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=24&duration=3500&pause=700&color=FF0000&center=true&vCenter=true&width=850&lines=⚔️+MELIODAS+BOT+⚔️;🚀+Obrigado+por+usar+o+projeto;👑+Criado+por+Gaspar+Devs+%3C%2F%3E" />

<br>

<img src="https://img.shields.io/badge/Feito%20com-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
<img src="https://img.shields.io/badge/Criado%20por-Gaspar%20Devs-FF0000?style=for-the-badge&logo=github&logoColor=white" />

</div>
