const { Module, isPublic  } = require("../lib/");
const { FancyRandom } = require('abu-bot');

Module({
	pattern: 'intro ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button video',
	type: 'misc',
}, async (message, match) => {


let menu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
│ *Name      :* 𝙱𝙻𝙰𝙲𝙺𝚇𝚉
│ *Place       :* 𝙺𝚎𝚛𝚊𝚕𝚊
│ *Gender   :*  𝙼𝚊𝚕𝚎
│ *Age          :* 1_
│ *IG ID        :* 𝚋𝚕𝚊𝚌𝚔_𝚑𝚊𝚠𝚔𝚡𝚣
│ *Status     :* _
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`;

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: '𝙰𝚗𝚝𝚑𝚊𝚍𝚊 𝚗𝚘𝚔𝚔𝚞𝚗𝚗𝚎 👀🤭'}, type: 1},
]

const buttonMessage = {
    image: {url: 'https://i.imgur.com/vEOyld3.jpeg'},
    caption: FancyRandom(menu),
    footer: 'вlαckхz',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage)

})
