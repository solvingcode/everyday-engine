import ClassScript from './ClassScript.js'
import AnimationScript from './AnimationScript.js'

export default class AnimatorScript extends ClassScript {

    /**
     * @param {AnimationScript} animation
     */
    deleteAnimation(animation) {
        const index = this.animations.findIndex(pAnimation => pAnimation === animation)
        if (index >= 0) {
            this.animations.splice(index, 1)
        }
    }

    /**
     * @param {Animation} animation
     * @return {boolean}
     */
    hasAnimation(animation) {
        return !!this.animations.find(pAnimation => pAnimation === animation)
    }

    /**
     * @param {Animation} animation
     */
    addAnimation(animation) {
        if (!this.hasAnimation(animation)) {
            const animationScript = new AnimationScript()
            animationScript.setAnimation(animation.getId())
            animationScript.setId(animation.getId())
            animationScript.setName(animation.getName())
            this.animations.push(animationScript)
        }
    }

}