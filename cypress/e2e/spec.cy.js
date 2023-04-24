describe("Test My Portfolio", () => {
  it("site is up", () => {
    cy.visit("http://127.0.0.1:3030/");
  });
  context("message form", () => {
    // it("contact message form works", () => {
    //   cy.visit("http://127.0.0.1:3030/");
    //   cy.get('[data-cy="cy-contact"]').click();
    //   cy.get('[data-cy="contact-name"]').type("Clay Blanton");
    //   cy.get('[data-cy="contact-email"]').type("clay@clay.com");
    //   cy.get('[data-cy="contact-subject"]').type("Hello");
    //   cy.get('[data-cy="contact-message"]').type("Please get back to me.");
    //   cy.get('[data-cy="cy-submit"]').click();
    //   cy.get('[data-cy="outcomeMessage"]').contains(
    //     "Thank you for your message. I'll get back to you as soon as I can!!"
    //   );
    // });
    it("contact message form throws an error when name is empty", () => {
      cy.visit("http://127.0.0.1:3030/");
      cy.get('[data-cy="cy-contact"]').click();
      //cy.get('[data-cy="contact-name"]').type("")
      cy.get('[data-cy="contact-email"]').type("test@clay.com");
      cy.get('[data-cy="contact-subject"]').type("Clay Test Subject");
      cy.get('[data-cy="contact-message"]').type("Clay Test Message");
      cy.get('[data-cy="cy-submit"]').click();
      cy.get('[data-cy="outcomeMessage"]').contains("Please enter your name!");
    });
    // it("contact message form throws an error when email is empty", () => {
    //   cy.visit("http://127.0.0.1:3030/");
    //   cy.get('[data-cy="cy-contact"]').click();
    //   cy.get('[data-cy="contact-name"]').type("Clay Blanton");
    //   //cy.get('[data-cy="contact-email"]').type("test@clay.com")
    //   cy.get('[data-cy="contact-subject"]').type("Clay Test Subject");
    //   cy.get('[data-cy="contact-message"]').type("Clay Test Message");
    //   cy.get('[data-cy="cy-submit"]').click();
    //   cy.get('[data-cy="outcomeMessage"]').contains(
    //     "Please enter an email address!"
    //   );
    // });
    it("contact message form throws an error when an invalid email address is entered", () => {
      cy.visit("http://127.0.0.1:3030/");
      cy.get('[data-cy="cy-contact"]').click();
      cy.get('[data-cy="contact-name"]').type("Clay");
      cy.get('[data-cy="contact-email"]').type("testclay.com");
      cy.get('[data-cy="contact-subject"]').type("Clay Test Subject");
      cy.get('[data-cy="contact-message"]').type("Clay Test Message");
      cy.get('[data-cy="cy-submit"]').click();
      cy.get('[data-cy="outcomeMessage"]').contains(
        "Please enter a valid email address!"
      );
    });
    it("contact message form throws an error when subject is empty", () => {
      cy.visit("http://127.0.0.1:3030/");
      cy.get('[data-cy="cy-contact"]').click();
      cy.get('[data-cy="contact-name"]').type("Clay Blanton");
      cy.get('[data-cy="contact-email"]').type("test@clay.com");
      //cy.get('[data-cy="contact-subject"]').type("Clay Test Subject")
      cy.get('[data-cy="contact-message"]').type("Clay Test Message");
      cy.get('[data-cy="cy-submit"]').click();
      cy.get('[data-cy="outcomeMessage"]').contains("Please enter a Subject!");
    });
    it("contact message form throws an error when message body is empty", () => {
      cy.visit("http://127.0.0.1:3030/");
      cy.get('[data-cy="cy-contact"]').click();
      cy.get('[data-cy="contact-name"]').type("Clay Blanton");
      cy.get('[data-cy="contact-email"]').type("test@clay.com");
      cy.get('[data-cy="contact-subject"]').type("Clay Test Subject");
      //cy.get('[data-cy="contact-message"]').type("Clay Test Message")
      cy.get('[data-cy="cy-submit"]').click();
      cy.get('[data-cy="outcomeMessage"]').contains("Please enter a message!");
    });
  });
});
