import Vector from '../src/app/utils/Vector.js'
import SchemaValidator from '../src/app/schema/SchemaValidator.js'
import {expect} from '@jest/globals'
import DynamicAttribute from '../src/app/pobject/DynamicAttribute.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'
import unitsData from './__fixtures__/units.data.js'
import worldData from './__fixtures__/world.data.js'
import Physics from '../src/app/physics/Physics.js'
import TransformComponent from '../src/app/component/internal/TransformComponent.js'

test('Schema serialization validate Vector', async function () {
    const data = {x: "100", y: "200"}
    const result = await SchemaValidator.get().validate('world.camera.position', data)
    expect(result).toStrictEqual(new Vector({x: 100, y: 200}))
})

test('Schema serialization validate TRUE Boolean', async function () {
    const dataString = "true"
    const dataBoolean = true
    const resultString = await SchemaValidator.get().validate('world.showGrid', dataString)
    const resultBoolean = await SchemaValidator.get().validate('world.showGrid', dataBoolean)
    expect(resultString).toEqual(true)
    expect(resultBoolean).toEqual(true)
})

test('Schema serialization validate FALSE Boolean', async function () {
    const dataString = "test"
    const dataBoolean = false
    const resultString = await SchemaValidator.get().validate('world.showGrid', dataString)
    const resultBoolean = await SchemaValidator.get().validate('world.showGrid', dataBoolean)
    expect(resultString).toEqual(false)
    expect(resultBoolean).toEqual(false)
})

test('Schema serialization validate Array Dynamic type', async function () {
    const data = {attrName: 'component1', attrType: TYPES.NUMBER, attrValue: '120'}
    const result = await SchemaValidator.get().validate(
        'world.unitManager.units.element.components.element.attributes.element', data)
    const componentAttribute = new DynamicAttribute()
    componentAttribute.setAttrName('component1')
    componentAttribute.setAttrType(TYPES.NUMBER)
    componentAttribute.setAttrValue(120)
    expect(result.getAttrType()).toEqual(componentAttribute.getAttrType())
    expect(result.getAttrName()).toEqual(componentAttribute.getAttrName())
    expect(result.getAttrValue()).toEqual(componentAttribute.getAttrValue())
})

test('Schema serialization validate One Dynamic type', async function () {
    const data = {attrName: '__result__', attrType: TYPES.NUMBER, attrValue: '120'}
    const result = await SchemaValidator.get().validate(
        'world.functionRegistry.registry.element.output', data)
    const expectedAttribute = new DynamicAttribute()
    expectedAttribute.setAttrName('__result__')
    expectedAttribute.setAttrType(TYPES.NUMBER)
    expectedAttribute.setAttrValue(120)
    expect(result.getAttrType()).toEqual(expectedAttribute.getAttrType())
    expect(result.getAttrName()).toEqual(expectedAttribute.getAttrName())
    expect(result.getAttrValue()).toEqual(expectedAttribute.getAttrValue())
})

test('Schema serialization validate One Dynamic type if null', async function () {
    const result = await SchemaValidator.get().validate(
        'world.functionRegistry.registry.element.output', null)
    expect(result).toBeNull()
})

test('Schema validate deserialize units', async function () {
    const result = await SchemaValidator.get().validate('world.unitManager.units', unitsData)
    expect(result.length).toBe(1)
    expect(result[0].getComponents().length).toBe(4)
    expect(result[0].getComponent(TransformComponent).getPosition()).toStrictEqual(new Vector({x: 100, y: 150}))
})

test('Schema validate physics engine', async function () {
    const data = {
        "dataId": "5",
        "physicsEngine": {}
    }
    const expected = new Physics()
    expected.setIsRunning(false)
    expected.setPhysicsEngine(undefined)
    expected.setToRestart(false)
    const result = await SchemaValidator.get().validate('world.physics', data)
    expect(result).toStrictEqual(expected)
})

test('Schema validate world', async function () {
    const result = await SchemaValidator.get().validate('world', worldData)
    const units = result.getUnitManager().getUnits()
    expect(units.length).toBe(1)
    expect(units[0].getComponents().length).toBe(4)
    expect(units[0].getComponent(TransformComponent).getPosition()).toStrictEqual(new Vector({x: 150, y: 80}))
    expect(result.getCamera().getPosition()).toStrictEqual(new Vector({x: -924, y: -490.5}))
})