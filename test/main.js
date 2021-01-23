require([
    '/test/schema/schema.test.js',
    '/test/state/stateManager.test.js'
], function(e){
    mocha.setup('bdd')
    mocha.run()
})