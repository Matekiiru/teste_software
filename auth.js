function validarLogin(data) {
  const email = data?.email;
  const senha = data?.senha;

  const sucesso = email === "teste@email.com" && senha === "123456";

  return {
    sucesso,
    mensagem: sucesso
      ? "Login realizado com sucesso"
      : "E-mail ou senha inválidos",
    status: sucesso ? 200 : 401,
  };
}

module.exports = { validarLogin };
