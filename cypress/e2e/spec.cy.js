describe('Test My Portfolio', () => {
  it('site is up', () => {
    cy.visit('http://127.0.0.1:5501/')
   
  })
  it('contact message form works', () => {
    cy.visit('http://127.0.0.1:5501/')
    cy.get('[data-cy="cy-contact"]').click()
    cy.get('[data-cy="contact-name"]').type("Clay Test")
    cy.get('[data-cy="contact-email"]').type("Clay Test")
    cy.get('[data-cy="contact-subject"]').type("Clay Test")
    cy.get('[data-cy="contact-message"]').type("Clay Test")
    cy.get('[data-cy="cy-submit"]').click()
    cy.get('[data-cy="successMessage"]').contains("Thank you for your message! I will get back to you as soon as I can")
  })
})