define(function (require) {
    class EntityGenerator {
        static make(entity) {
            throw `make function must be override for ${entity.constructor.name}`
        }
    }

    return EntityGenerator
})