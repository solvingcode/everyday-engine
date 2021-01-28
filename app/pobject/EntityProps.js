define(function () {

    class EntityProps{

        style
        name
        position
        rotation
        size
        advancedStyle
        noiseConfigs

        /**
         * @param {Style} advancedStyle
         */
        setAdvancedStyle(advancedStyle){
            this.advancedStyle = advancedStyle
        }

        /**
         * @return {Style}
         */
        getAdvancedStyle(){
            return this.advancedStyle
        }

        /**
         * @param {PerlinNoiseConfig} noiseConfigs
         */
        setNoiseConfigs(noiseConfigs){
            this.noiseConfigs = noiseConfigs
        }

        /**
         * @return {PerlinNoiseConfig}
         */
        getNoiseConfigs(){
            return this.noiseConfigs
        }

        /**
         * @param {string} name
         */
        setName(name) {
            this.name = name
        }

        /**
         * @return {string}
         */
        getName() {
            return this.name
        }

        /**
         * Set the entity's position
         * @param {Vector} position
         */
        setPosition(position) {
            this.position = position
        }

        /**
         * @return {Vector}
         */
        getPosition() {
            return this.position
        }

        /**
         * @param {Size} value
         */
        setSize(value) {
            this.size = value
        }

        /**
         * @return {Size}
         */
        getSize() {
            return this.size
        }

        /**
         * @param {string} style
         */
        setStyle(style) {
            this.style = style
        }

        /**
         * @return {string}
         */
        getStyle() {
            return this.style
        }

        /**
         * @param {number} value
         */
        setRotation(value) {
            this.rotation = value
        }

        /**
         * @return {number}
         */
        getRotation() {
            return this.rotation
        }

    }

    export default EntityProps

})