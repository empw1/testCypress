Cypress.on('uncaught:exception', (err, runnable) => { return false; });
import formPage from '../pages/FormPage'
import loginFactory from '../factories/loginFactory'
import formFactory from '../factories/formFactory'


describe('Form', ()=>{

    var login = loginFactory.login()
    var form = formFactory.form()

    it('Form page must be online', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
    })

    it('Validate form fields successfully', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillForm(form)
    })

    it('Validate radiobox context switch', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.radioboxSwitchView()
    })

    it('Validate input field', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillInput(form)
    })

    it('Validate select a country', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillCountrySelect(form)
    })

    it('Validate TreeSelect', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillTreeSelect()
    })

    it('Validate Cascader', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillCascader()
    })

    it('Validate DatePicker', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillDatePicker()
    })

    it('Validate Slider', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillSlider(form)
    })

    it('Validate Switch', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillSwitch()
    })

    it('Validate TextArea', function(){
        formPage.go()
        formPage.accessFormSucessfull(login)
        formPage.fillTextArea(form)
    })
})