describe("renders homepage", () => {
  it("renders homepage correctly", () => {
    cy.visit("/")
    cy.get("#root").should("exist")
  })

  it("renders list of emails", () => {
    cy.visit("/")
    cy.get(".emails-container__results").should("exist")
  })

  it("clicks on an email", () => {
    cy.visit("/")
    cy.get(".emails-wrapper").click({ multiple: true })
  })

  it("should hide filters on page load", () => {
    cy.visit("/")
    cy.get('.filters').should('not.be.visible')
  })

  it("should have a green border on each unread email", () => {
    cy.visit("/")
    cy.get('.emails-wrapper').should('have.css', 'border-right', '4px solid #57C5C5')
  })
})