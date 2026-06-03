require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const { batimentChoices } = require('./batiments');

const TOKEN = process.env.DISCORD_TOKEN;
const APPLICATION_ID = process.env.DISCORD_APPLICATION_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

if (!TOKEN || !APPLICATION_ID || !GUILD_ID) {
    console.error('❌ Variables manquantes : DISCORD_TOKEN, DISCORD_APPLICATION_ID, DISCORD_GUILD_ID');
    process.exit(1);
}

const batimentCommand = new SlashCommandBuilder()
    .setName('batiment')
    .setDescription('Obtenir les infos d\'un bâtiment ESGI')
    .addStringOption((option) =>
        option
            .setName('lieu')
            .setDescription('Choisir le bâtiment')
            .setRequired(true)
            .addChoices(...batimentChoices),
    );

const rest = new REST().setToken(TOKEN);
const commands = [batimentCommand.toJSON()];

rest.put(Routes.applicationCommands(APPLICATION_ID), { body: [] })
    .then(() => console.log('🗑️ Commandes globales supprimées'))
    .then(() => rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), { body: commands }))
    .then(() => console.log('✅ Commande /batiment enregistrée sur le serveur'))
    .catch(console.error);
