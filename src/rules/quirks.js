'use strict';

var _ = require('underscore');
var Rule = require('./rule');

var QuirksRule = Rule.extend({

  initialize: function(){
    this.description = 'Usage of language quirks';
  },

  /**
   * Run every sub-test in this file.
   * Return false if any of the tests return false
   * @param node The node from esprima
   * @returns {Boolean} False if a test fails. True otherwise
   */
  test: function(node){
    var tests = [this._testUnaryNew, this._testNumericLiteralCallExpression, this._testUnaryIndexOf];
    var results = _.map(tests, function(test){
      return test(node);
    });
    return _.every(results);
  },

  /**
   * Look for a unary expression followed by a New expression.
   * This is commonly seen as '+new Date()' to type convert.
   * @param node The node from esprima
   * @returns {Boolean} True if the node passes the test, false otherwise
   * @private
   */
  _testUnaryNew: function(node){
    if(node.type !== 'UnaryExpression'){
      return true;
    }
    if(node.operator !== '+'){
      return true;
    }
    if(node.argument.type !== 'NewExpression'){
      return true;
    }
    return false;
  },

  _testUnaryIndexOf: function(node){
    if(node.type !== 'UnaryExpression'){
      return true;
    }
    if(!node.argument || node.argument.type !== 'CallExpression'){
      return true;
    }
    if(node.argument.callee.property.name !== 'indexOf'){
      return true;
    }
    return false;
  },

  /**
   * Look for a numeric literal followed by a double dot.
   * This is commonly seen as:
   * '2..toString()'
   * '(2).toString()'
   * '2 .toString()'
   * @param node The node from esprima
   * @returns {Boolean} True if the node passes the test, false otherwise
   * @private
   */
  _testNumericLiteralCallExpression: function(node){
    if(node.type !== 'CallExpression'){
      return true;
    }
    if(node.callee.type !== 'MemberExpression'){
      return true;
    }
    if(node.callee.object.type !== 'Literal'){
      return true;
    }
    return !_.isNumber(node.callee.object.value);
  }

});

module.exports = QuirksRule;