import Component from '../Component.js'
import Style from '../../pobject/Style.js'
import Layout from '../../layout/Layout.js'
import Size from '../../pobject/Size.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Vector from '../../utils/Vector.js'

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
        this.add('vertices', TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('shapeVertices',TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('generated', TYPES.BOOLEAN, false)
        this.add('assetId', TYPES.NUMBER)
        this.add('imageRepeat', TYPES.BOOLEAN, false)
        this.add('imageScale', TYPES.VECTOR, new Vector({x: 1, y: 1}))
        this.add('version', TYPES.NUMBER, 0)
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
            },
            {
                bind: 'imageScale.x',
                label: 'Image Scale X',
                type: Layout.form.TEXT
            },
            {
                bind: 'imageScale.y',
                label: 'Image Scale Y',
                type: Layout.form.TEXT
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
    getVersion(){
        return this.getValue('version')
    }

    /**
     * @param {number} version
     */
    setVersion(version){
        this.setValue('version', version)
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

    /**
     * @return {Vector}
     */
    getImageScale(){
        return this.getValue('imageScale')
    }

    /**
     * @param {Vector} imageScale
     */
    setImageScale(imageScale){
        this.setValue('imageScale', imageScale)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }

}