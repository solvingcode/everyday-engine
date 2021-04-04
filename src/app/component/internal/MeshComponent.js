import Component from '../Component.js'
import Style from '../../pobject/Style.js'
import Layout from '../../layout/Layout.js'
import Size from '../../pobject/Size.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class MeshComponent extends Component{

    constructor() {
        super('Mesh')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('shape', TYPES.STRING, PrimitiveShape.RECT)
        this.add('style', TYPES.STYLE, new Style())
        this.add('size', TYPES.SIZE, new Size(0))
        this.add('vertices', TYPES.ARRAY_VECTOR, [])
        this.add('shapeVertices', TYPES.ARRAY_VECTOR, [])
        this.add('generated', TYPES.BOOLEAN, false)
        this.add('assetId', TYPES.NUMBER)
        this.add('imageRepeat', TYPES.BOOLEAN, false)
    }

    /**
     * @override
     */
    getFormFields() {
        return [
            {
                bind: 'size.width',
                label: 'Width',
                type: Layout.form.TEXT
            },
            {
                bind: 'size.height',
                label: 'Height',
                type: Layout.form.TEXT
            },
            {
                bind: 'imageRepeat',
                label: 'Repeat texture',
                type: Layout.form.CHECKBOX
            }
        ]
    }

    /**
     * @return {string}
     */
    getShape(){
        return this.getValue('shape')
    }

    /**
     * @param {string} shape
     */
    setShape(shape){
        this.setValue('shape', shape)
    }

    /**
     * @return {number}
     */
    getAssetId(){
        return this.getValue('assetId')
    }

    /**
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.setValue('assetId', assetId)
    }

    /**
     * @return {Style}
     */
    getStyle(){
        return this.getValue('style')
    }

    /**
     * @param {Style} style
     */
    setStyle(style){
        this.setValue('style', style)
    }

    /**
     * @param {Size} size
     */
    setSize(size) {
        this.setValue('size', size)
    }

    /**
     * @return {Size}
     */
    getSize() {
        return this.getValue('size')
    }

    /**
     * @param {boolean} generated
     */
    setGenerated(generated){
        this.setValue('generated', generated)
    }

    /**
     * @return {boolean}
     */
    getGenerated(){
        return this.getValue('generated')
    }

    /**
     * @return {boolean}
     */
    isGenerated(){
        return this.getGenerated()
    }

    /**
     * @param {boolean} enabled
     */
    setEnabled(enabled){
        this.setValue('enabled', enabled)
    }

    /**
     * @return {boolean}
     */
    getEnabled(){
        return this.getValue('enabled')
    }

    /**
     * @return {boolean}
     */
    isEnabled(){
        return this.getEnabled()
    }

    /**
     * @param {Vector[]} vertices
     */
    setVertices(vertices){
        this.setValue('vertices', vertices)
    }

    /**
     * @return {Vector[]}
     */
    getVertices(){
        return this.getValue('vertices')
    }

    /**
     * @param {Vector[]} shapeVertices
     */
    setShapeVertices(shapeVertices){
        this.setValue('shapeVertices', shapeVertices)
    }

    /**
     * @return {Vector[]}
     */
    getShapeVertices(){
        return this.getValue('shapeVertices')
    }

    /**
     * @param {boolean} imageRepeat
     */
    setImageRepeat(imageRepeat){
        this.setValue('imageRepeat', imageRepeat)
    }

    /**
     * @return {boolean}
     */
    getImageRepeat(){
        return this.getValue('imageRepeat')
    }

    /**
     * @return {boolean}
     */
    isImageRepeat(){
        return this.getImageRepeat()
    }

}