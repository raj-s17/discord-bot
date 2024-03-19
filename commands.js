const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN); //  Enter the bot token

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { // Enter your Client_ID
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
