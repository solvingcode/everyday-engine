import AEvent from '../AEvent.js'

export default class OnUpdateEvent extends AEvent{

    constructor(name) {
        super(name || 'OnUpdate')
    }

}