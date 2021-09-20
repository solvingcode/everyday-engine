import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'
import Component from '../../../component/Component.js'
import ClientError from '../../../exception/type/ClientError.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import Asset from '../../../asset/Asset.js'
import AssetImage from '../../../asset/types/image/AssetImage.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import AssetAudio from '../../../asset/types/Audio/AssetAudio.js'

export default class AttachComponentValueAction extends Action {

    static STATE = 'ACTION_ATTACH_COMPONENT_VALUE'

    /**
     * @override
     */
    static run() {
        const {start: startData, end: endData} = StateManager.get().getNextProgressData(this.STATE)
        const component = endData.item.parent.getBindObject()
        const attributeName = endData.bind
        if (!(component instanceof Component)) {
            throw new ClientError(`Destination must be a component`)
        }
        if (!(startData instanceof Asset)) {
            throw new ClientError(`Source must be an Asset`)
        }
        const type = DynamicAttributeHelper.getType(component.getAttributes(), attributeName)
        if (type === TYPES.IMAGE) {
            if (!(startData.getType() instanceof AssetImage)) {
                throw new ClientError(`Source must be an Image`)
            }
        }
        if (type === TYPES.AUDIO) {
            if (!(startData.getType() instanceof AssetAudio)) {
                throw new ClientError(`Source must be an Audio`)
            }
        }
        component.setValue(attributeName, startData.getId())
        if (component instanceof MeshComponent) {
            component.setGenerated(false)
        }
        return true
    }

}