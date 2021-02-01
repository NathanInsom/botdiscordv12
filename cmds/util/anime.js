const Discord = require('discord.js')
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();

module.exports.run = async(bot, message, args) => {
    console.log(`|----> anime utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();


    var search = message.content.split(/\s+/g).slice(1).join(" ");
    if (!args[0]) return message.channel.send("**Specifiez un anime .**")
    kitsu.searchAnime(search).then(async result => {
        if (result.length === 0) return message.channel.send("**Je ne trouve pas cette anime , désolé .**")

        let anime = result[0]
        const embed = new Discord.MessageEmbed()
            .setColor("fcba03")
            .setAuthor(`${anime.titles.english ? anime.titles.english : search} `)
            .addField('`❯ Information`', `**Nom :** ${anime.titles.romaji}\n\**Est-ce NSFW :** ${anime.nsfw ? 'Oui' : 'Non'}\n\**Note :** ${anime.averageRating}`, true)
            .addField('`❯ Statistique`', `**Classement Popularité :** ${anime.popularityRank}\n\**Nombre d'épisodes :** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n`, true)

        .setThumbnail(anime.posterImage.original, 100, 200);
        return message.channel.send(embed)
    }).catch(err => {
        console.log(err)
        return message.channel.send(`Impossible de trouver le résultat pour ${search}`)
    })
}

module.exports.config = {
    name: "anime"
}