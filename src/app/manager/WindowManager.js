export default class WindowManager {

    static instance

    /**
     * @type {string[]}
     */
    windows

    constructor() {
        this.windows = []
    }

    /**
     * @return {string[]}
     */
    getWindows() {
        return this.windows
    }

    /**
     * @param {string} window
     */
    addWindow(window) {
        if (!this.hasWindow(window)) {
            this.windows.push(window)
        }
    }

    /**
     * @param {string} window
     */
    closeWindow(window){
        if(this.hasWindow(window)){
            const index = this.windows.findIndex(pWindow => pWindow === window)
            if(index >= 0){
                this.windows.splice(index, 1)
            }
        }
    }

    /**
     * @param {string} window
     * @return {boolean}
     */
    hasWindow(window) {
        return !!this.windows.find(pWindow => pWindow === window)
    }

    clear() {
        this.windows = []
    }

    /**
     * @return {WindowManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export const WINDOWS = {
    ANIMATION: 'animation'
}