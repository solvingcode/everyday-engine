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
         * @param {PerlinNoiseConfig} noiseConfigs
         */
        setNoiseConfigs(noiseConfigs){
            this.noiseConfigs = noiseConfigs
        }

        /**
         * @param {string} name
         */
        setName(name) {
            this.name = name
        }

        /**
         * Set the entity's position
         * @param {{x: number, y: number}} position
         */
        setPosition(position) {
            this.position = position
        }

        /**
         * @param {{width: number, height: number}} value
         */
        setSize(value) {
            this.size = value
        }

        /**
         * @param {string} style
         */
        setStyle(style) {
            this.style = style
        }

        /**
         * @param {number} value
         */
        setRotation(value) {
            this.rotation = value
        }

    }

    return EntityProps

})