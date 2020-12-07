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
            this.setStatic(true)

            const maxX = 1000
            const maxY = 200

            const points = []
            const step = 10

            points.push({x: 0, y: maxY})
            for(let i = step; i <= maxX; i+=step){
                const height = maxY * Math.random()
                points.push({x: i, y: Math.floor(height)})
            }
            points.push({x: maxX, y: maxY})

            this.setPoints(points)
        }
    }

    return NoiseEntity
})