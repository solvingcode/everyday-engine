import AEvent from '../AEvent.js'

export default class OnInputYAxisEvent extends AEvent{

    constructor(name) {
        super(name || 'OnInputYAxis')
    }

}