/**
 * Color libs
 */
class Color {
    /**
     * Generate color from integers
     */
    static fromArrayInt(ints) {
        const int = ints.reduce((sum, num) => sum + parseInt(num), 0)
        return (int & 0x00FFFFFF)
            .toString(16)
            .toUpperCase()
    }

    /**
     * @param {string} rgb
     * @param {number} opacity
     * @return {string}
     */
    static rgbToRgba(rgb, opacity){
        const colors = /^rgb\(([0-9 ]+),([0-9 ]+),([0-9 ]+)\)$/i.exec(rgb)
        return `rgba(${colors[1]},${colors[2]},${colors[3]},${opacity})`
    }

    /**
     * @param {string} hex
     * @param {number} opacity
     * @return {{r: number, g: number, b: number, a: number}}
     */
    static getColorRgba(hex, opacity){
        const colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return colors ? {
            r: parseInt(colors[1], 16),
            g: parseInt(colors[2], 16),
            b: parseInt(colors[3], 16),
            a: opacity
        } : null
    }

    /**
     * @param {string} hex
     * @param {number} opacity
     * @return {string|null}
     */
    static hexToRgba(hex, opacity = 1){
        const colorRgba = this.getColorRgba(hex, opacity)
        if(colorRgba){
            return `rgba(${colorRgba.r}, ${colorRgba.g}, ${colorRgba.b}, ${colorRgba.a})`
        }
        return null
    }

    /**
     * @param {string} hex
     * @param {number} opacity
     * @return {string|null}
     */
    static hexToRgb(hex, opacity = 1){
        const colorRgba = this.getColorRgba(hex, opacity)
        if(colorRgba){
            const normalizeRgba = {
                r: colorRgba.r / 255,
                g: colorRgba.g / 255,
                b: colorRgba.b / 255
            }
            const normalizeBg = {
                r: 0 / 255,
                g: 0 / 255,
                b: 0 / 255
            }
            const colorRgb = {
                r: Math.round((((1 - colorRgba.a) * normalizeBg.r) + (colorRgba.a * normalizeRgba.r)) * 255),
                g: Math.round((((1 - colorRgba.a) * normalizeBg.g) + (colorRgba.a * normalizeRgba.g)) * 255),
                b: Math.round((((1 - colorRgba.a) * normalizeBg.b) + (colorRgba.a * normalizeRgba.b)) * 255)
            }
            return `rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b})`
        }
        return null
    }
}

export default Color