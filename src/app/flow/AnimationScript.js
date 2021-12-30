import Layout from '../layout/Layout.js'

export default class AnimationScript {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {number|string}
     */
    animation

    /**
     * @type {boolean}
     */
    selected

    /**
     * @return {number|string}
     */
    getAnimation() {
        return this.animation
    }

    /**
     * @param {number|string} animation
     */
    setAnimation(animation) {
        this.animation = animation
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @return {boolean}
     */
    getSelected() {
        return this.selected
    }

    /**
     * @return {boolean}
     */
    isSelected() {
        return this.getSelected()
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected) {
        this.selected = selected
    }

    unselect() {
        this.setSelected(false)
    }

    select() {
        this.setSelected(true)
    }

    /**
     * @param {World} world
     * @return {*[]}
     */
    generateFields(world) {
        return [
            {
                bind: 'animation',
                label: 'Animation',
                type: Layout.form.DROPDOWN,
                list: world.getAnimationManager().getAnimations()
                    .map(animation => ({value: animation.getId(), label: animation.getName()}))
            }
        ]
    }

}