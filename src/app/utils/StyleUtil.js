import {STYLE_THEME} from '../core/Constant.js'

/**
 * Style utils
 */
class StyleUtil {
    /**
     * is theme dark
     */
    static isThemeDark() {
        return STYLE_THEME === 'dark'
    }
}

export default StyleUtil