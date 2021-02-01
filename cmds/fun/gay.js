const Discord = require("discord.js")
const colors = require('../../colors.json')

module.exports.run = async(bot, message, args) => {
    console.log(`|----> gay utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();
    let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
    let gayrate = Math.floor(Math.random() * 101)


    if (!User) {
        let gayrateEmbed = new Discord.MessageEmbed()
            .setTitle("Est-tu Gay ?")
            .setColor("RANDOM")
            .setDescription(`${message.author} est gay a \`${gayrate}%\` <:tpd:796086751457574943>`)
            .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
        message.channel.send(gayrateEmbed).catch(e => {
            console.log(e)
        })
    } else {
        let argsEmbed = new Discord.MessageEmbed()
            .setTitle("Calcul Gay")
            .setColor("RANDOM")
            .setDescription(`${User.user.username} est \`${gayrate}%\` gay 🏳️‍🌈`)
            .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))

        message.channel.send(argsEmbed).catch(e => {
            console.log(e)
        })
    }
}

module.exports.config = {
    name: 'gay'
}