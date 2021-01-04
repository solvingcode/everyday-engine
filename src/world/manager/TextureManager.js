define(function(require){

    const Texture = require('../../core/Texture.js')
    const TextureManagerData = require('../../project/data/TextureManagerData.js')

    /**
     * @class {TextureManager}
     * @extends {TextureManagerData}
     */
    class TextureManager extends TextureManagerData{

        textures

        constructor() {
            super()
            this.textures = []
        }

        /**
         * @param {string} image
         */
        async setTexture(image){
            const texture = new Texture()
            if(await texture.load(image)){
                this.textures.push(texture)
            }
        }

        /**
         * @return {null}
         */
        getTexture(){
            return null
        }

        /**
         * @param {number} textureId
         * @return {Texture | null}
         */
        findById(textureId){
            return this.textures.find(texture => texture.id === textureId)
        }

    }

    return TextureManager

})