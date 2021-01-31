const Discord = require('discord.js')
const colors = require('../../colors.json')
const ms = require('ms')

module.exports.run = async(bot, message, args) => {

    console.log(`|----> lock utilisé sur le serveur :  ${message.guild.name} `)


    message.delete();



if (!message.member.hasPermission("MANAGE_CHANNELS"))
return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("Vous n'avez pas la permission")
    .setColor(colors.red)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
    }))
)
if (!message.mentions.channels.first()) return message.channel.send(
new Discord.MessageEmbed()
.setColor(colors.red)
.setAuthor(message.author.tag, message.author.displayAvatarURL({
    dynamic: true
}))
.setDescription("Spécifiez le channel")
)

if (!message.guild.me.hasPermission) {
return message.channel.send({
    embed: {
        title: 'Erreur',
        description: "Vous n'avez pas la permission d'executer la commande",
        color: "RED",
        footer: {
            text: message.client.user.username,
            icon_url: message.client.user.displayAvatarURL()
        },
        timestamp: new Date()
    }
})
}

let time = args[1] || "30s"

let Channel = message.mentions.channels.first()

try {
await Channel.updateOverwrite(message.guild.id, {
    SEND_MESSAGES: true
});

message.channel.send({
    embed: {
        title: 'Succes !',
        description: `🔒 <#${Channel.id}> à bien était fermer`
    }
})
} catch (err) {
console.log(err);
}

setTimeout(() => {
Channel.updateOverwrite(message.guild.id, {
    SEND_MESSAGES: false
}, ms(time))
})
}



module.exports.config = {
    name: 'lock'
    }