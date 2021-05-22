/// <reference types="Cypress" />

describe('Rahul Setty accodemy', function() {
    it('Web Table', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        
        cy.get('tr td:nth-child(2)').each(($el, index,$list) => {
            const test = $el.text()
            if(test.includes('QA Expert Course')){
                cy.get('tr td:nth-child(2)').eq(index).then(function(course){
                    const courseName = course.text()
                    expect(courseName).to.equal('QA Expert Course :Software Testing + Bugzilla + SQL + Agile')
                })
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceAmount = price.text()
                    expect(priceAmount).to.equal('25')
                })
            }
        })
    })

})