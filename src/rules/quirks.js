var Rule = require('./rule');

var QuirksRule = Rule.extend({

  test: function(node){
    return true;
  }

});

module.exports = QuirksRule;