const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    console.log(`|----> ping utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();


        try {
        await message.channel.send(`Pong🏓 \`${Math.sqrt(((new Date() - message.createdTimestamp)/(5*2))**2)}ms \``)
        } catch (e) {

            console.log("✅ Erreur évitée : " + e)

            const error_embed = new MessageEmbed()
            .setColor("#8DFF33")

                .setDescription("🔺 **Il y a eu une erreur avec le bot :**\n```js\n" + e + "```")

            if (message) {

                if (message.author.bot) return

                let message_content = message.content.split(" ")
                if (message_content.length > 20) message_content = message_content.slice(0, 20).join(" ") + " [...] " + message_content[message_content.length - 1]
                if (!message.content) message_content = "Aucun contenu de message !"


                error_embed.addField("🔺 Utilisateur : ", message.author.tag + " | " + message.author.id, true)
                error_embed.addField("🔺 Message / Commande : ", message_content, true)
                error_embed.addField("🔺 Lien vers le message : ", message.url)


                const error_embed_channel = new MessageEmbed()
                    .setColor("#2f3136")
                    .setDescription("🔺 **There is an error with the bot :**\n```js\n" + e + "```\nℹ️ **Louchetop, the bot's creator has been alerted to the problem, so there's no need to report it.**")
                message.channel.send(error_embed_channel)

            }

            let only_at = e.stack.slice(e.toString().length).split("at")[1].split("(")[1].split(")")[0].trim()

            error_embed.addField("🔺 Précisions :", "```\nNom : " + e.name + "\nMessage : " + e.message + "```", true)
            error_embed.addField("🔺 Fichier et Ligne: ", "```cs\n# " + only_at + "```")

            client.users.cache.get("294716504036081664").send(error_embed)

        }
    }



    module.exports.config = {
        name: 'ping'
        }