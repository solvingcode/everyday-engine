define(function(require) {
    const expect = chai.expect
    const StateManager = require('/app/state/StateManager.js')
    describe('StateManager', function () {
        it('Should getType for valid state', function () {
            const stateManager = new StateManager()
            const state = 'ACTION_SELECT_LIST_ELEMENT_START'
            const type = stateManager.getType(state)
            expect(type).to.eql('ACTION_SELECT_LIST_ELEMENT')
        })
    })
})