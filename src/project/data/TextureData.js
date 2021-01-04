define(function(require){

    const Data = require('./Data.js')

    /**
     * @abstract
     * @extends {Data}
     */
    class TextureData extends Data{

        id
        name

        /**
         * @param {number} id
         */
        setId(id){
            this.id = id
        }

        /**
         * @param {number} name
         */
        setName(name){
            this.name = name
        }

    }

    return TextureData

})