const Discord = require("discord.js");
const request = require("request");

exports.run = (client, message) => {
    const baseUrl = "https://thatcopy.pw/catapi/rest";

    request(baseUrl, function (error, _response, body) {
        if (error) {
            message.channel.send("Sorry something seems to have gone wrong!");
            console.log(error);
            return;
        }

        body = JSON.parse(body);
        const imgURL = body.url;

        const emb = new Discord.MessageEmbed();
            emb.setColor(client.config.embedColor);
            emb.setImage(imgURL);

        message.channel.send(emb);
    })
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "image",
    name: "copycat",
    description: "Gets a copy cat from copy's catAPI",
    usage: "`yabe copycat`",
}
