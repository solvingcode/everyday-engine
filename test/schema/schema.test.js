const expect = chai.expect
import Size from '/src/app/pobject/Size.js'
import Schema from '/src/app/schema/Schema.js'
import CircleEntity from '/src/app/entity/types/shape/CircleEntity.js'

describe('Schema', function () {
    it('Should validate Entity Size', async function () {
        const data = {width: 100, height: 200}
        const result = await Schema.validate('size', data, Schema.getMeta(), {serialize: true}, 'world.entityManager.entities.element.')
        expect(result).to.eql(new Size({width: 100, height: 200}))
    })
    it('Should validate Entity', async function () {
        const entity = new CircleEntity()
        entity.setSize({width: 100, height: 100})
        const data = [entity]
        const result = await Schema.validate('entities', data, Schema.getMeta(), {serialize: true}, 'world.entityManager.')
        expect(result[0].getSize()).to.eql(new Size(100))
    })
})