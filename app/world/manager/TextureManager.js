define(function(require){

    import Texture from '../../core/Texture.js'
    import TextureManagerData from '../../project/data/TextureManagerData.js'

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
         * @return {Texture}
         */
        getSelectedTexture(){
            return this.getTextures().find(texture => texture.isSelected())
        }

        /**
         * @param {number|string} textureId
         * @return {Texture | null}
         */
        findById(textureId){
            return this.textures.find(texture => texture.id === parseInt(textureId))
        }

    }

    export default TextureManager

})