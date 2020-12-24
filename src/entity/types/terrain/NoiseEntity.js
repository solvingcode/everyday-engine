define(function (require) {

    const PolyEntity = require('../shape/PolyEntity.js')
    const PerlinNoise = require('../../../utils/PerlinNoise.js')

    class NoiseEntity extends PolyEntity {

        constructor(props) {
            super({...props, name: 'Noise Terrain'})
            if(!this.noiseConfigs){
                throw new TypeError('Configs must be set to setup the noises')
            }
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
            const perlinNoise = new PerlinNoise(this.noiseConfigs)
            const points = []
            const step = 10
            const {size} = this.props
            points.push({x: 0, y: size.height})
            for(let i = 0; i <= size.width; i+=step){
                const height = perlinNoise.getPerlinNoise(this.position.x + i, 0)
                points.push({x: i, y: Math.floor(height)})
            }
            points.push({x: size.width, y: points[points.length - 1].y})
            points.push({x: size.width, y: size.height})

            this.setPoints(points)
            super.drawContext(dataContext)
        }
    }

    return NoiseEntity
})