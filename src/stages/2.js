const banco = require("../bd");
const mymenu = require("../menu");

function execute(user, msg) {
  if (msg === "#") {
    banco.db[user].stage = 3;
    return ["Por favor, digite o endereΓ§o de entrega:"];
  }

  let resumo = "RESUMO DO PEDIDO \n";
  let total = "";

  banco.db[user].itens.forEach((value) => {
    resumo += `${value.description} --- ${value.price} \n`;
    total += value.price;
  });

  resumo += "---------------------------------------------------\n";
  // resumo += `π»ππππ πΉ$ ${total} ` ;

  return [resumo, "π«ππππππ # ππππ πππππππππ π ππππππ ππ * ππππ ππππππππ"];
}

exports.execute = execute;
