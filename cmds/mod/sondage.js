const Discord = require('discord.js')
const colors = require('../../colors.json')

module.exports.run = async(bot, message, args) => {

    console.log(`|----> sondage utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(`**${message.author.username}**, Vous n'avez pas la permsission de crée un sondage.`)
    }

    if (!args.join(" ")) return message.reply("**Rentrez votre question !**")

    let firstPollEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setDescription("```\n⌛ Préparation du sondage\n```")
    let secondPollEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setColor(colors.gold)
        .setDescription(`**📥 Sondage :** \n \`\`\`\n${args.join(" ")}\n\`\`\``)
    message.channel.send(firstPollEmbed).then((message) => {
        setTimeout(function() {
            message.edit(secondPollEmbed).then(sentMessage => {
                sentMessage.react('<a:checkmin:791782736347267092>')
                sentMessage.react('<a:482704347772485662:791782856698495009>')
                sentMessage.react('<a:croix:791782785407909888>')
            }).catch(error => {
                message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
            })
        }, 2000)
    }).catch(error => {
        message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
    })
}

module.exports.config = {
    name: 'sondage'
}