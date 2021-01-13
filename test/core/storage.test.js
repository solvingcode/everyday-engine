define(function(require) {
    const expect = chai.expect
    const Size = require('/src/pobject/Size.js')
    const Storage = require('/src/core/Storage.js')
    const Schema = require('/src/project/schema/Schema.js')
    const CircleEntity = require('/src/entity/types/shape/CircleEntity.js')
    describe('Storage', function () {
        it('Should validate Entity Size', async function () {
            const storage = new Storage()
            const data = {width: 100, height: 200}
            const result = await storage.validate('size', data, Schema.getMeta(), {serialize: true}, 'world.entityManager.entities.element.')
            expect(result).to.eql(new Size({width: 100, height: 200}))
        })
        it('Should validate Entity', async function () {
            const storage = new Storage()
            const entity = new CircleEntity()
            entity.setSize({width: 100, height: 100})
            const data = [entity]
            const result = await storage.validate('entities', data, Schema.getMeta(), {serialize: true}, 'world.entityManager.')
            expect(result[0].getSize()).to.eql(new Size(100))
        })
    })
})