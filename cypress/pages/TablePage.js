class TablePage {
    go(){
        cy.visit('http://localhost:3000/#/sign_in?last_page=/')
        cy.get('h1').should('have.text', 'Test Automation')
    }

    accessTableSucessfull(login){
        cy.get('input[id="normal_login_username"]').type(login.username)
        cy.get('input[id="normal_login_password"]').type(login.password)
        cy.get('.ant-btn').click()
        cy.get('[href="#/page1"] > span').click()
        cy.get('#root > div > main > div > div.ant-table-wrapper > div > div > div > div > div > table > thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters > div').should('have.text', 'Name')
    }

    screenPagination(){
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
        cy.get('.ant-pagination-item-2 > a').click()
        cy.get('.ant-table-row > .ant-table-column-has-actions').should('have.text', 'Milla Laine')
        cy.get('.ant-pagination-item-1 > a').click()
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
    }

    viewboxForwardAndBackPagination(){
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
        cy.get('.ant-pagination-next > .ant-pagination-item-link > .anticon > svg').click()
        cy.get('.ant-table-row > .ant-table-column-has-actions').should('have.text', 'Milla Laine')
        cy.get('.ant-pagination-prev > .ant-pagination-item-link > .anticon > svg').click()
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
    }

    viewboxPagination(){
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
        cy.get('.ant-pagination-item-2 > a').click()
        cy.get('.ant-pagination-prev > .ant-pagination-item-link > .anticon > svg').click()
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
    }

    caretUpPagination(){
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
        cy.get('.anticon-caret-up > svg').click()
        cy.get('[data-row-key="9"] > .ant-table-column-has-actions').should('have.text', 'Willard Medina')
        cy.get('.anticon-caret-up > svg').click()
        cy.get('[data-row-key="10"] > .ant-table-column-has-actions').should('have.text', 'Byron Hansen')
        cy.get('.anticon-caret-up > svg').click()
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
    }

    higherBorrowedAmount(){
        cy.get('[data-row-key="1"] > .ant-table-column-has-actions').should('have.text', 'John Brown')
        cy.get('.anticon-caret-up > svg').click()
        cy.get('[data-row-key="9"] > :nth-child(2)').should('have.text', '728')
    }

    lowerBorrowedAmount(){
        cy.get('.anticon-caret-up > svg').click()
        cy.get('[data-row-key="1"] > :nth-child(2)').should('have.text', '10')
        cy.get('[data-row-key="3"] > :nth-child(2)').should('have.text', '10')
        cy.get('.anticon-caret-up > svg').click()
    }
}

export default new TablePage;