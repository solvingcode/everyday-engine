define(function(require){

    import ProjectExporter from './ProjectExporter.js'
    import FileHelper from '../../utils/FileHelper.js'

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

    export default JsProjectExporter

})