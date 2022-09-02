
class Admin
{
    getClickOnAdmin()
    {
       return cy.get(':nth-child(1) > .oxd-main-menu-item')
    }
    getClickonAdd()
    {
       return  cy.get('.orangehrm-header-container > .oxd-button')
    }

}
export default Admin