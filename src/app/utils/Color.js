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
    static rgbToRgba(rgb, opacity) {
        const colors = /^rgb\(([0-9 ]+),([0-9 ]+),([0-9 ]+)\)$/i.exec(rgb)
        return `rgba(${colors[1]},${colors[2]},${colors[3]},${opacity})`
    }

    /**
     * @param {string} hex
     * @param {number} opacity
     * @return {{r: number, g: number, b: number, a: number}}
     */
    static getColorRgba(hex, opacity) {
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
    static hexToRgba(hex, opacity = 1) {
        const colorRgba = this.getColorRgba(hex, opacity)
        if (colorRgba) {
            return `rgba(${colorRgba.r}, ${colorRgba.g}, ${colorRgba.b}, ${colorRgba.a})`
        }
        return null
    }

    /**
     * @param {string} hex
     * @param {number} opacity
     * @return {string|null}
     */
    static hexToRgb(hex, opacity = 1) {
        const colorRgba = this.getColorRgba(hex, opacity)
        if (colorRgba) {
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

    /**
     * @param {string} color
     * @param {number} percent
     * @return {string}
     */
    static shadeColor(color, percent) {

        let r = parseInt(color.substring(1, 3), 16)
        let g = parseInt(color.substring(3, 5), 16)
        let b = parseInt(color.substring(5, 7), 16)

        r = Math.floor(r * (100 + percent) / 100)
        g = Math.floor(g * (100 + percent) / 100)
        b = Math.floor(b * (100 + percent) / 100)

        r = (r < 255) ? r : 255
        g = (g < 255) ? g : 255
        b = (b < 255) ? b : 255

        const RR = ((r.toString(16).length === 1) ? '0' + r.toString(16) : r.toString(16))
        const GG = ((g.toString(16).length === 1) ? '0' + g.toString(16) : g.toString(16))
        const BB = ((b.toString(16).length === 1) ? '0' + b.toString(16) : b.toString(16))

        return '#' + RR + GG + BB
    }

    /**
     * @param {string} rgba
     * @return {{w: number, x: number, y: number, z: number}}
     */
    static rgbaToCoords(rgba) {
        const colors = /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(rgba)
        if (colors) {
            return {
                x: parseInt(colors[1]) / 255,
                y: parseInt(colors[2]) / 255,
                z: parseInt(colors[3]) / 255,
                w: parseFloat(colors[4])
            }
        }
    }
}

export default Color