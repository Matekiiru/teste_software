describe("Login", () => {
  it("deve realizar login com sucesso", () => {
    cy.visit("/");

    cy.get('[data-testid="email"]')
      .type("teste@email.com");

    cy.get('[data-testid="senha"]')
      .type("123456");

    cy.get('[data-testid="login"]')
      .click();

    cy.contains("Login realizado com sucesso")
      .should("be.visible");
  });
});