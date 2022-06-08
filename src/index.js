const venom = require("venom-bot");
const banco = require("./bd");
const stages = require("./stages");

venom.create().then((client) => start(client));

function getStage(user) {
  const a = banco.db[user].stage;
  return banco.db[user].stage;
}

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body
    );

    for (let index = 0; index < resp.length; index++) {
      client.sendText(message.from, resp[index]);
    }
  });
}
