export default class XmlHelper {

    /**
     * @param {string} string
     * @return {Document|string}
     */
    static parse(string) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(string, 'application/xml')
        if (doc.documentElement.tagName === 'html') {
            return doc.documentElement.textContent
        }
        return doc
    }

}