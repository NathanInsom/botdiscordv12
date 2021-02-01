const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data.json')
const db = low(adapter)

module.exports.run = async(bot, message, args) => {
    console.log(`|----> addnote utilisé sur le serveur :  ${message.guild.name} `)

    var args = message.content.split(" ").slice(1);
    var msg_note = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<:enveloppe:800390849320976425>   **Merci de me donner des notes correctes s'il vous plaît.**")
    if (!db.get("note").find({ auteur: author }).value()) {

        db.get("note").push({ auteur: author, notes: msg_note }).write()

    } else {

        var usernotedb = db.get("note").filter({ auteur: author }).find('notes').value()

        var note = Object.values(usernotedb)

        db.get("note").find({ auteur: author }).assign({ auteur: author, notes: msg_note }).write()
    }
    message.delete()
    message.channel.send("<:enveloppe:800390849320976425> **Votre note a bien été actualisés avec succès.**")
}

module.exports.config = {
    name: "addnote"
}