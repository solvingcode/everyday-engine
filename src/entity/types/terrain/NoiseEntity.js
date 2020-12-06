define(function (require) {

    const PolyEntity = require('../shape/PolyEntity.js')

    class NoiseEntity extends PolyEntity {

        constructor(props) {
            super({...props, name: 'Noise Terrain'})
        }

        /**
         * @override
         */
        init() {
            this.size = { width: 20000, height: 50 }
            this.setStatic(true)
            this.setPoints([
                {x: 0, y: 0},
                {x: 10, y: 170},
                {x: 20, y: 140},
                {x: 30, y: 90},
                {x: 40, y: 80},
                {x: 50, y: 70},
                {x: 60, y: 20},
                {x: 0, y: 0}
            ])
        }
    }

    return NoiseEntity
})