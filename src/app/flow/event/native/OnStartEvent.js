import AEvent from '../AEvent.js'

export default class OnStartEvent extends AEvent{

    constructor(name) {
        super(name || 'OnStart')
    }

}