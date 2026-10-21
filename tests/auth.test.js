const test = require("node:test");
const assert = require("node:assert/strict");
const { validarLogin } = require("../auth");

test("retorna sucesso para credenciais válidas", () => {
  assert.deepEqual(
    validarLogin({
      email: "teste@email.com",
      senha: "123456",
    }),
    {
      sucesso: true,
      mensagem: "Login realizado com sucesso",
      status: 200,
    },
  );
});
