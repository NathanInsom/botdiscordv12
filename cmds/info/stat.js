const { Discord, version } = require("discord.js");
const moment = require("moment");
let os = require("os");
let cpuStat = require("cpu-stat");

module.exports.run = async(bot, message, args) => {
        message.delete();
        cpuStat.usagePercent(async function(err, percent, seconds) {
                    if (err) {
                        return console.log(err);
                    }
                    const duration = moment
                        .duration(message.client.uptime)
                        .format(" D [days], H [hrs], m [mins], s [secs]");
                    const botinfo = new Discord.MessageEmbed()
                        .setAuthor(message.client.user.username)
                        .setTitle("__**Statistique :**__")
                        .setColor("RANDOM")
                        .addField(
                            "`⏳` Mémoire ",
                            `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024 ).toFixed(2)} MB`,
                            true)
                        .addField("`⌚️` Disponibilité ", `${duration}`, true)
                        .addField(
                            "`📁` Utilisateurs",
                            `${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`,
                            true
                        )
                        .addField("`📁` Serveurs", `${message.client.guilds.cache.size}`, true)
                        .addField("`📁` Channels ", `${message.client.channels.cache.size}`, true)
                        .addField("`👾` Discord.js", `v${version}`, true)
                        .addField("`👾` Développeur", `Insom#0009`, true)
                        .addField("`🤖` Node", `${process.version}`, true)
                        .addField(
                            "`🤖` CPU",
                            `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
      )
      .addField("`🤖` CPU usage", `\`${percent.toFixed(2)}%\``, true)
      .addField("`💻`Plate-forme", `\`\`${os.platform()}\`\``, true)
      .addField("Latence API", `${message.client.ws.ping}ms`);
    message.channel.send(botinfo);

    console.log(`|----> stat utilisé sur le serveur :  ${message.guild.name} `);
  });
};
module.exports.get = {
  name: "stat",
};