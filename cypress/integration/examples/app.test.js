describe('Site Test', function() {
    it('visit site', function() {
        cy.visit('http://localhost:3000/');
    })
})

describe('Form Input Tests', function(){
    it('types name and checks/compares', function() {
        cy.get('input[name="name"]')
        .type('Patrick')
        .should('have.value','Patrick')
    })
    it('checks checkbox for Tartufo', function() {
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .check()
    })
    it('checks checkbox for Wagyu', function() {
        cy.get(':nth-child(2) > input')
        .check()
    })
    it('check if submit button can submit form', function(){
        cy.get('button').click()
    })
}) 