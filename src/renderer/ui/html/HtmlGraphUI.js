define(function (require) {

    const ItemUI = require('./ItemUI.js')
    const GraphLineUI = require('./components/graph/GraphLineUI.js')

    class HtmlGraphUI extends ItemUI {
        /**
         * Draw a graph.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }

        /**
         * @override
         */
        static postCreate(item, el) {
            const { graph } = item.element
            if (graph.data.length) {
                const image = this.getGraph(graph)
                el.setAttribute(this.props.version, graph.version)
                if (image) {
                    el.appendChild(image)
                }
            }
        }

        /**
         * @override
         */
        static postUpdate(item, el) {
            const { graph } = item.element
            if (graph.data.length) {
                const version = el.getAttribute(this.props.version)
                if (version != graph.version) {
                    el.innerHTML = ''
                    this.postCreate(item, el)
                }
            }
        }

        /**
         * Get graph
         * @param {Object} graph 
         */
        static getGraph(graph) {
            const { type } = graph
            return (type === 'line' && GraphLineUI.get(graph))
        }
    }

    HtmlGraphUI.props = {
        tag: 'div',
        className: 'graph',
        prefix: 'graph-',
        version: 'graph-version',
        width: '100%',
        height: '100px'
    }

    return HtmlGraphUI
})