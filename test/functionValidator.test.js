import {expect} from '@jest/globals'
import World from '../src/app/world/World.js'
import ScriptComponent from '../src/app/component/internal/ScriptComponent.js'
import StringHelper from '../src/app/utils/StringHelper.js'
import AEvent from '../src/app/flow/event/AEvent.js'
import AThen from '../src/app/flow/promise/AThen.js'
import AReference from '../src/app/flow/reference/AReference.js'

describe('Validate functions', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    functionRegistry.getInstances().forEach(instance => {
        if (!(instance instanceof AEvent) && !(instance instanceof AThen) && !(instance instanceof AReference)) {
            test(`Validate ${instance.getName()}`, function () {
                expect(typeof __[`${StringHelper.normalize(instance.getName())}`]).toEqual('function')
            })
        }
    })
})

describe('Validate inputs', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    functionRegistry.getInstances().forEach(instance => {
        if (!(instance instanceof AEvent) && !(instance instanceof AThen) && !(instance instanceof AReference)) {
            test(`Validate ${instance.getName()}`, function () {
                const functionCode = __[`${StringHelper.normalize(instance.getName())}`].toString()
                const params = instance.getInputs().map(input => input.getAttrName())
                const funcMatch = functionCode.match(/function _default\(([a-zA-Z0-9, ]*)\) {/)
                if (!funcMatch) {
                    throw new Error(`Cannot parse ${functionCode}`)
                }
                const funcParams = funcMatch[1] ? funcMatch[1].split(',').map(param => param.trim()) : []
                expect(funcParams).toEqual(params)
            })
        }
    })
})

describe('Validate outputs', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    functionRegistry.getInstances().forEach(instance => {
        if (!(instance instanceof AEvent) && !(instance instanceof AThen) && !(instance instanceof AReference)) {
            test(`Validate ${instance.getName()}`, function () {
                const functionCode = __[`${StringHelper.normalize(instance.getName())}`].toString()
                const hasOutput = instance.getOutput() || instance.getOutputs().length > 0
                const funcMatch = functionCode.match(/return .+/)
                expect(!!hasOutput).toEqual(!!funcMatch)
            })
        }
    })
})