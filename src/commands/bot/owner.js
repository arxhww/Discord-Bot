const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `arxhiew`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</arxhiew>#3305`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `VKZhião`,
            inline: true,
        },
        ],
        type: 'editreply'
    }, interaction)
}

 