var test = require('tape')
var fm = require('first-mate')
var selector = require('../')

test('can',function(t){
  var reg = new fm.GrammarRegistry({maxToken:Infinity})
  var s = selector()

  var g = s.selectGrammar(reg)

  t.equals(g.name,'Null Grammar','should have selected the null-grammar')
  t.end()
})

test('identifies grammar based on file extension', function(t) {
  const registry = new fm.GrammarRegistry({maxToken:Infinity})
  registry.loadGrammarSync('test/fixtures/javascript.json')

  t.equals(selector().selectGrammar(registry, '/tmp/source.js').scopeName, 'source.js')
  t.equals(selector().selectGrammar(registry, '/tmp/source.JS').scopeName, 'source.js')
  t.end()
})
