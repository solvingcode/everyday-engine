import ProjectExporter from './ProjectExporter.js'
import FileHelper from '../../utils/FileHelper.js'

/**
 * @class {JsonProjectExporter}
 * @extends {ProjectExporter}
 */
class JsonProjectExporter extends ProjectExporter {

    /**
     * @override
     */
    export(data, handle) {
        FileHelper.save(data, FileHelper.type.Json, 'world', handle)
    }

}

export default JsonProjectExporter