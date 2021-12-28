import ClientError from '../exception/type/ClientError.js'
import Animation from '../animation/Animation.js'
import AnimationParser from '../parser/animation/AnimationParser.js'
import Maths from '../utils/Maths.js'
import AnimationManagerData from '../project/data/AnimationManagerData.js'

export default class AnimationManager extends AnimationManagerData {

    /**
     * @type {Animation}
     */
    animationRecording

    /**
     * @type {Unit}
     */
    unitRecording

    /**
     * @param {string} name
     * @return {Animation}
     */
    findByName(name) {
        return this.animations.find(animation => animation.getName() === name)
    }

    /**
     * @param {number} id
     * @return {Animation}
     */
    findById(id) {
        return this.animations.find(animation => animation.getId() === id)
    }

    /**
     * @param {Animation} animation
     * @return {boolean}
     */
    hasAnimation(animation) {
        return !!this.animations.find(pAnimation => pAnimation === animation)
    }

    /**
     * @param {number} assetId
     * @return {Animation[]}
     */
    findAnimationsByControllerAssetId(assetId) {
        return this.animations.filter(animation => animation.getControllerAssetId() === assetId)
    }

    /**
     * @param {string} name
     * @return {Animation}
     */
    create(name) {
        const animation = new Animation(Maths.generateId(), name)
        this.tryAdd(animation)
        return animation
    }

    /**
     * @param {Animation} animation
     */
    delete(animation) {
        const index = this.animations.findIndex(pAnimation => pAnimation === animation)
        if (index >= 0) {
            this.animations.splice(index, 1)
        } else {
            throw new ClientError(`Animation cannot be deleted ("${animation.getName()}" not found)`)
        }
    }

    /**
     * @param {Animation} animation
     */
    tryAdd(animation) {
        const existAnimation = this.findByName(animation.getName())
        if (existAnimation) {
            throw new ClientError(`Animation with name "${animation.getName()}" already exist!`)
        }
        this.animations.push(animation)
    }

    /**
     * @param {Animation} animation
     */
    add(animation) {
        const index = this.animations.findIndex(pAnimation => pAnimation.getName() === animation.getName())
        if (index >= 0) {
            this.animations[index] = animation
        } else {
            this.animations.push(animation)
        }
    }

    /**
     * @param {Document} data
     * @param {Storage} storage
     * @return {Animation}
     */
    load(data, storage) {
        AnimationParser.parse(data, storage).then(animation => {
            if (animation) {
                this.add(animation)
                return animation
            }
        })
    }

    /**
     * @param {Document} data
     * @param {string} newName
     */
    rename(data, newName){
        AnimationParser.rename(data, newName)
    }

    /**
     * @param {TabManager} tabManager
     * @return {Animation}
     */
    getSelected(tabManager) {
        const assetTab = this.getSelectedAsset(tabManager)
        return assetTab && this.findByName(assetTab.getName())
    }

    /**
     * @param {TabManager} tabManager
     * @return {Asset}
     */
    getSelectedAsset(tabManager) {
        return tabManager.getSelectedContentData()
    }

    /**
     * @return {Unit}
     */
    getUnitRecording(){
        return this.unitRecording
    }

    /**
     * @return {Animation}
     */
    getAnimationRecording(){
        return this.animationRecording
    }

    /**
     * @param {Unit} unit
     * @param {Animation} animation
     */
    startRecording(unit, animation){
        this.unitRecording = unit
        this.animationRecording = animation
    }

    stopRecording(){
        this.unitRecording = null
        this.animationRecording = null
    }

}