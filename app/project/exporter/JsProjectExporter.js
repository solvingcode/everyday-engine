define(function(require){

    const ProjectExporter = require('./ProjectExporter.js')
    const FileHelper = require('../../utils/FileHelper.js')

    /**
     * @class {JsProjectExporter}
     * @extends {ProjectExporter}
     */
    class JsProjectExporter extends ProjectExporter{

        /**
         * @override
         */
        export(data){
            FileHelper.save(data, FileHelper.type.JS)
        }

    }

    return JsProjectExporter

})