import UITextComponent from '../../../../../component/internal/ui/UITextComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import UIUnitInstant from './UIUnitInstant.js'

export default class UITextUnitInstant extends UIUnitInstant {

    /**
     * @override
     */
    instantiate() {
        super.instantiate()
        this.setName('UI Text')
    }

    /**
     * @override
     */
    setup() {
        super.setup()
        this.getComponent(MeshComponent).setShape(PrimitiveShape.TEXT)
    }

    /**
     * @return {string}
     */
    getText(){
        return this.getComponent(UITextComponent).getText()
    }

    /**
     * @return {number}
     */
    getFontSize(){
        return this.getComponent(UITextComponent).getFontSize()
    }

}