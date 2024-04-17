const Fixture = require('../../../node_modules/@shopware-ag/e2e-testsuite-platform/cypress/support/commands/fixture-commands');
// import { createProductFixture } from '../../../node_modules/@shopware-ag/e2e-testsuite-platform/cypress/support/commands/fixture-commands'; // Assuming the file is in the same directory

describe('template spec', () => {
    it('passes', () => {
        cy.createProductFixture({
            name: 'First product',
            productNumber: 'RS-123',
        });

        cy.visit('https://example.cypress.io')
    })
})