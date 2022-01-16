import AEvent from '../AEvent.js'

export default class OnInputJumpEvent extends AEvent{

    constructor(name) {
        super(name || 'OnInputJump')
    }

}