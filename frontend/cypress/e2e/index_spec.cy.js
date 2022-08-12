Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
  // failing the test
    return false
    })
 
 describe('visiting the website', () => {
   it('passes', () => {
     cy.visit('https://final-project-front-end-undefinedd.vercel.app/')
   })
 })

 it('Search with a location and wait to see if it will display the results', () => {
  cy.visit('https://final-project-front-end-undefinedd.vercel.app/')
  cy.get('.uf-actions > :nth-child(1)').click('center').then(() => {
    cy.contains('Where?')
  })



