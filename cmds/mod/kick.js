const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**,Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.`)
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Je n'ai pas assez de permission pour utiliser cette commande.`)
    }

    let target = message.mentions.members.first();

    if (!target) {
        return message.channel.send(`**${message.author.username}**, Veuillez mentionner la personne que vous souhaitez expulser.`)
    }

    if (target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, Vous ne pouvez pas vous expulsez`)
    }

    if (!args[1]) {
        return message.channel.send(`**${message.author.username}**, Veuillez donner une raison pour l'expulser`)
    }

    let reason = args[1]
    let embed = new Discord.MessageEmbed()
        .setTitle("<:ltCancel:792502652662448148> Exclusion")
        .setDescription(`L'utilisateur ${target} (${target.id}) a bien été expulser`)
        .setColor("#ff2050")
        .setFooter(`par ${message.author.username}`);

    message.channel.send(embed)
    target.kick(args[1]);
    let mpembed = new Discord.MessageEmbed()
        .setTitle('<:ltCancel:792502652662448148> Sanction')
        .setDescription(`**Vous avez été expulser de ${message.guild.name} **`)
        .addField(`Raison :`, ` ${reason}`)
        .setFooter(`Sanction par ${message.author.tag}`);

    target.send(mpembed)

    console.log(`|----> kick utilisé sur le serveur :  ${message.guild.name} `)
}

module.exports.get = {
    name: "kick"
}