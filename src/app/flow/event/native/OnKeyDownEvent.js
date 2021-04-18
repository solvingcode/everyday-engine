import AEvent from '../AEvent.js'

export default class OnKeyDownEvent extends AEvent{

    constructor(name) {
        super(name || 'OnKeyDownEvent')
    }

}