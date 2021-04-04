import ComponentExecutor from './ComponentExecutor.js'
import GUIPropertyComponent from '../component/internal/gui/property/GUIPropertyComponent.js'

export default class GUIPropertyExecutor extends ComponentExecutor {

    constructor() {
        super([GUIPropertyComponent])
    }

    /**
     * @override
     */
    execute(unit) {
    }

}