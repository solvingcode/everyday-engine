import AEvent from '../AEvent.js'

export default class OnInputAttackEvent extends AEvent{

    constructor(name) {
        super(name || 'OnInputAttack')
    }

}