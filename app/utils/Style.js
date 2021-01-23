define(function () {

    /**
     * Style utils
     */
    class Style {
        /**
         * is theme dark
         */
        static isThemeDark() {
            return STYLE_THEME === 'dark'
        }
    }

    return Style
})