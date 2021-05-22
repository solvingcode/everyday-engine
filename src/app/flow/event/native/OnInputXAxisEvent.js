import AEvent from '../AEvent.js'

export default class OnInputXAxisEvent extends AEvent{

    constructor(name) {
        super(name || 'OnInputXAxis')
    }

}