import Component from './Component.js'
import Mesh from '../core/Mesh.js'
import Style from '../pobject/Style.js'
import Layout from '../layout/Layout.js'
import Size from '../pobject/Size.js'

export default class MeshComponent extends Component{

    shape
    vertices
    assetId
    style
    mesh
    generated
    size
    imageRepeat

    constructor() {
        super('Mesh')
        this.mesh = new Mesh()
        this.style = new Style()
        this.size = new Size(0)
        this.generated = false
    }

    /**
     * @return {string}
     */
    getShape(){
        return this.shape
    }

    /**
     * @param {string} shape
     */
    setShape(shape){
        this.shape = shape
    }

    /**
     * @return {number}
     */
    getAssetId(){
        return this.assetId
    }

    /**
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.assetId = assetId
    }

    /**
     * @return {Style}
     */
    getStyle(){
        return this.style
    }

    /**
     * @param {Style} style
     */
    setStyle(style){
        this.style = style
    }

    /**
     * @param {Size} size
     */
    setSize(size) {
        this.size = size
    }

    /**
     * @return {Size}
     */
    getSize() {
        return this.size
    }

    /**
     * @return {Mesh}
     */
    getMesh(){
        return this.mesh
    }

    /**
     * @param {Mesh} mesh
     */
    setMesh(mesh){
        this.mesh = mesh
    }

    /**
     * @param {boolean} generated
     */
    setGenerated(generated){
        this.generated = generated
    }

    /**
     * @return {boolean}
     */
    getGenerated(){
       return this.generated
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
        this.vertices = vertices
    }

    /**
     * @return {Vector[]}
     */
    getVertices(){
        return this.vertices
    }

    /**
     * @param {boolean} imageRepeat
     */
    setImageRepeat(imageRepeat){
        this.imageRepeat = imageRepeat
    }

    /**
     * @return {boolean}
     */
    getImageRepeat(){
        return this.imageRepeat
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