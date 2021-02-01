const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports.run = async(bot, message, args) => {
        console.log(
            `|----> addemoji utilisé sur le serveur :  ${message.guild.name} `
        );

        message.delete();

        if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send(
                `**Vous n'avez pas l'autorisation d'utiliser cette commande** <:ltDND:791708181306540083>`
            );
        }

        const emoji = args[0];
        if (!emoji) return message.channel.send(`Veuillez me donner un emoji !`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
      customemoji.animated ? "gif" : "png"
    }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis
                .create(`${Link}`, `${name || `${customemoji.name}`}`)
      .catch((error) => {
        console.log(error);
      });

    const Added = new MessageEmbed()
      .setTitle(`Emoji Ajouté`)
      .setColor(`${Color}`)
      .setDescription(
        `**L'emoji a été ajouté!** | **Nom :** \`${
          name || `${customemoji.name}`
        }\` | **Aperçu :** [Click ici](${Link})`
      );
    return message.channel.send(Added).catch((e) => {
      console.log(e);
    });
  } else {
    let CheckEmoji = parse(emoji, {
      assetType: "png",
    });
    if (!CheckEmoji[0])
      return message.channel.send(`Veuillez me donner un emoji valide !`);
    message.channel.send(
      `Vous pouvez utiliser des emoji normaux sans ajouter de serveur !`
    );
  }
};
module.exports.get = {
  name: "addemoji",
};