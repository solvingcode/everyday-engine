define(function (require) {

    const ProjectWebExport = require('./ProjectWebExport.js')
    const ProjectBinExport = require('./ProjectBinExport.js')
    const Storage = require('../../core/Storage.js')

    /**
     * @class {ProjectExport}
     */
    class ProjectExport{

        /**
         * @param {string} data
         * @param {string} fileType
         */
        static save(data, fileType){
            if(fileType === Storage.format.WEB){
                ProjectWebExport.save(data)
            }else if(fileType === Storage.format.BIN){
                ProjectBinExport.save(data)
            }
        }

    }

    return ProjectExport

})