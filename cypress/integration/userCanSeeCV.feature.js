describe("User can see my CV", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays the previous experience", () => {
    cy.get("#education-1").within(() => {
      cy.get(".location").should("contain", "Craft Academy");
      cy.get(".dates").should("contain", "Aug 2021 - Nov 2021");
      cy.get(".qualification").should("contain", "12 Week Coding Bootcamp")
    });
  });

  it("displays the education", () => {
    cy.get("#experience-1").within(() => {
      cy.get(".employer").should("contain", "GDC Technics");
      cy.get(".role").should("contain", "Airworthiness Engineer");
      cy.get("dates").should("contain", "Aug 2019- Nov 2020")
      cy.get(".key-tasks").should("contain", "Performing Major/Minor changes to CS 23, 25, 27 & 29 aircraft.")
    });
  });
});
