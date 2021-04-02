import Component from '../Component.js'
import Mesh from '../../core/Mesh.js'
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
        this.add('mesh', TYPES.MESH, new Mesh())
        this.add('style', TYPES.STYLE, new Style())
        this.add('size', TYPES.SIZE, new Size(0))
        this.add('vertices', TYPES.ARRAY_VECTOR, [])
        this.add('shapeVertices', TYPES.ARRAY_VECTOR, [])
        this.add('generated', TYPES.BOOLEAN, false)
        this.add('assetId', TYPES.NUMBER)
        this.add('imageRepeat', TYPES.BOOLEAN, false)
    }

    /**
     * @return {string}
     */
    getShape(){
        return this.get('shape').getAttrValue()
    }

    /**
     * @param {string} shape
     */
    setShape(shape){
        this.set('shape', shape)
    }

    /**
     * @return {number}
     */
    getAssetId(){
        return this.get('assetId').getAttrValue()
    }

    /**
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.set('assetId', assetId)
    }

    /**
     * @return {Style}
     */
    getStyle(){
        return this.get('style').getAttrValue()
    }

    /**
     * @param {Style} style
     */
    setStyle(style){
        this.set('style', style)
    }

    /**
     * @param {Size} size
     */
    setSize(size) {
        this.set('size', size)
    }

    /**
     * @return {Size}
     */
    getSize() {
        return this.get('size').getAttrValue()
    }

    /**
     * @return {Mesh}
     */
    getMesh(){
        return this.get('mesh').getAttrValue()
    }

    /**
     * @param {Mesh} mesh
     */
    setMesh(mesh){
        this.set('mesh', mesh)
    }

    /**
     * @param {boolean} generated
     */
    setGenerated(generated){
        this.set('generated', generated)
    }

    /**
     * @return {boolean}
     */
    getGenerated(){
        return this.get('generated').getAttrValue()
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
        this.set('vertices', vertices)
    }

    /**
     * @return {Vector[]}
     */
    getVertices(){
        return this.get('vertices').getAttrValue()
    }

    /**
     * @param {Vector[]} shapeVertices
     */
    setShapeVertices(shapeVertices){
        this.set('shapeVertices', shapeVertices)
    }

    /**
     * @return {Vector[]}
     */
    getShapeVertices(){
        return this.get('shapeVertices').getAttrValue()
    }

    /**
     * @param {boolean} imageRepeat
     */
    setImageRepeat(imageRepeat){
        this.set('imageRepeat', imageRepeat)
    }

    /**
     * @return {boolean}
     */
    getImageRepeat(){
        return this.get('imageRepeat').getAttrValue()
    }

    /**
     * @return {boolean}
     */
    isImageRepeat(){
        return this.getImageRepeat()
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

}