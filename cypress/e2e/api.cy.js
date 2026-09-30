describe("API de login", () => {
  it("deve retornar status 200 para login válido", () => {
    cy.request("POST", "/api/login", {
      email: "teste@email.com",
      senha: "123456"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.sucesso).to.eq(true);
    });
  });
});