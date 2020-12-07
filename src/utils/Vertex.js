define(function (require) {

    const Vector = require('./Vector.js')

    /**
     * Define methods to manipulate vertices
     */
    class Vertex {
        /**
         * @param {{x: number, y: number}[]} vertices
         */
        static getArea(vertices) {
            let area = 0, jVertex = vertices.length - 1;
            vertices.forEach((vertex, iVertex) => {
                area += (vertices[jVertex].x - vertex.x) * (vertices[jVertex].y + vertex.y);
                jVertex = iVertex;
            })
            return area / 2;
        }

        /**
         * Calculate the centroid of the given vertices
         * @param {{x: number, y: number}[]} vertices
         */
        static getCenter(vertices){
            const area = this.getArea(vertices)
            let center = { x: 0, y: 0 }

            vertices.forEach((vertex, iVertex) => {
                const jVertex = (iVertex + 1) % vertices.length
                const cross = Vector.cross(vertex, vertices[jVertex])
                const multiply = Vector.multiply(Vector.add(vertex, vertices[jVertex]), cross)
                center = Vector.add(center, multiply)
            })

            return Vector.divide(center, 6 * area);
        }
    }

    return Vertex
})