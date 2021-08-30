import AEvent from '../AEvent.js'

export default class OnCallEvent extends AEvent{

    constructor(name) {
        super(name || 'OnCall')
    }

    /**
     * @override
     */
    isUnique() {
        return true
    }

}