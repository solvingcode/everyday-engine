import Schema from '../src/app/schema/Schema.js'
import Vector from '../src/app/utils/Vector.js'
import {expect} from '@jest/globals'
import ComponentAttribute from '../src/app/pobject/ComponentAttribute.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'
import unitsData from './__fixtures__/units.data.js'
import Physics from '../src/app/physics/Physics.js'

test('Schema validate Vector', async function () {
    const data = {x: 100, y: 200, z: 0}
    const result = await Schema.validate('position', data, Schema.getMeta(), {serialize: true}, 'world.camera.')
    expect(result).toStrictEqual(new Vector({x: 100, y: 200}))
})

test('Schema validate Dynamic type', async function () {
    const data = {attrName: 'component1', attrType: TYPES.NUMBER, attrValue: '120'}
    const result = await Schema.validate(
        'element', data, Schema.getMeta(),
        {serialize: true}, 'world.unitManager.units.element.components.element.attributes.')
    const componentAttribute = new ComponentAttribute()
    componentAttribute.setAttrName('component1')
    componentAttribute.setAttrType(TYPES.NUMBER)
    componentAttribute.setAttrValue(120)
    expect(result).toStrictEqual(componentAttribute)
})

test('Schema validate deserialize units', async function () {
    const result = await Schema.validate(
        'units', unitsData, Schema.getMeta(),
        {serialize: false}, 'world.unitManager.')
    expect(result.length).toBe(1)
    // expect(result[0].getComponents().length).toBe(3)
})

test('Schema validate physics engine', async function () {
    const data = {
        "dataId": "5",
        "physicsEngine": {}
    }
    const expected = new Physics()
    expected.setDataId(5)
    expected.setIsRunning(false)
    expected.setPhysicsEngine(undefined)
    expected.setToRestart(false)
    const result = await Schema.validate(
        'physics', data, Schema.getMeta(),
        {serialize: false}, 'world.')
    expect(result).toStrictEqual(expected)
})