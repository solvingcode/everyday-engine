define(function () {

    /**
     * @class {FileHelper}
     */
    class FileHelper{

        /**
         * @param {string} content
         * @param {string} type
         */
        static save(content, type){
            const blob = new Blob([content], {type})
            const a = document.createElement('a')
            a.download = 'webEngine.xml'
            a.href = window.URL.createObjectURL(blob)
            a.click()
        }

        static type = {
            XML: 'text/xml'
        }

    }

    return FileHelper

})