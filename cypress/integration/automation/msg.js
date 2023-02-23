describe('sending  text msgs',function()
{
    beforeEach(function(){
        cy.visit('https://appdev.interakt.ai')
        cy.url().should("include","interakt")
        
    })
    })