import UnitInstant from '../../../UnitInstant.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UITextComponent from '../../../../../component/internal/ui/UITextComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class UITextUnitInstant extends UnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Text')
        this.createComponent(UITextComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
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