module.exports = (bot) => {

    console.log(`(${bot.user.username}): Je suis connecté`)
    let statuses = [
        `+aide | ${bot.guilds.cache.size} serveurs`,
        `${bot.guilds.cache.reduce((a, g) => a + g.memberCount,0)} Utilisateurs`,
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "WATCHING" })
    }, 5000)
}