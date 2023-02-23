/// <reference types="cypress" />

describe.skip('SDET assignment',function()
{
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php')
        cy.url().should("include","automationpractice")
        failOnStatusCode: false

    })
    
it.skip('Task 1',function(){
   
    cy.get('#search_query_top').click().type('sum')
    cy.get('.ac_results li.ac_even').contains('Dresses').should('be.visible')
    cy.wait(3000)
})
it.skip('Task 2',function(){

    cy.get('#search_query_top').click().type('sum')
    cy.get('#searchbox > .btn').click()
    cy.wait(3000)
    cy.get('.product_list').contains('Summer').should('be.visible')
    cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should('be.visible')
    cy.get(':nth-child(2) > .product-container > .right-block > h5 > .product-name').should('be.visible')


})
it.skip('Task 3',function(){
    cy.get('.sf-menu > :nth-child(3) > a').click()
    cy.wait(3000)
    cy.get('.product_img_link > .replace-2x').click()
    cy.wait(4000)
    cy.get('#group_1').select('L').should('have.value','3') // selecting based on text
   // cy.get('#group_1').select('3').should('have.value','3') // selecting based on value
    cy.get('.exclusive > span').click()


})
it.skip('Task 4',function(){

    let Email= 'chakri@gmailmail.com'
    let OrderReference= '8885143094'
    cy.get('#contact-link > a').click()
    cy.wait(2000)
    cy.get('#id_contact').select('Customer service').should('have.value','2')
    cy.get('#email').type(Email)
    cy.wait(1000)
    cy.get('#id_order').type(OrderReference)
    cy.wait(1000)
    //uploading file
    cy.get("input[type=file]").attachFile("tshirt.jpg")
    cy.get('#message').type('Testing file upload')
    cy.wait(5000)
    cy.get('#submitMessage > span').should('not.be.disabled').click()
    cy.wait(5000)
    
    
   
})



it.skip('Task 5',function(){
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    cy.get('.last-in-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
    cy.get('#reduction_percent_display').should('have.text','-5%')

    
    for(let n = 0; n <= 3; n ++){
       cy.get('.icon-plus').click() }  // selecting Quantity
    
    //cy.get('.icon-plus').click().click().click().click()
    cy.get('.exclusive > span').click()
    cy.get('#quantity_wanted').should('have.value','5')
    cy.wait(3000)
    cy.get("a[title='Proceed to checkout']").click({force: true})
    cy.wait(5000)
    cy.get('#product_price_5_19_0 > .price').should('have.text','$28.98')
    cy.get('.old-price').should('have.text','$30.51')
    cy.get('#total_price').should('have.text','$146.90')
    
  

})
   

})

describe('sending text msgs',function()
{
        
    })
   
    it.only('Sending text msg to end user',()=>{
        cy.visit('https://appdev.interakt.ai')
        let Email='chakradhar.papanaboina@cawstudios.com'
        let Password="Kiwi@123"
        cy.get('[data-cy="input-email-login-page"]').type(Email)
        cy.get('[data-cy="input-password-login-page"]').type(Password)
        cy.get('[data-cy="btn-submit-login-page"]').click()
        cy.wait(7000)
        cy.get('.gKsRgr > .sc-bdnxRM > svg > path').click({force: true})
        cy.get('.sc-gggoXN').click().type('7893644450{enter}')
        cy.wait(10000)
        cy.get(':nth-child(1) > .sc-cKRKFl > .sc-cwiweh > :nth-child(1) > .sc-gJpXkD').click()
        cy.wait(8000)
        cy.get('.content-edit').click({force: true}).type('This is text msg from cypress')
        cy.wait(2000)
        cy.get('[data-cy="send-btn-cnvrstn"]').click({force: true})
    })

