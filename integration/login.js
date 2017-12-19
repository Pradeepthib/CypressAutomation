describe('Gymnage Admin login',function(){
  beforeEach( () => {
    cy.fixture("adminlogin").as("adminlogin");
  });
  it('login',function(){
    cy.visit('http://potens.gymnage.test/auth/login')
    /*.get('input[type=email]')
    .type('swarup@gymnage.io')
    .get('input[type=password]')
    .type('gapitu')
    .get('.submit').click()*/
    cy
    .get('input[type=email]')
    .type(this.adminlogin.email)
    cy
    .get('input[type=password]')
    .type(this.adminlogin.password)
    cy.get('.submit').click()
  })
})
