///<reference types="Cypress"/>
import Admin from "../../support/Page_Objects/Admin"



describe('Orange Hrm Admin Test',function(){
    
    const admin=new Admin()

    beforeEach(function(){
        cy.fixture('example').then(function(data){

            this.data=data

            cy.login(this.data.username,this.data.password)
        })

    })

    it('click on Add button',function(){
         admin.getClickOnAdmin().click()
         admin.getClickonAdd().click()
    })
})