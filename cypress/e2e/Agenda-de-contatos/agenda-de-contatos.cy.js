/// <reference types="cypress" />

describe('Teste para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve preencher o formulário e adicionar contato ', () => {
        cy.get('input[type="text"').should('have.length', 1).type('Douglas Eduardo')
        cy.get('input[type="email"').should('have.length', 1).type('douglas@teste.com')
        cy.get('input[type="tel"').should('have.length', 1).type('21 987654321')
        cy.get('.adicionar').click()

    })

    it('Deve editar um contato ', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Leon')
        cy.get('[type="email"]').clear().type('leon@teste.com')
        cy.get('[type="tel"]').clear().type('21 987654321')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})