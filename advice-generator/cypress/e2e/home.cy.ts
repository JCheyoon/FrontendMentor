describe("home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("finding hi", () => {
    cy.get("h1").contains("ADVICE");
  });
  it("finding p", () => {
    cy.get("p");
  });
  it("finding button", () => {
    cy.getByData("adviceBtn").click();
  });
});

export {};
