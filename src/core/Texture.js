define(function(require){

    const Mesh = require('./Mesh.js')
    const Maths = require('../utils/Maths.js')
    const TextureData = require('../project/data/TextureData.js')

    /**
     * @class {Texture}
     * @extends {TextureData}
     */
    class Texture extends TextureData{

        constructor() {
            super()
            this.id = Maths.generateId()
            this.name = 'Texture'
            this.mesh = new Mesh()
            this.selected = false
        }

        isSelected(){
            return this.selected
        }

        select(){
            this.selected = true
        }

        unselect(){
            this.selected = false
        }

        /**
         * @param {string} image
         * @return {boolean}
         */
        async load(image){
            return this.mesh.fromImage(image);
        }
    }

    return Texture

})