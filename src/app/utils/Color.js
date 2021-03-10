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
     * @param {string} hex
     * @param {number} opacity
     * @return {string|null}
     */
    static hexToRgba(hex, opacity = 1){
        const colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        const colorRgba = colors ? {
            r: parseInt(colors[1], 16),
            g: parseInt(colors[2], 16),
            b: parseInt(colors[3], 16),
            a: opacity
        } : null
        if(colorRgba){
            return `rgba(${colorRgba.r}, ${colorRgba.g}, ${colorRgba.b}, ${colorRgba.a})`
        }
        return null
    }
}

export default Color