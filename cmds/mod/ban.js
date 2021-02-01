const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Vous n'avez pas de permissions pour bannir quelqu'un`)
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**,Je n'ai pas les permisssions pour bannir quelqu'un`)
    }

    const target = message.mentions.members.first();

    if (!target) {
        return message.channel.send(`**${message.author.username}**, Veuillez mentionner la personne que vous souhaitez bannir.`)
    }

    if (target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, Vous ne pouvez pas vous bannir !`)
    }
    let reason = args[1]
    if (!reason) reason = 'No Reason';

    let embed = new Discord.MessageEmbed()
        .setTitle("<:ltCancel:792502652662448148> Ban")
        .setDescription(`L'utilisateur  ${target} (${target.id}) à bien était banni`)
        .setColor("#ff2050")
        .setThumbnail(target.avatarURL)
        .setFooter(` par ${message.author.tag}`);

    message.channel.send(embed)
    target.ban({ reason: reason })

    let mpembed = new Discord.MessageEmbed()
        .setTitle('<:ltCancel:792502652662448148> Sanction')
        .setDescription(`**Vous avez été banni de ${message.guild.name} **`)
        .addField(`Raison :`, ` ${reason}`)
        .setFooter(`Sanction par ${message.author.tag}`);

    target.send(mpembed)

    console.log(`|----> ban utilisé sur le serveur :  ${message.guild.name} `)

}


module.exports.config = {
    name: "ban"
}