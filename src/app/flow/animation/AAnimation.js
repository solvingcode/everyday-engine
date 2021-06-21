import AEmptyStackFunction from '../function/AEmptyStackFunction.js'

export default class AAnimation extends AEmptyStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super(`${value}` || 'Animation')
    }

}