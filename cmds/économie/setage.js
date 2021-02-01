const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var age = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<:enveloppe:800390849320976425> **Syntaxe : `+setage <Chiffre>`**")
    if (!db.get("age").find({ auteur: author }).value()) {
        db.get("age").push({ auteur: author, age: age }).write()
    } else {
        var useragedb = db.get("age").filter({ auteur: author }).find('age').value()
        var age = Object.values(useragedb)
        db.get("age").find({ auteur: author }).assign({ auteur: author, age: age }).write()
    }
    message.channel.send("<a:check:800412981506080838> **Votre âge a bien été actualisé avec succès !**")
}

module.exports.get = {
    name: "setage"
}