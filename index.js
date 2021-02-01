const Discord = require('discord.js')
const bot = new Discord.Client();
const { readdirSync } = require('fs')
const color = require('chalk')
const fs = require('fs')
const config = require('./config.json')
require('dotenv').config();

bot.commands = new Discord.Collection()

const loadCommand = (dir = "./cmds/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFilesName = require(`${dir}/${dirs}/${file}`);
            bot.commands.set(getFilesName.config.name, getFilesName)
            console.log("[" + color.blueBright `⭐` + `] : Commande chargé : ${getFilesName.config.name}`);
        };
    });
};

loadCommand()

const loadEvents = (dir = "./events/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const eventFiles = fs.readdirSync(`${dir}/${dirs}/`)
            .filter(files => files.endsWith(".js"));

        for (const event of eventFiles) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            bot.on(evtName, evt.bind(null, bot));
            console.log("| 〽️ | L'évenement " + evtName + " est prêt.");
        };
    });
};
loadEvents();

bot.on("message", async message => {

    if (message.channel.type === "dm")
        eturn;

    let prefix = config.prefix
    if (!message.content.startsWith(prefix))
        return;
    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length))
    if (commandFile)
        commandFile.run(bot, message, args)
})

bot.on('message', message => {
    const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
        return message.channel.send("Regarde `+aide`");
    }
})

bot.on('guildCreate', guild => {

    const embed = new Discord.MessageEmbed()

    .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté Kossi Drôle.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("<:createur:792400653242204170>__Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .addField("<a:Aila_ScribbleHeart:793220850363007006> __Serveurs actuel__ :", true)

    .setColor("#F03A17")
    bot.channels.cache.get(config.defaultChannel).send(embed);
});

bot.login(process.env.AUTH_TOKEN)