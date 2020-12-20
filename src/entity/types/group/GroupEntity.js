define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')

    class GroupEntity extends EntityMotion {

        constructor(props) {
            super({...props, name: 'Group'})
            this.shape = EntityMotion.shapes.GROUP
            this.visible = false
        }

        /**
         * @override
         */
        init() {
            this.entities = []
            return true
        }

        /**
         * @param {string} x
         */
        setPositionX(x) {
            super.setPositionX(x)
            this.getEntities().forEach(entity =>
                entity.setPositionAndGenerate({x: parseInt(x), y: this.position.y}))
        }

        /**
         * @param {string} y
         */
        setPositionY(y) {
            super.setPositionY(y)
            this.getEntities().forEach(entity =>
                entity.setPositionAndGenerate({x: this.position.x, y: parseInt(y)}))
        }

        /**
         * @param {string|number} width
         */
        setWidth(width) {
            super.setWidth(width)
            this.getEntities().forEach(entity =>
                entity.setSizeAndGenerate({width: parseInt(width), height: this.size.height}))
        }

        /**
         * @param {string|number} height
         */
        setHeight(height) {
            super.setHeight(height)
            this.getEntities().forEach(entity =>
                entity.setSizeAndGenerate({width: this.size.width, height: parseInt(height)}))
        }

        /**
         * @return {Entity[]}
         */
        getEntities(){
            return this.entities
        }

        /**
         * @param {Entity[]} entities
         */
        setEntities(entities){
            this.entities = entities
        }

    }

    return GroupEntity
})