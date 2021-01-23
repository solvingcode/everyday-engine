define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {TextureManagerData}
     * @extends {Data}
     */
    class TextureManagerData extends Data{

        textures

        /**
         * @return {Texture[]}
         */
        getTextures(){
            return this.textures
        }

        /**
         * @param {Texture[]} textures
         */
        setTextures(textures){
            this.textures = textures
        }

    }

    return TextureManagerData

})