describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").find('img').should('have.attr', 'alt');
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This website right here!");
      // cy.get(".url").should("contain", "my-portfolio");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should("contain", "Making a ruby backend application is fun.");
    });
  });

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Virtual ATM");
      cy.get(".description").should("contain", "Created an ATM simulator using Ruby.");
    });
  });

  it("displays the fourth project", () => {
    cy.get("#project-4").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Virtual Library");
      cy.get(".description").should("contain", "Small project using Ruby that allows you to interact with a virtual library.");
    });
  });
});
