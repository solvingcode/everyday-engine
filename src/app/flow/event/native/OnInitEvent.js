import AEvent from '../AEvent.js'

export default class OnInitEvent extends AEvent{

    constructor(name) {
        super(name || 'OnInit')
    }

}