import AEvent from '../AEvent.js'

export default class OnAnyAnimationStartEvent extends AEvent{

    constructor(name) {
        super(name || 'OnAnyAnimationStart')
    }

}