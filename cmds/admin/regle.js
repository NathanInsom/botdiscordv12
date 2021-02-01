const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send("Vous n'êtes pas autorisé à utiliser cette commande") // check de perm

    let channel = message.mentions.channels.first();
    if (!channel || channel.type !== "text")
        return message.reply(`**Veuillez spécifier un channel**`);

    let Embed = new Discord.MessageEmbed()
        .setTitle('Règles du serveur')
        .setAuthor(message.guild.name)
        .setImage('https://media1.tenor.com/images/e325ed818954aa7369386f7a28347877/tenor.gif?itemid=17106671')

    channel.send(Embed);

    let Embed2 = new Discord.MessageEmbed()
        .setTitle('- Article 1')
        .setDescription("Le respect des GUIDELINES & TERMS de Discord est obligatoire. Selon la gravité de vos actions, nous nous réservons le droit de procéder à un signalement auprès de l’équipe Confiance & Sécurité de Discord.")
        .addField("- Article 2", "Les blagues discriminatoires et discours haineux (attaques contre une personne ou un groupe en fonction de son origine ethnique, de son origine nationale, de son genre, de son orientation sexuelle, de son appartenance religieuse ou de son handicap) sont strictement interdit et feront l’objet de sanction immédiate sans avertissement au préalable. Merci de noter que défendre ou encourager l'un des comportements ci-dessus fera également l'objet de sanction.")
        .addField("- Article 3", "Le contenu pornographique explicite n’a pas sa place au sein de notre serveur discord. Cela comprend des vidéos, des gifs ou des images fixes représentant des actions sexuelles explicites, réelles ou illustrées, ainsi que des descriptions verbales détaillées d’actes sexuels explicites. Tout contenu ou propos faisant allusion à un site non approprié ne fait pas exception à cette règle.")
        .addField("- Article 4", "Votre profil discord doit rester approprié, la présence de caractères non-alphanumériques dans le pseudonyme est à proscrire, la présence d’un « joue à » ou d’un « custom statut » non-approprié est à proscrire (Lien suspicieux, demande d’argents) la présence d’une photo de profil correct est obligatoire.")
        .addField("- Artcile 5", "La publication de lien menant vers d’autres serveur discord est totalement interdite au sein du serveur discord et fera l’objet de sanction immédiate ainsi qu’une suppression de votre message.")
        .addField("- Article 6", "Lorsqu’une action de modération automatique ou non est mise en place, il est interdit d’en discuter en public, si vous souhaitez la contester, veuillez contacter l'adminitration et nous en discuterons avec vous.")
        .addField("- Article 7", "Le spam, flood d’émoticônes / de caractères est à éviter dans vos messages.")
        .addField("- Article 8", "Mentionner de manière abusive ou sans aucune raison valable sur discord les membres de l'administration, l’équipe technique ou l’assistance est strictement interdit.")
        .addField("- Article 9", "Usurper l’identité d’une tierce personne à des fins frauduleuses ou non est strictement interdit et peut engendrer de lourdes sanctions.")
        .addField("- Article 10", "Le respect de chaques personnes présente au sein de notre serveur discord est primordiale. Les insultes ou même toutes formes de harcèlement n’ont pas leur place au sein de notre serveur discord.")

    channel.send(Embed2);

    let Embed3 = new Discord.MessageEmbed()
        .setTitle('- Article 11')
        .setDescription("Inciter ou partager publiquement un contenu visant à abuser de la confiance de nos utilisateurs est interdit et engendra une sanction immédiate ainsi que la suppression des messages.")
        .addField("- Article 12", "Le « troll » sous n’importe quelle forme est interdit (en vocal comme textuellement).")
        .addField("- Article 13", "L’utilisation des commandes robotiques se font uniquement dans le salon falcutaif a cette utilisation et pas dans un salon général de discussion par exemple.")
        .addField("- Article 14", "Le respect des consignes données par l’équipe de modération est très important. Au bout d’un certains nombre d’avertissement, des sanctions pourraient être mise en place à votre encontre si tel est le cas.")


    channel.send(Embed3);

    let Embed4 = new Discord.MessageEmbed()

    .setTitle('⭐')
        .setDescription("Merci de bien vouloir respecter ces conditions sous peines de lourdes sanction , les modérateurs sont a l'affut ! ")
        .setImage("https://media.giphy.com/media/r11U1nHuXciV2yTvEf/giphy.gif")
    channel.send(Embed4);

    console.log(`|----> setregle utilisé sur le serveur :  ${message.guild.name} `)
}


module.exports.get = {
    name: 'setregle'
}