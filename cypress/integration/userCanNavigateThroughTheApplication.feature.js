describe("User can natigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
    });

    it("displays About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });

    it("displays a picture", () => {
      cy.get("#about-picture").should("have.attr", "alt");
    });

    // describe("goes to the Craft Academy website ", () => {
    //   before(() => {
    //     cy.get("#craftacademy").click();
    //   });
    //   it("when the link is clicked", () => {
    //     cy.url().should("contain", "craftacademy");
    //   });
    // });
  });

  describe("to My Project tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click();
    });

    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "projects");
    });

    it("does not display About me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });
  });

  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
      cy.get("#header").click();
    });

    it("displays Hello", () => {
      cy.get("#hello").should("contain", "Hello");
    });

    it("displays correct url", () => {
      cy.url().should("not.contain", "projects").and("not.contain", "about");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });

  describe("to Contact tab and it", () => {
    beforeEach(() => {
      cy.get("#contact-tab").click();
    });

    it("displays Contact header", () => {
      cy.get("#contact-header").should("contain", "Contact");
    });

    it("displays component name in url", () => {
      cy.url()
        .should("contain", "contact")
        .and("not.contain", "about", "project");
    });

    it("does not display About me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });

  describe("to CV tab and it", () => {
    beforeEach(() => {
      cy.get("#cv-tab").click();
    });

    it("displays component name in url", () => {
      cy.url()
        .should("contain", "cv")
        .and("not.contain", "about", "project", "contact");
    });

    it("does not display About me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
    it("does not display Contacts header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });
});
