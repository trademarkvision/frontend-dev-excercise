// https://docs.cypress.io/api/introduction/api.html


describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  
  });
  
  it ( 'Should display basic layout of todo list', () => {
    cy.contains('h1', 'My Todos') 
    cy.contains('h1', 'Done')
    cy.get('[class="row newtodo"]').should('be.visible')
    cy.get('[class="row todo"]').should('be.visible')
  });

  it( 'Should make sure color catogory are radio so only one color can be selected', () => {
    cy.get('[type="radio"]').first().check({force: true})
  });

  it( 'successfully add a new todo item', () => {
    cy.get('[type="text"]').type('text{enter}')
  })  
})


describe('TodoItem', () => {
  beforeEach(() => {
    cy.visit('/todo');
  });

  it( 'By clicking the check box, that todo item should be moved to Done', () => {
    cy.get('[type="checkbox"]').first().check({force: true})
  });

});



