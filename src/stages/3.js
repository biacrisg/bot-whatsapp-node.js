const banco = require("../bd");

function execute(user, msg) {
  console.log("msg", msg);

  if (msg === "edita") {
    banco.db[user].stage = 3;
    return ["Por favor, digite o endereço de entrega:"];
  }

  if (msg === "#") {
    banco.db[user].stage = 0;
    return [
      " 𝑶𝒃𝒓𝒊𝒈𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒑𝒓𝒆𝒇𝒆𝒓𝒆̂𝒏𝒄𝒊𝒂! 💖💖💖 \n 𝑺𝒆𝒖 𝒑𝒆𝒅𝒊𝒅𝒐 𝒔𝒆𝒓𝒂́ 𝒆𝒏𝒕𝒓𝒆𝒈𝒖𝒆 𝒆𝒎 𝒂𝒕𝒆́ 40 𝒎𝒊𝒏𝒖𝒕𝒐𝒔. 𝑺𝒆𝒖 𝒂𝒕𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒇𝒐𝒊 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒅𝒐 \n * Para mais informações ligue: (34)3333-3333",
    ];
  }

  return [
    `𝑶 𝒔𝒆𝒖 𝒑𝒆𝒅𝒊𝒅𝒐 𝒔𝒆𝒓𝒂́ 𝒆𝒏𝒕𝒓𝒆𝒈𝒖𝒆 𝒏𝒐 𝒆𝒏𝒅𝒆𝒓𝒆𝒄̧𝒐:  ${msg}. \n 𝑶 𝒕𝒆𝒎𝒑𝒐 𝒆𝒔𝒕𝒊𝒎𝒂𝒅𝒐 𝒑𝒂𝒓𝒂 𝒆𝒏𝒕𝒓𝒆𝒈𝒂 𝒆́ 40 𝒎𝒊𝒏𝒖𝒕𝒐𝒔. 𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒓 𝒅𝒊𝒈𝒊𝒕𝒆 "#" 𝒆 𝒑𝒂𝒓𝒂 𝒆𝒅𝒊𝒕𝒂𝒓 𝒐 𝒆𝒏𝒅𝒆𝒓𝒆𝒄̧𝒐 𝒅𝒊𝒈𝒊𝒕𝒆 "𝒆𝒅𝒊𝒕𝒂"`,
  ];
}

exports.execute = execute;
