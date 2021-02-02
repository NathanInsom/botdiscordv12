const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var desc = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<:enveloppe:800390849320976425> **Merci de donner une citation correcte s'il vous plaît.**")
    if (!db.get("citation").find({ auteur: author }).value()) {
        db.get("citation").push({ auteur: author, citation: desc }).write()
    } else {
        db.get("citation").find({ auteur: author }).assign({ auteur: author, citation: desc }).write()
    }
    message.channel.send("<a:check:800412981506080838> **Votre citation a bien été actualisé avec succès.**")
}

module.exports.get = {
    name: "setcitation"
}