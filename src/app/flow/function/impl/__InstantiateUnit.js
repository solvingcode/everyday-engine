import StorageHelper from '../../../utils/StorageHelper.js'
import ExecutionContext from '../../../executor/ExecutionContext.js'

export default async function (target) {
    return StorageHelper.loadAssetUnit(target, ExecutionContext.get().storage).then(units => units[0])
}