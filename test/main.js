require([
    '/test/core/storage.test.js',
    '/test/state/stateManager.test.js'
], function(e){
    mocha.setup('bdd')
    mocha.run()
})