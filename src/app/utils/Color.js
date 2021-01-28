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
}

export default Color