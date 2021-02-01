const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    console.log(`|---->  nsfw sur  ${message.guild.name} `)

    var superagent = require('superagent');

    if (!message.channel.nsfw)
        return message.channel.send('<:ltCancel:792502652662448148>** Pour utiliser cette commande crée un salon NSFW**')


    var lo = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setDescription("```\n⌛ Préparation de l'image \n```")
        .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'pgif' }).end((err, response) => {
            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:**NSFW**\n**[L'image ne répond pas ? Clique ici](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)

            m.edit(embed_nsfw);
        });
    });
}

module.exports.config = {
    name: "gif"
}