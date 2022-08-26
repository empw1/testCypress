Cypress.on('uncaught:exception', (err, runnable) => { return false; });
//O comando acima foi adicionado por conta da versão atual do projeto estar depreciada, impossibilitando que a aplicação rodasse com eficiência.//
import loginPage from '../pages/LoginPage'
import loginFactory from '../factories/loginFactory'


describe('Login', ()=>{

    var login = loginFactory.login()

    it('Application must be online', function(){
        loginPage.go()
    })

    it('Validate login successfully', function(){
        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.submit()

        const expectedMessage = 'Your challenge is:'
        loginPage.alertMessage(expectedMessage)
    })

    it('Validate username field', function(){
        login.username = 'a'

        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.clearUsername()
        loginPage.submit()

        const expectedMessage = 'Please input your username.'
        loginPage.errorUserNameMessage(expectedMessage)
    })

    it('Validate password field', function(){
        login.password = '1'

        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.clearPassword()
        loginPage.submit()

        const expectedMessage = 'Please input your Password.'
        loginPage.errorPasswordMessage(expectedMessage)
    })

    it('Validate invalid characters', function(){
        login.username = '999999999'
        login.password = 'AAAAAAAAA'

        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.submit()

        const expectedMessage = 'There was a problem logging in: Login/Password is incorrect'
        loginPage.errorMessage(expectedMessage)
    })

    it('Validate invalid login combination', function(){
        login.username = 'testuserqa'
        login.password = 'jr321'

        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.submit()

        const expectedMessage = 'There was a problem logging in: Login/Password is incorrect'
        loginPage.errorMessage(expectedMessage)
    })

    it('Validate fields with more than 8 characters', function(){
        login.username = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        login.password = '999999999999999999999999999999999999999999'

        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.submit()

        const expectedMessage = 'There was a problem logging in: Login/Password is incorrect'
        loginPage.errorMessage(expectedMessage)
    })

    it('Validate fields with less than 8 characters', function(){
        login.username = 'a'
        login.password = '1'

        loginPage.go()
        loginPage.fillLogin(login)
        loginPage.submit()

        const expectedMessage = 'There was a problem logging in: Login/Password is incorrect'
        loginPage.errorMessage(expectedMessage)
    })
})