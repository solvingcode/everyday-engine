import EntityMotion from '../../EntityMotion.js'

export default class AssetEntity extends EntityMotion {

    constructor(props) {
        super({name: 'Asset', ...props})
    }

    /**
     * @override
     */
    init(world) {
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, scaleSize} = dataContext
        context.rect(0, 0, scaleSize.width, scaleSize.height)
    }

}