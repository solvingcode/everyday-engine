define(function () {

    /**
     * Color libs
     */
    class Color {
        /**
         * Generate color from integers
         */
        static fromArrayInt(ints) {
            const int = ints.reduce((sum, num) => sum + parseInt(num), 0)
            const hex = (int & 0x00FFFFFF)
                .toString(16)
                .toUpperCase()
            return hex
        }
    }

    return Color
})