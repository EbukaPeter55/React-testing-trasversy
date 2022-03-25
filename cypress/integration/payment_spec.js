
// const { cy } = require('date-fns/locale');
const {v4: uuidv4} = require('uuid');
describe('payment', ()=> {
    it('user can make payment', ()=> {
        //Login
        cy.visit('/');
        cy.findByRole('textbox', { name: /username/i}).type('johndoe');
        cy.findByLabelText(/password/i).type('s3cret');
        cy.findByRole('checkbox', {
            name: /remember me/i
          }).check();
        cy.findByRole('button', {  name: /sign in/i}).click();
        // Check account balance
        let oldBalance = cy.get('[data-test="sidenav-user-balance"]').
        then($balance => oldBalance = $balance.text()) //We make use of the id here which is 'data-test' becomes the balance is dynamic
        // Click on the new button
        cy.findByRole('button', {  name: /new/i}).click();
        // Search for user
        cy.findByRole('textbox').type('devon becker');
 
        // Return to transactions
        // Go to personal payments
        // Click on payment- to see its details
        // Verify if payment was made
        // Verify if payment amount was deducted

    })
})