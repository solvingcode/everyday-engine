define(function(require){

    const ProjectExporter = require('./ProjectExporter.js')
    const FileHelper = require('../../utils/FileHelper.js')

    /**
     * @class {JsonProjectExporter}
     * @extends {ProjectExporter}
     */
    class JsonProjectExporter extends ProjectExporter{

        /**
         * @override
         */
        export(data){
            FileHelper.save(data, FileHelper.type.Json, 'world')
        }

    }

    return JsonProjectExporter

})