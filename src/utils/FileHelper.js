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

        /**
         * @param {Blob} file
         * @param {string} type
         */
        static load(file, type){
            if(this.validate(file, type)){
                return new Promise((resolve, reject) => {
                    const reader = new FileReader()
                    reader.onload = () => {
                        resolve(reader.result)
                    }
                    reader.onerror = reject
                    reader.readAsText(file)
                })
            }
        }

        /**
         * @param {Blob} file
         * @param {string} type
         * @return {boolean}
         */
        static validate(file, type){
            const fileType = file.type
            return fileType === type
        }

        static type = {
            XML: 'text/xml'
        }

    }

    return FileHelper

})