import {STYLE_THEME} from '../core/Constant.js'

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

export default Style