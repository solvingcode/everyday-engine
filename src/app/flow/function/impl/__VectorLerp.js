import Vector from '../../../utils/Vector.js'

export default function(vectorA,vectorB,constant){
        return Vector.lerp(vectorA, vectorB, constant)
    }