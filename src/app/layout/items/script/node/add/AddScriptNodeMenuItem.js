import AddScriptNodeSubmitMenuItem from './AddScriptNodeSubmitMenuItem.js'
import AddScriptNodeFormMenuItem from './AddScriptNodeFormMenuItem.js'
import PanelMenuItem from '../../../panel/PanelMenuItem.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'
import AssetAnimationScriptXml from '../../../../../asset/types/animation/AssetAnimationScriptXml.js'
import Layout from '../../../../Layout.js'

export default class AddScriptNodeMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}) {
        super({
            name: 'Add node',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            collapsed: true,
            ...props
        })
        this.parent = parent
        const formData = new AddScriptNodeForm()
        this.items = [
            new AddScriptNodeFormMenuItem(this, formData),
            new AddScriptNodeSubmitMenuItem(this, formData)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const asset = world.getScriptManager().getSelectedAsset(world.getTabManager())
        return super.isValid() && asset
            && (asset.getType() instanceof AssetScriptXml || asset.getType() instanceof AssetAnimationScriptXml)
    }
}

export class AddScriptNodeForm {

    /**
     * @type {string}
     */
    type

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    value

    /**
     * @type {number}
     */
    inputType

    constructor() {
        this.type = ''
        this.value = ''
        this.name = ''
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.type = type
    }

    /**
     * @return {string}
     */
    getType() {
        return this.type
    }

    /**
     * @param {string} value
     */
    setValue(value) {
        this.value = value
    }

    /**
     * @return {string}
     */
    getValue() {
        return this.value
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {number} inputType
     */
    setInputType(inputType) {
        this.inputType = inputType
    }

    /**
     * @return {number}
     */
    getInputType() {
        return this.inputType
    }

}