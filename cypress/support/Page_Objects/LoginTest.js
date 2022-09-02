class LoginTest
{
  getUserName()
  {
    return cy.get('input[placeholder="Username"]')
  }

  getPassword()
  {
    return cy.get('input[placeholder="Password"]')
  }

  getLoginButton()
  {
    return cy.get('button[type="submit"]')
  }


}
export default LoginTest