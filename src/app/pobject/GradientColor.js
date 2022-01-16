export default class GradientColor {

    /**
     * @type {GradientColorStop[]}
     */
    colors

    /**
     * @param {GradientColorStop[]} colors
     */
    setColors(colors){
        this.colors = colors
    }

    /**
     * @return {GradientColorStop[]}
     */
    getColors(){
        return this.colors
    }

}

export class GradientColorStop{

    /**
     * @param {string} color
     * @param {number} offset
     */
    constructor(color, offset) {
        this.color = color
        this.offset = offset
    }

    /**
     * @type {string}
     */
    color

    /**
     * @type {number}
     */
    offset

    /**
     * @return {string}
     */
    getColor(){
        return this.color
    }

    /**
     * @return {number}
     */
    getOffset(){
        return this.offset
    }

}