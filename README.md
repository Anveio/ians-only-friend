# ians-only-friend
A Discord bot for personal use.

# Installation

Node ^7.0.0 is required. We'll use the latest version. In your terminal run:

```
nvm install v7.9.0
nvm use 7.9.0
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


