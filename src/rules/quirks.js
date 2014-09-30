var Rule = require('./rule');

var QuirksRule = Rule.extend({

  initialize: function(){
    this.description = 'Do not use the + operator with the new keyword';
  },

  test: function(node){
    if(node.type !== 'UnaryExpression'){
      return true;
    }
    if(node.operator !== '+'){
      return true;
    }
    if(node.argument.type !== "NewExpression"){
      return true;
    }
    return false;
  }

});

module.exports = QuirksRule;