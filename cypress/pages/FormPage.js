class FormPage{
    go(){
        cy.visit('http://localhost:3000/#/sign_in?last_page=/')
        cy.get('h1').should('have.text', 'Test Automation')
    }

    accessFormSucessfull(login){
        cy.get('input[id="normal_login_username"]').type(login.username)
        cy.get('input[id="normal_login_password"]').type(login.password)
        cy.get('.ant-btn').click()
        cy.get('[href="#/page2"] > span').click()
        cy.get('.Page2_Title__uis0N').should('have.text', 'Form Items')
    }

    fillForm(form){
        cy.get('.ant-input-affix-wrapper > .ant-input').type(form.input)
        cy.get('.ant-input-affix-wrapper > .ant-input').should('have.value', 'aAa123@@@')
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click()
        cy.contains('.ant-select-dropdown-menu > :nth-child(2)', form.select).click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click()
        cy.get('.ant-select-tree-switcher > .anticon > svg').click()
        cy.wait(2000)
        cy.get('.ant-select-tree-child-tree > :nth-child(1) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click()
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value').should('have.html', 'Red')
        cy.get('.ant-cascader-picker > .ant-input').click()
        cy.get(':nth-child(1) > .ant-cascader-menu-item').click()
        cy.get(':nth-child(2) > [title="São Paulo"]').click()
        cy.get('.ant-cascader-picker-label').should('have.html', 'São Paulo / São Paulo')
        cy.get('.ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-input-number-handler-up').click().click()
        cy.get('.ant-input-number-input').clear()
        cy.get('.ant-input-number-input').type(form.slider)
        cy.get('.ant-switch').click()
        cy.get('.ant-form-item-children > .ant-input').type(form.textArea)
        cy.get('.ant-form-item-children > .ant-input').should('have.value', 'Olá! esse é um rascunho de teste!')
    }

    radioboxSwitchView(){
        cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)').should('have.text', 'Horizontal')
        cy.get('.ant-radio-group > :nth-child(2) > :nth-child(2)').click()
        cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)').click()
        cy.get('.ant-radio-group > :nth-child(1) > :nth-child(2)').click()
    }

    fillInput(form){
        cy.get('.ant-input-affix-wrapper > .ant-input').type(form.input)
        cy.get('.ant-input-affix-wrapper > .ant-input').should('have.value', 'aAa123@@@')
    }

    fillCountrySelect(form){
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click()
        cy.contains('.ant-select-dropdown-menu > :nth-child(2)', form.select).click()
    }

    fillTreeSelect(){
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click()
        cy.get('.ant-select-tree-switcher > .anticon > svg').click()
        cy.wait(2000)
        cy.get('.ant-select-tree-child-tree > :nth-child(1) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click()
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value').should('have.html', 'Red')
    }

    fillCascader(){
        cy.get('.ant-cascader-picker > .ant-input').click()
        cy.get(':nth-child(1) > .ant-cascader-menu-item').click()
        cy.get(':nth-child(2) > [title="São Paulo"]').click()
        cy.get('.ant-cascader-picker-label').should('have.html', 'São Paulo / São Paulo')
    }

    fillDatePicker(){
        cy.get('.ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
    }

    fillSlider(form){
        cy.get('.ant-input-number-handler-up').click().click()
        cy.get('.ant-input-number-input').clear()
        cy.get('.ant-input-number-input').type(form.slider)
    }

    fillSwitch(){
        cy.get('.ant-switch').click()
        cy.get('.ant-switch').should('be.visible')
    }

    fillTextArea(form){
        cy.get('.ant-form-item-children > .ant-input').type(form.textArea)
        cy.get('.ant-form-item-children > .ant-input').should('have.value', 'Olá! esse é um rascunho de teste!') 
    }
}

export default new FormPage;