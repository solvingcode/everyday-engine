import ExecutionContext from '../../../executor/ExecutionContext.js'

export default function () {
    const {deltaTime} = ExecutionContext.get()
    return deltaTime
}