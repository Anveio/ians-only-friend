# roasted-bot
A bot build with [discord.js](https://discord.js.org/#/) and [commando](https://www.npmjs.com/package/discord.js-commando) that allows users to invoke commands and hear audio clips (via [ytdl-core](https://github.com/fent/node-ytdl-core)).

Available commands:

* !ericandre: Plays a random Eric Andre clip in a voice channel. Enter a number from 0 to 37 after the command to get a specific clip.
* !roasted: Plays the "You Just Got Roasted" Filthy Frank video in the voice channel of the user who invoked it.
* !666: Demonstrates your knowledge of mathematics.


# Installation

Node ^7.0.0 is required. We'll use the latest version. In your terminal run:

```
nvm install v7.10.0
nvm use 7.10.0
```

In order to enable playing audio in voice channels, we'll need ffmpeg:

```
sudo apt-get install ffmpeg
```

Install dependencies listed in `package.json`:

```
npm install
```
Ignore any `UNMET PEER DEPENDENCY` warnings received by the installation of `discord.js`, those are optional.

Register a bot at [Discord's Developer Panel](https://discordapp.com/developers/applications/me) and get a token for your bot.
Then, in your terminal, run:

```
export DISCORD_BOT_TOKEN='yourtokenbetweenapostrophes'
```

Substitute `'yourtokenbetweenapostrophes'` for the actual token for your bot.

```
echo $DISCORD_BOT_TOKEN
```

Make sure the above command prints out your token.

# Running the Bot

`--harmony` flag is required to make use of `async` and `await` commands in this version of Node.

```
node --harmony .
```


