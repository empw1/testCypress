Cypress.on('uncaught:exception', (err, runnable) => { return false; });
import breadcrumbPage from '../pages/BreadcrumbPage'
import loginFactory from '../factories/loginFactory'

describe('Page 3', ()=>{
    var login = loginFactory.login()

    it('Page 3 must be online', function(){
        breadcrumbPage.go()
        breadcrumbPage.accessPage3(login)
    })

    it('Validate page HOME', function(){
        breadcrumbPage.go()
        breadcrumbPage.accessPage3(login)
        breadcrumbPage.accessPageHome()
    })

    it('Validate page 2', function(){
        breadcrumbPage.go()
        breadcrumbPage.accessPage3(login)
        breadcrumbPage.accessPage2()
    })

    it('Validate page 1', function(){
        breadcrumbPage.go()
        breadcrumbPage.accessPage3(login)
        breadcrumbPage.accessPage1()
    })
})