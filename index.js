var Botkit = require('botkit')
var controller = Botkit.slackbot()
var bot = controller.spawn({
  token: process.env.SLACK_BOT_TOKEN
})

bot.startRTM(function(err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack')
  }
});

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

controller.hears(['┻━┻','┻━*┻','┻━*┻','┸━┸','┻┻','/tableflip'],['ambient'],function(bot,message) {
  console.log(message)
  var face = message.match[1]
  bot.reply(message,[
      '┬─┬ノ( º _ ºノ)',
      '┬──┬◡ﾉ(° -°ﾉ)',
      'ヘ･_･)ヘ┳━┳',
      '┬──┬ ¯\_(ツ)',
    ].randomElement())
});
