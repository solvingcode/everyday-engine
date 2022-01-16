import AEvent from '../AEvent.js'

export default class OnButtonClickEvent extends AEvent{

    constructor(name) {
        super(name || 'OnButtonClick')
    }

}