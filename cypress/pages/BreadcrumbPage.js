class breadcrumbPage {
    go(){
        cy.visit('http://localhost:3000/#/sign_in?last_page=/')
        cy.get('h1').should('have.text', 'Test Automation')
    }

    accessPage3(login){
        cy.get('input[id="normal_login_username"]').type(login.username)
        cy.get('input[id="normal_login_password"]').type(login.password)
        cy.get('.ant-btn').click()
        cy.get('[href="#/page3"] > span').click()
        cy.get(':nth-child(4) > .ant-breadcrumb-link').should('have.text', 'Page 3')
    }

    accessPageHome(){
        cy.get(':nth-child(1) > .ant-breadcrumb-link > a').click()
        cy.get('.ant-list-header > div').should('have.text', 'Your challenge is:')
    }

    accessPage2(){
        cy.get(':nth-child(3) > .ant-breadcrumb-link > a').click()
        cy.get('strong').should('have.text', 'Oops... it seems like the page you tried to access does not exist.')
    }

    accessPage1(){
        cy.get(':nth-child(2) > .ant-breadcrumb-link > a').click()
        cy.get('.ant-table-column-sorters').should('have.text', 'Name')
    }
}

export default new breadcrumbPage;