Cypress.on('uncaught:exception', (err, runnable) => { return false; });
import tablePage from '../pages/TablePage'
import loginFactory from '../factories/LoginFactory';

describe('Table', ()=>{

    var login = loginFactory.login()

    it('Table page must be online', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
    })

    it('Validate screen pagination', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
        tablePage.screenPagination()
    })

    it('Validate viewbox pagination', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
        tablePage.viewboxPagination()
    })

    it('Validate content on next and previous page', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
        tablePage.viewboxForwardAndBackPagination()
    })

    it('Validate table content', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
        tablePage.caretUpPagination()
    })

    it('Validate higher borrowed amount', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
        tablePage.higherBorrowedAmount()
    })

    it('Validate lower borrowed amount', function(){
        tablePage.go()
        tablePage.accessTableSucessfull(login)
        tablePage.lowerBorrowedAmount()
    })
})