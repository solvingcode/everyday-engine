import Vector from './Vector.js'

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
    static getCenter(vertices) {
        const area = this.getArea(vertices)
        let center = {x: 0, y: 0}

        vertices.forEach((vertex, iVertex) => {
            const jVertex = (iVertex + 1) % vertices.length
            const cross = Vector.cross(vertex, vertices[jVertex])
            const multiply = Vector.multiply(Vector.add(vertex, vertices[jVertex]), cross)
            center = Vector.add(center, multiply)
        })

        return Vector.divide(center, 6 * area);
    }

    /**
     * Check if a point is inside a set of vertices
     * @param {Vector[]} vertices
     * @param {Vector} point
     */
    static contains(vertices, point) {
        for (let iVertex = 0; iVertex < vertices.length; iVertex++) {
            const vertex = vertices[iVertex]
            const nextVertex = vertices[(iVertex + 1) % vertices.length]
            if ((point.x - vertex.x) * (nextVertex.y - vertex.y) + (vertex.x - nextVertex.x) * (point.y - vertex.y) > 0) {
                return false
            }
        }
        return true
    }

    /**
     * Rotate a set of vertices by the given angle and point
     * @param {Vector[]} vertices
     * @param {number} angleRadian
     * @param {Vector} point
     *
     * @return {Vector[]}
     */
    static rotate(vertices, angleRadian, point) {
        const cos = Math.cos(angleRadian)
        const sin = Math.sin(angleRadian)
        return vertices.map(vertex => {
            const dx = vertex.x - point.x
            const dy = vertex.y - point.y
            return new Vector({
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            })
        })
    }

    /**
     * Translate a set of vertices by the given vector
     * @param {Vector[]} vertices
     * @param {Vector} vector
     * @param {number} sign
     * @return {Vector[]}
     */
    static translate(vertices, vector, sign = 1) {
        return vertices.map(vertex => (new Vector({
            x: vertex.x + vector.x * sign,
            y: vertex.y + vector.y * sign
        })))
    }
}

export default Vertex