define(function (require) {

    const FileHelper = require('../../utils/FileHelper.js')

    /**
     * @class {ProjectWebExport}
     */
    class ProjectWebExport{

        /**
         * @param {string} data
         */
        static save(data){
            const mainScript = `
                define(function (require) {
                    const Application = require('/src/core/Application.js')
                    const Game = require('/src/loop/Game.js')
                    ${data}
                    
                    let app = new Application([Game])
                    app.start()
                })
            `
            FileHelper.save(data, FileHelper.type.JS)
        }

    }

    return ProjectWebExport

})