module.exports = (bot) => {
    if (message.content && message.mentions.users.first()) {

        let embedGhostPing = new Discord.MessageEmbed()

        .setColor("#0a0000")
            .setAuthor("GHOSTPING", message.author.displayAvatarURL({ dynamic: true }))
            .addField("Contenue du ghostping", message.content.length < 1024 ? message.content : "Contenue trop long")
            .addField("Membre ayant ghostping", message.author.username)
        message.channel.send(embedGhostPing)
    }

}