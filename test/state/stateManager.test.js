const expect = chai.expect
import StateManager from '/app/state/StateManager.js'

describe('StateManager', function () {
    it('Should getType for valid state', function () {
        const stateManager = new StateManager()
        const state = 'ACTION_SELECT_LIST_ELEMENT_START'
        const type = stateManager.getType(state)
        expect(type).to.eql('ACTION_SELECT_LIST_ELEMENT')
    })
})