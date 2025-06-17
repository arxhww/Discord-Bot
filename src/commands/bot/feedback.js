const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1384282092682084432",
    token: "rhLA_T3fI3hSKaPJ1R-R5AmN_6c961ILZW9o8yEGiH5puqSbrZjR3rnVANEEOE9rsvjv",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 