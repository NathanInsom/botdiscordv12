const Discord = require('discord.js')
const colors = require('../../colors.json')
const client = require('../../index.js')

module.exports.run = async(bot, message, args) => {
    console.log(`|----> suggestion utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();


        if(!args.join(" ")) return message.reply("**Rentrez votre suggestion .**")

        let firstPollEmbed = new Discord.MessageEmbed() 
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true}))
            .setDescription("```\n⌛ Préparation de la suggestions ...\n```")
        let secondPollEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true}))
            .setColor(colors.gold)
            .setDescription(`**📥 Suggestions de ${message.author} :** \n \`\`\`\n${args.join(" ")}\n\`\`\``)
        message.channel.send(firstPollEmbed).then((message) => {
            setTimeout(function(){
                message.edit(secondPollEmbed).then(sentMessage => {
                    sentMessage.react('<:oui:793408503095230504>')
                    sentMessage.react('<:notcheck:793408575212224512>')
                }).catch(error => {
                    message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
                })
            }, 2000)
        }).catch(error => {
            message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
        })
    }



    module.exports.config = {
        name: 'suggestion'
        }