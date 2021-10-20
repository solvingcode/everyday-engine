import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationTimelineElementMenuItem from './EditAnimationTimelineElementMenuItem.js'

export default class EditAnimationTimelineListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {number} time
     */
    constructor(parent, animation, time = 0) {
        super({
            stateCode: '',
            name: '',
            zone: parent.zone
        })
        this.data = {animation, time}
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return EditAnimationTimelineElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const {animation} = this.data
        const samples = animation.getSamples()
        return Array.from({length: animation.getDuration()})
            .map((v, index) => {
                const second = Math.floor(index/samples)
                const secondDivide = index % samples
                return `${second}:${secondDivide < 10 ? '0' : ''}${secondDivide}`
            })
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}