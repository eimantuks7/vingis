(function () {

  // Define our function responsible for extending the bot.
  function extend() {
      // If the bot hasn't been loaded properly, try again in 1 second(s).
      if (!window.bot) {
        return setTimeout(extend, 1 * 1000);
      }

      // Precaution to make sure it is assigned properly.
      var bot = window.bot;

      // Load custom settings set below
      bot.retrieveSettings();

      //Extend the bot here, either by calling another function or here directly.

      // You can add more spam words to the bot.
      var spamWords = ['geriausieji', 'duxas', 'duhas', 'pydaras', 'gaidys', 'naxui'];
      for (var i = 0; i < spamWords.length; i++) {
        window.bot.chatUtilities.spam.push(spamWords[i]);
      }

      // Example code for a bot command:
      bot.commands.baconCommand = {
        command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
        rank: 'user', // Minimum user permission to use the command
        type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
        functionality: function (chat, cmd) {
          if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
          if (!bot.commands.executable(this.rank, chat)) return void (0);
          else {
            API.sendChat("/me Bacon!!!");
          }
        }
      };

      // Load the chat package again to account for any changes
      bot.loadChat();

    }

  //Change the bots default settings and make sure they are loaded on launch

  localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: 'BasicBot v3.3.1',
      language: 'lithuanian',
      chatLink: 'https://raw.githack.com/likux35/lietuvos-bendruomene-basicbot/master/lang/lt-LT.json',
      scriptLink: 'https://raw.githack.com/likux35/lietuvos-bendruomene-basicbot/master/run/bot-source.js',
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 200, // 1-200
      startupVolume: 15, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 99999,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: true,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 10,
      historySkip: true,
      timeGuard: true,
      strictTimeGuard: true,
      maximumSongLength: 6,
      autodisable: false,
      commandCooldown: 30,
      usercommandsEnabled: true,
      thorCommand: false,
      thorCooldown: 10,
      skipPosition: 3,
      skipReasons: [
          ['theme', 'Neatitinka kambario reikalavimu. '],
          ['op', 'Irasyta i OP lista. '],
          ['history', 'Daina jau grojo. '],
          ['mix', 'Priestarauja taisyklems. '],
          ['sound', 'Dainos kokybe per bloga. '],
          ['nsfw', 'N18 turinys. '],
          ['unavailable', 'Nepasiekiama. ']
      ],
      afkpositionCheck: 15,
      afkRankCheck: 'ambassador',
      motdEnabled: false,
      motdInterval: 5,
      motd: 'Temporary Message of the Day',
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: 'https://www.youtube.com/channel/UC3m7yzO8lUGByYFt2HOBOQw?view_as=subscriber',
      website: null,
      intervalMessages: [],
      messageInterval: 10,
      songstats: false,
      commandLiteral: '!',
      blacklists: {
          NSFW: 'https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json',
          OP: 'https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json',
          BANNED: 'https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json'
      }
  }));

  // Start the bot and extend it when it has loaded.
  $.getScript("https://raw.githack.com/likux35/lietuvos-bendruomene-basicbot/master/run/bot-source.js", extend);

}).call(this);
