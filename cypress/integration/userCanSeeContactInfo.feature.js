describe("User navigate to a contact tab and ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#contact-tab").click();
  });

  it("is expected that they will find a form on that page", () => {
    cy.get("#contact-form").should('exist')
  });

  //   it("links correctly to LinkedIn profile", () => {
  //   });

  it("is expected to be able to enter a name", () => {
    cy.get("#name").should("exist");;
  });

  it("is expected to be able to enter an email", () => {
    cy.get("#email").should("exist");;
  });

  it("is expected to be able to enter a message", () => {
    cy.get("#message").should("exist");;
  });

  it("is expected to be able to submit the message", () => {
    cy.get("#send-button").should("exist");
  });
});
