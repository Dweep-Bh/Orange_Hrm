///<reference types="Cypress"/>

import LoginTest from "../../support/Page_Objects/LoginTest"


describe('Orange Hrm Login Test',function(){
    const login=new LoginTest()
    beforeEach(function(){
        cy.fixture('example').then(function(data){

            this.data=data
        })

    })

    it('Login Test with Valid Credentials',function(){
         cy.visit(this.data.url)
        login.getUserName().type(this.data.username)
        login.getPassword().type(this.data.password)
        login.getLoginButton().click()
    })
})