const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
module.exports.run = async(bot, message, args) => {

    const adapter = new FileSync('./data.json')
    const db = low(adapter)
    const member = message.mentions.users.first() || message.author


    const get_citation = db.get("citation").find({ auteur: member.id }).value()
    let citation = ''
    if (!get_citation) {
        citation = " Aucune"
    } else {
        let citation_msg = Object.values(get_citation)
        citation = citation_msg[1]
    }
    const get_preferer = db.get("preferer").find({ auteur: member.id }).value()
    let preferer = ''
    if (!get_preferer) {
        preferer = "???"
    } else {
        let preferer_msg = Object.values(get_preferer)
        preferer = preferer_msg[1]
    }
    const get_age = db.get("age").find({ auteur: member.id }).value()
    let age = ''
    if (!get_age) {
        age = '0'
    } else {
        let age_msg = Object.values(get_age)
        age = age_msg[1]
    }

    let profil = new Discord.MessageEmbed()
        .setTitle("📌 • __Profil de " + member.tag + "__")

    .addField("🌙 • __Citations__", citation)
        .addField("❤ • __Ce que je préfère__", preferer)
        .addField("🎂 • __Age__", age + " ans")
        .setColor("#DD2E44")
    message.channel.send(profil)
}

module.exports.config = {
    name: "profil"
}