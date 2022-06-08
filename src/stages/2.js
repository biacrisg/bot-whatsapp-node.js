const banco = require("../bd");
const mymenu = require("../menu");

function execute(user, msg) {
  if (msg === "#") {
    banco.db[user].stage = 3;
    return ["Por favor, digite o endereço de entrega:"];
  }

  let resumo = "RESUMO DO PEDIDO \n";
  let total = "";

  banco.db[user].itens.forEach((value) => {
    resumo += `${value.description} --- ${value.price} \n`;
    total += value.price;
  });

  resumo += "---------------------------------------------------\n";
  // resumo += `𝑻𝒐𝒕𝒂𝒍 𝑹$ ${total} ` ;

  return [resumo, "𝑫𝒊𝒈𝒊𝒕𝒂𝒓 # 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒓 𝒐 𝒑𝒆𝒅𝒊𝒅𝒐 𝒐𝒖 * 𝒑𝒂𝒓𝒂 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓"];
}

exports.execute = execute;
