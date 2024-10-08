module.exports = {
  config: {
    name: "work",
    //aliases: ['work'];
    version: "1.0",
    author: "LiANE",
    countDown: 10,
    role: 0,
    description: {
        en: "Perform task and earn rewards."
    }, 
    category: "game", 
    guide: {
      en: "   {pn} levelup: balance reward: ?\n"
        + "   {pn} guessingGame: balance reward: ?\n"
        + "   {pn} lucktest: balance reward: ?"
    } 
  },
  
  onStart: async function ({ args, message, event }) {
    const p = global.GoatBot.config.prefix;
    const command = args[0];

    if (command === "levelup") {

      const result = Math.random() > 0.5;
      const reward = result ? 1000 : -500; // Adjust the reward
      const lostReward = Math.abs(reward);
      if (result) {
        return message.reply(`You successfully completed the level up challenge. Congratulations!`);
      } else {
        return message.reply(`The level up challenge didn't go as planned. Better luck next time.`);
      }
    } else if (command === "guessingGame") {
      // Guessing Game: Make it a fun game
      const guess = Math.floor(Math.random() * 10); // Random number to guess
      const userGuess = parseInt(args[1]);

      if (!isNaN(userGuess) && userGuess === guess) {
        const rewards = ["200", "300", "250", "150"]; // Reward Amount
        const rw = Math.floor(Math.random() * rewards.length);
        const reward = rewards[rw];
        return message.reply(`Congratulations! You won the guessing game and earned fake ${reward} $.`);
      } else {
        return message.reply("Try guessing a number between 0 and 9.");
      }
    } else if (command === "lucktest") {
      // Luck Test: Make it a luck-based task
      const lucky = Math.random() > 0.5;
      const reward = lucky ? 1000 : -500; // Reward amount
      if (lucky) {
        return message.reply("Luck was on your side! You passed the luck test.");
      } else {
        return message.reply("Unfortunately, luck wasn't on your side this time.");
      }
    } else if (command === "showAll") {
      // Provide a list of available work commands
      return message.reply(`Available work commands:\n━━━━━━━━━━━━━━━\n`
        + `1. levelup: Random challenge, balance reward: Varies\n`
        + `2. guessingGame: Guessing game, balance reward: Varies\n`
        + `3. lucktest: Luck-based test, balance reward: Varies`);
    } else {
      return message.reply(`Invalid work command. Use \"${p}work showAll\" to see available commands.`);
    }
  }
};
