const menu = require("../menu");
const banco = require("../bd");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso π"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return [
      "Pedido confirmado, por favor envie uma mensagem para ver o seu resumo!π€©",
    ];
  }

  if (!menu.menu[msg]) {
    return [
      "CΓ³digo invΓ‘lido, escolha novamente. \n \n π³πππππ-ππ: π«πππππ # ππππ πππππππππ π ππππππ ππ  * ππππ ππππππππ",
    ];
  }

  const option = menu.menu[msg];
  const array = banco.db[user].itens.push(option);
  const later = banco.db[user].itens;

  return [
    `Γtimo pedido!!π΅ \n  ${menu.menu[msg].description} - adicionado com sucesso. \n \n π¨ππππΜ§πΜπ: π½πππΜ ππππ ππππππππ πππππ ππππ, πππππππ # ππππ πππππππππ π ππππππ ππ * ππππ ππππππππ;`,
  ];
}

exports.execute = execute;
