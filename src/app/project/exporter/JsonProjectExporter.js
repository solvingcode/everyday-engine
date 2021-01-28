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
    export(data) {
        FileHelper.save(data, FileHelper.type.Json, 'world')
    }

}

export default JsonProjectExporter