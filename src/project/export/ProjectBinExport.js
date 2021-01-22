define(function (require) {

    const FileHelper = require('../../utils/FileHelper.js')

    /**
     * @class {ProjectBinExport}
     */
    class ProjectBinExport{

        /**
         * @param {string} data
         */
        static save(data){
            FileHelper.save(data, FileHelper.type.BIN)
        }

    }

    return ProjectBinExport

})