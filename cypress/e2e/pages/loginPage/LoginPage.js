var elements = require('./elements')

class LoginPage {
  typeInNewTodoField(value) {
    return cy.get(elements.TODOPAGE.NEW_TODO_FIELD).type(value)
  }


  }
  export default LoginPage
