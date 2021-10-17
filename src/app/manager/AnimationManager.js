import ClientError from '../exception/type/ClientError.js'
import Animation from '../animation/Animation.js'
import AnimationParser from '../parser/animation/AnimationParser.js'
import Maths from '../utils/Maths.js'

export default class AnimationManager {

    /**
     * @type {Animation[]}
     */
    animations

    /**
     * @type {Animation}
     */
    animationEditing

    constructor() {
        this.animations = []
    }

    /**
     * @return {Animation[]}
     */
    getAnimations(){
        return this.animations
    }

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
     * @param {Timeline} timeline
     * @return {Animation}
     */
    findByTimeline(timeline) {
        return this.animations.find(animation => animation.getTimeline().find(pTimeline => pTimeline === timeline))
    }

    /**
     * @param {Asset} asset
     * @return {Animation[]}
     */
    findAnimationsByAsset(asset) {
        return this.animations.filter(animation => animation.getFrames().find(frame => frame.getAssetId() === asset.getId()))
    }

    /**
     * @param {Asset} asset
     * @return {Animation[]}
     */
    deleteFrameByAsset(asset) {
        this.animations.forEach(animation => {
            const frame = animation.getFrames().find(pFrame => pFrame.getAssetId() === asset.getId())
            frame && animation.deleteFrame(frame)
        })
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
     * @return {Animation}
     */
    load(data) {
        const animation = AnimationParser.parse(data)
        if (animation) {
            this.add(animation)
            return animation
        }
        return null
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
     * @param {Asset} asset
     * @return {Animation}
     */
    findAnimationByAsset(asset){
        return this.getAnimations().find(animation => animation.getAssetId() === asset.getId())
    }

    /**
     * @param {Asset} asset
     */
    openEditing(asset){
        this.closeEditing()
        this.animationEditing = this.findAnimationByAsset(asset)
    }

    /**
     * @return {Animation}
     */
    getEditing(){
        return this.animationEditing
    }

    closeEditing(){
        this.animationEditing = null
    }
}