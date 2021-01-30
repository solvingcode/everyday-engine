/**
 * @abstract
 * @class {ProjectExporter}
 */
class ProjectExporter {

    /**
     * @abstract
     * @param {string} data
     */
    async export(data) {
        throw new TypeError('ProjectExport.export must be implemented!')
    }

}

export default ProjectExporter