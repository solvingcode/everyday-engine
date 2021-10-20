import Data from './Data.js'

export default class AnimationManagerData extends Data {

    /**
     * @type {Animation[]}
     */
    animations

    constructor() {
        super()
        this.animations = []
    }

    /**
     * @return {Animation[]}
     */
    getAnimations(){
        return this.animations
    }

    /**
     * @param {Animation[]} animations
     */
    setAnimations(animations){
        this.animations = animations
    }

    /**
     * @param {Animation[]} animations
     */
    concatAnimations(animations) {
        this.setAnimations(animations)
    }

}