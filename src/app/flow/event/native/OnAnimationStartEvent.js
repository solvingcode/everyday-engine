import AEvent from '../AEvent.js'

export default class OnAnimationStartEvent extends AEvent{

    constructor(name) {
        super(name || 'OnAnimationStart')
    }

}