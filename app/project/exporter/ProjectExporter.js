define(function () {

    /**
     * @abstract
     * @class {ProjectExporter}
     */
    class ProjectExporter{

        /**
         * @abstract
         * @param {string} data
         */
        export(data){
            throw new TypeError('ProjectExport.export must be implemented!')
        }

    }

    return ProjectExporter

})