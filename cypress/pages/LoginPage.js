class LoginPage {
    go(){
        cy.visit('http://localhost:3000/#/sign_in?last_page=/')
        cy.get('h1').should('have.text', 'Test Automation')
    }

    fillLogin(login){
        cy.get('input[id="normal_login_username"]').type(login.username)
        cy.get('input[id="normal_login_password"]').type(login.password)
    }

    clearUsername(){
        cy.get('input[id="normal_login_username"]').clear()
    }

    clearPassword(){
        cy.get('input[id="normal_login_password"]').clear()
    }

    submit(){
        cy.get('.ant-btn').click()
    }

    alertMessage(expectedMessage){
        cy.get('.ant-list-header > div').should('have.text', expectedMessage)
    }

    errorUserNameMessage(expectedMessage){
        cy.get('.ant-form-explain').should('have.text', expectedMessage)
    }

    errorPasswordMessage(expectedMessage){
        cy.get('.ant-form-explain').should('have.text', expectedMessage)
    }

    errorMessage(expectedMessage){
        cy.contains('.error-message', expectedMessage).should('be.visible')
    }
}

export default new LoginPage;