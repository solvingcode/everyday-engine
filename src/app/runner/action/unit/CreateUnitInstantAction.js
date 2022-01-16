import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetUnitXmlGenerator from '../../../generator/unit/AssetUnitXmlGenerator.js'
import Storage from '../../../core/Storage.js'

export default class CreateUnitInstantAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_CREATE_UNIT_INSTANT'

    /**
     * @override
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    static run(mouse, selectedUnits) {
        const world = World.get()
        const assetsManager = world.getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        selectedUnits.forEach(unit => {
            AssetUnitXmlGenerator.generate([unit, ...world.getUnitManager().findChildUnits(unit)])
                .then(dataXml => assetsManager.createUnitInstant(selectedFolder, unit, dataXml, Storage.get()))
        })
        return true
    }

}