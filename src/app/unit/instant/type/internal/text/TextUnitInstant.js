import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TextComponent from '../../../../../component/internal/TextComponent.js'
import MeshUnitInstant from '../../../MeshUnitInstant.js'

export default class TextUnitInstant extends MeshUnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('Text')
        this.createComponent(TextComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(MeshComponent).setShape(PrimitiveShape.TEXT)
    }

    /**
     * @return {string}
     */
    getText(){
        return this.getComponent(TextComponent).getText()
    }

    /**
     * @return {number}
     */
    getFontSize(){
        return this.getComponent(TextComponent).getFontSize()
    }

}