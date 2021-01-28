define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    /**
     * AppMenuItem Menu Item
     * Menu responsible for managing application information, props, ...
     */
    class AppMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Information',
                stateCode: '',
                type: Layout.type.TEXT,
                zone: Layout.zone.BOTTOM
            })
            this.startTimeFPS = Date.now()
            this.nbFrame = 0
            this.fps = 0
        }

        /**
         * @override
         */
        update() {
            this.updateFPS()
            this.text = [
                `FPS : ${this.fps}`,
            ]
        }

        /**
         * Update the FPS and show it in the title
         */
        updateFPS() {
            const deltaTime = (Date.now() - this.startTimeFPS) / 1000
            if (deltaTime > 1) {
                this.fps = Math.floor(this.nbFrame / deltaTime)
                this.nbFrame = 0
                this.startTimeFPS = Date.now()
            } else {
                this.nbFrame++
            }
        }

        /**
         * @override
         */
        isValid() {
            return true;
        }
    }

    export default AppMenuItem

})