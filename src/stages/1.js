const menu = require("../menu");
const banco = require("../bd");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso 😕"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return [
      "Pedido confirmado, por favor envie uma mensagem para ver o seu resumo!🤩",
    ];
  }

  if (!menu.menu[msg]) {
    return [
      "Código inválido, escolha novamente. \n \n 𝑳𝒆𝒎𝒃𝒓𝒆-𝒔𝒆: 𝑫𝒊𝒈𝒊𝒕𝒆 # 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒓 𝒐 𝒑𝒆𝒅𝒊𝒅𝒐 𝒐𝒖  * 𝒑𝒂𝒓𝒂 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓",
    ];
  }

  const option = menu.menu[msg];
  const array = banco.db[user].itens.push(option);
  const later = banco.db[user].itens;

  return [
    `Ótimo pedido!!🛵 \n  ${menu.menu[msg].description} - adicionado com sucesso. \n \n 𝑨𝒕𝒆𝒏𝒄̧𝒂̃𝒐: 𝑽𝒐𝒄𝒆̂ 𝒑𝒐𝒅𝒆 𝒆𝒔𝒄𝒐𝒍𝒉𝒆𝒓 𝒐𝒖𝒕𝒓𝒐 𝒊𝒕𝒆𝒎, 𝒅𝒊𝒈𝒊𝒕𝒂𝒓 # 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒓 𝒐 𝒑𝒆𝒅𝒊𝒅𝒐 𝒐𝒖 * 𝒑𝒂𝒓𝒂 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓;`,
  ];
}

exports.execute = execute;
