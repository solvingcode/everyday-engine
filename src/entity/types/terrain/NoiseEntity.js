define(function (require) {

    const PolyEntity = require('../shape/PolyEntity.js')
    const PerlinNoise = require('../../../utils/PerlinNoise.js')

    class NoiseEntity extends PolyEntity {

        constructor(props) {
            super({...props, name: 'Noise Terrain'})
            this.seed = 123456
        }

        /**
         * @override
         */
        init() {
            this.setStatic(true)
            return true
        }

        /**
         * @override
         */
        drawContext(dataContext){
            const perlinNoise = new PerlinNoise(this.seed)
            const points = []
            const step = 10

            points.push({x: 0, y: this.size.height})
            for(let i = 0; i <= this.size.width; i+=step){
                const height = perlinNoise.getPerlinNoise(this.position.x + i, 0)
                points.push({x: i, y: Math.floor(height)})
            }
            points.push({x: this.size.width, y: points[points.length - 1].y})
            points.push({x: this.size.width, y: this.size.height})

            this.setPoints(points)
            super.drawContext(dataContext)
        }
    }

    return NoiseEntity
})