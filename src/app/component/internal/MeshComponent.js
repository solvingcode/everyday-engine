import Component from '../Component.js'
import Style from '../../pobject/Style.js'
import Size from '../../pobject/Size.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Vector from '../../utils/Vector.js'
import MaterialType from '../../material/MaterialType.js'
import {MODE} from '../../constant/FilterMode.js'

export default class MeshComponent extends Component{

    constructor() {
        super('Mesh')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('shape', TYPES.STRING, PrimitiveShape.RECT_FILL)
        this.add('filter', TYPES.STRING, MODE.NO_SMOOTHING)
        this.add('style', TYPES.STYLE, new Style())
        this.add('size', TYPES.SIZE, new Size(0))
        this.add('material', TYPES.MATERIAL, MaterialType.DEFAULT)
        this.add('vertices', TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('shapeVertices',TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('generated', TYPES.BOOLEAN, false)
        this.add('assetId', TYPES.IMAGE)
        this.add('imageRepeat', TYPES.BOOLEAN, false)
        this.add('imageScale', TYPES.VECTOR, new Vector({x: 1, y: 1}))
        this.add('imagePosition', TYPES.VECTOR, new Vector())
        this.add('imageRepeatAreaMin', TYPES.VECTOR, new Vector())
        this.add('imageRepeatAreaMax', TYPES.VECTOR, new Vector())
        this.add('version', TYPES.NUMBER, 0)
        this.add('mapAssetPositions', TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('mapAssetIds', TYPES.ARRAY | TYPES.NUMBER, [])
        this.add('mapAssetSize', TYPES.SIZE, new Size(0))
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['generated', 'shape', 'shapeVertices', 'vertices',  'version', 'style', 'size', 'mapAssetPositions',
            'mapAssetIds', 'mapAssetSize']
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
     * @return {Size}
     */
    getMapAssetSize(){
        return this.getValue('mapAssetSize')
    }

    /**
     * @param {Size} mapAssetSize
     */
    setMapAssetSize(mapAssetSize){
        this.setValue('mapAssetSize', mapAssetSize)
    }

    /**
     * @return {Vector}
     */
    getImagePosition(){
        return this.getValue('imagePosition')
    }

    /**
     * @param {Vector} imagePosition
     */
    setImagePosition(imagePosition){
        this.setValue('imagePosition', imagePosition)
    }

    /**
     * @return {Vector}
     */
    getImageRepeatAreaMin(){
        return this.getValue('imageRepeatAreaMin')
    }

    /**
     * @param {Vector} imageRepeatAreaMin
     */
    setImageRepeatAreaMin(imageRepeatAreaMin){
        this.setValue('imageRepeatAreaMin', imageRepeatAreaMin)
    }

    /**
     * @return {Vector}
     */
    getImageRepeatAreaMax(){
        return this.getValue('imageRepeatAreaMax')
    }

    /**
     * @param {Vector} imageRepeatAreaMax
     */
    setImageRepeatAreaMax(imageRepeatAreaMax){
        this.setValue('imageRepeatAreaMax', imageRepeatAreaMax)
    }

    /**
     * @return {string}
     */
    getMaterial(){
        return this.getValue('material')
    }

    /**
     * @param {string} material
     */
    setMaterial(material){
        this.setValue('material', material)
    }

    /**
     * @return {string}
     */
    getFilter(){
        return this.getValue('filter')
    }

    /**
     * @param {string} filter
     */
    setFilter(filter){
        this.setValue('filter', filter)
    }

    /**
     * @return {Vector[]}
     */
    getMapAssetPositions(){
        return this.getValue('mapAssetPositions')
    }

    /**
     * @param {Vector[]} mapAssetPositions
     */
    setMapAssetPositions(mapAssetPositions){
        this.setValue('mapAssetPositions', mapAssetPositions)
    }

    /**
     * @return {number[]}
     */
    getMapAssetIds(){
        return this.getValue('mapAssetIds')
    }

    /**
     * @param {Vector[]} mapAssetIds
     */
    setMapAssetIds(mapAssetIds){
        this.setValue('mapAssetIds', mapAssetIds)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }

}