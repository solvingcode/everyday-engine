import AEvent from '../AEvent.js'

export default class OnAnimationEndEvent extends AEvent{

    constructor(name) {
        super(name || 'OnAnimationEnd')
    }

}