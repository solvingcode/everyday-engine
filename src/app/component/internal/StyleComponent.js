import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Style from '../../pobject/Style.js'

export default class StyleComponent extends Component{


    constructor() {
        super('Style')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('style', TYPES.STYLE, new Style())
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @param {Style} style
     */
    setStyle(style) {
        this.setValue('style', style)
    }

    /**
     * @return {Style}
     */
    getStyle(){
        return this.getValue('style')
    }

    /**
     * @override
     */
    isHidden() {
        return true
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }

}