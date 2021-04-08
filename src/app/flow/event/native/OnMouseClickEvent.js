import AEvent from '../AEvent.js'

export default class OnMouseClickEvent extends AEvent{

    constructor(name) {
        super(name || 'OnMouseClickEvent')
    }

}